/*
 * @Author: ruzhan
 * @Date: 2019-09-18 10:43:35
 * @Descripttion: 
 * @Org: copyright@meeruu
 * @Email: zhan.ru@meeruu.com
 */
import React, {Component} from 'react';
import axios from '../../axios';

import {Table, Button} from 'antd';

class ErrInfo extends Component {

    state = {
      list: []
    }

    componentDidMount () {
        this.getDataHandler();
    }


    getDataHandler = () => { 
      axios.requestList(this, '/getData', {page: 1, pageSize: 20})
    }

    deleteItemHandler = (id) => {
      axios.ajax({
        url: '/delete', 
        data: {
          params: {id}
        }
      }).then(res => {
        this.getDataHandler();
      });
    }



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
                dataIndex: 'delete',
                key: 'delete',
                render: (text, record) => {
                  return (
                    <Button type='danger' onClick={() => this.deleteItemHandler(record.id)}>删除</Button>
                  );
                }
            }
          ];

        return (
            <div>
                <Table dataSource={this.state.list} columns={columns}/>
            </div>
        );
    }
}

export default ErrInfo;