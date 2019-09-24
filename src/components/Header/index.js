/*
 * @Author: ruzhan
 * @Date: 2019-09-18 10:31:26
 * @Descripttion: 
 * @Org: copyright@meeruu
 * @Email: zhan.ru@meeruu.com
 */
import React from 'react'
import {withRouter, NavLink} from 'react-router-dom'
import { Breadcrumb, Row,Col } from "antd"
import './index.less'
import Util from '../../utils/utils'
import axios from '../../axios'
import createBreadCrumb from '../../utils/createBreadCrumb'
import menuList from '../../config/menuConfig';

 class Header extends React.Component{
    state={}

    componentDidMount(){

        this.setState({
            userName:'meeruu'
        })
        setInterval(()=>{
            let sysTime = Util.formateDate(new Date().getTime());
            this.setState({
                sysTime
            })
        },1000)
        this.getWeatherAPIData();
    }

    getWeatherAPIData(){
        let city = '杭州';
        axios.jsonp({
            url:'http://api.map.baidu.com/telematics/v3/weather?location='+encodeURIComponent(city)+'&output=json&ak=3p49MVra6urFRGOT9s8UBWr2'
        }).then((res)=>{
            if(res.status === 'success'){
                let data = res.results[0].weather_data[0];
                this.setState({
                    dayPictureUrl:data.dayPictureUrl,
                    weather:data.weather
                })
            }
        })
    }
    render(){

        const menuType = this.props.menuType;
        const pathname = this.props.location.pathname;

        const breadcrumbParams = createBreadCrumb(pathname)(menuList);
        return (
            <div className="header">
                <Row className="header-top">
                    {
                        menuType?
                            <Col span={6} className="logo">
                                <img src="/assets/logo-ant.svg" alt=""/>
                                <span>大移动端后台系统</span>
                            </Col>:''
                    }
                    <Col span={menuType?18:24}>
                        <span>欢迎，{this.state.userName}</span>
                    </Col>
                </Row>
                {
                    menuType?'':
                        <Row className="breadcrumb">
                            <Col span={4} className="breadcrumb-title">
                                <NavLink to={breadcrumbParams.key} >{breadcrumbParams.title}</NavLink>
                            </Col>
                            <Col span={20} className="weather">
                                <span className="date">{this.state.sysTime}</span>
                                <span className="weather-img">
                                    <img src={this.state.dayPictureUrl} alt="" />
                                </span>
                                <span className="weather-detail">
                                    {this.state.weather}
                                </span>
                            </Col>
                        </Row>
                }
            </div>
        );
    }
}

export default withRouter(Header);