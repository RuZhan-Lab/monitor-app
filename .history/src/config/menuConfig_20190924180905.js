/*
 * @Author: ruzhan
 * @Date: 2019-09-18 10:31:26
 * @Descripttion: 
 * @Org: copyright@meeruu
 * @Email: zhan.ru@meeruu.com
 */
import ErrInfo from '../pages/errInfo';
import Test from '../pages/test';
import Home from '../pages/home'

const menuList = [
    {
        title: '数据概览',
        key: '/home',
        component: Home
    },
    {
        title: '错误监控',
        key: '/errInfo',
        component: ErrInfo
    },
    {
        title: '接口调试',
        key: '/test',
        component: Test
    }
];
export default menuList;