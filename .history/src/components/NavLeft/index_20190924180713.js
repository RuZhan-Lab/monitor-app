/*
 * @Author: ruzhan
 * @Date: 2019-09-18 10:31:26
 * @Descripttion: 
 * @Org: copyright@meeruu
 * @Email: zhan.ru@meeruu.com
 */
import React from 'react'
import { Menu } from 'antd';
import { NavLink } from 'react-router-dom'
import MenuConfig from './../../config/menuConfig'
import './index.less'
const SubMenu = Menu.SubMenu;
export default class NavLeft extends React.Component {


  
    render() {
        return (
            <div>
                <div className="logo">
                    <img src="/assets/icon/sharegoodsavatar.png" alt=""/>
                    <h1>大移动端后台系统</h1>
                </div>
                <Menu
                    theme="dark"
                >
                    { 
                        MenuConfig.map((item)=>{
                            if(item.children){
                                return (
                                    <SubMenu title={item.title} key={item.key}>
                                        { this.renderMenu(item.children)}
                                    </SubMenu>
                                )
                            }
                            return <Menu.Item title={item.title} key={item.key}>
                                <NavLink to={item.key}>{item.title}</NavLink>
                            </Menu.Item>
                        })
                     }
                </Menu>
            </div>
        );
    }
}