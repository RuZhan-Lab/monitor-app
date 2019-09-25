/*
 * @Author: ruzhan
 * @Date: 2019-09-18 10:31:26
 * @Descripttion: 
 * @Org: copyright@meeruu
 * @Email: zhan.ru@meeruu.com
 */
import React from 'react';
import { Select } from 'antd'
const Option = Select.Option;
export default {
    formateDate(time){
        if(!time)return '';
        let date = new Date(time);
        return date.getFullYear()+'-'+(date.getMonth()+1)+'-'+date.getDate()+' '+date.getHours()+':'+date.getMinutes()+':'+date.getSeconds();
    },
    pagination(res,callback){
        return {
            onChange:(current)=>{
    
                callback(current)
            },
            current:parseInt(res.data.page),
            pageSize:parseInt(res.data.pageSize),
            total: res.data.total,
            showTotal:()=>{
                return `共${res.data.total}条`
            },
            showQuickJumper:true
        }
    },
    getOptionList(data){
        if(!data){
            return [];
        }
        let options = [] //[<Option value="0" key="all_key">全部</Option>];
        data.forEach((item)=>{
            options.push(<Option value={item.id} key={item.id}>{item.name}</Option>)
        })
        return options;
    },
    updateSelectedItem(selectedRowKeys, selectedItem, selectedIds){
        if (selectedIds){
            this.setState({
                selectedRowKeys,
                selectedItem,
                selectedIds
            })
        }else{
            this.setState({
                selectedRowKeys,
                selectedItem
            })
        }
    }
}