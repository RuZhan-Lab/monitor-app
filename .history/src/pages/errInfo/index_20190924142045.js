/*
 * @Author: ruzhan
 * @Date: 2019-09-18 10:43:35
 * @Descripttion: 
 * @Org: copyright@meeruu
 * @Email: zhan.ru@meeruu.com
 */
import React, {Component} from 'react';
import axios from '../../axios';
import Utils from '../../utils/utils'
import {Table, Button} from 'antd';
import IModal from './modal';

class ErrInfo extends Component {

    state = {
      visible: false,
      currentContent: '',
      list: []
    }

    params = {
      page:1
  }

    componentDidMount () {
        this.getDataHandler();
    }

    getDataHandler = () => { 
      let _this = this;
      axios.ajax({
          url:'/getData',
          data:{
              params:{
                  page:this.params.page,
                  pageSize: 20
              }
          }
      }).then((res)=>{
          if(res.code == 0){
              res.data.dataList.forEach((item, index) => {
                  item.key = index;
              })
              this.setState({
                  list:res.data.dataList,
                  selectedRowKeys:[],
                  selectedRows:null,
                  pagination: Utils.pagination(res,(current)=>{
                      _this.params.page = current;
                      this.getDataHandler();
                  })
              })
          }
      })
  }
    

    deleteItemHandler = (id) => {
      axios.ajax({
        url: '/deleteData', 
        data: {
          params: {id}
        }
      }).then(res => {
        this.getDataHandler();
      }).catch(err => {});
    }

    checkCurrentContentHandler

    render () {
        const columns = [
            {
              title: 'id',
              dataIndex: 'id',
              key: 'id',
            },
            {
              title: '错误内容',
              dataIndex: 'content',
              key: 'content',
            },
            {
              title: '时间',
              dataIndex: 'create_date',
              key: 'date',
              render: (text, record) => {
                return (
                  <span>{new Date(text).toLocaleString() + ''}</span>
                );
              }
            },
            {
                title: '处理',
                align: 'center',
                dataIndex: 'delete',
                key: 'delete',
                render: (text, record) => {
                  return (
                    <>
                    <Button 
                    type="primary" 
                    style={{marginRight: '10px'}}
                    onClick={() => this.checkCurrentContentHandler(record.content)}
                    >查看</Button>
                    <Button 
                    type='danger' 
                    onClick={() => this.deleteItemHandler(record.id)}
                    >删除</Button>
                    </>
                    );
                }
            }
          ];

        return (
            <div>
                <Table dataSource={this.state.list} columns={columns} pagination={this.state.pagination}/>
                <IModal
                  visible={this.state.visible}
                  content={this.state.currentContent}
                />
            </div>
        );
    }
}

export default ErrInfo;