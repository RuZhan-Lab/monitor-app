/*
 * @Author: ruzhan
 * @Date: 2019-09-18 10:31:26
 * @Descripttion: 
 * @Org: copyright@meeruu
 * @Email: zhan.ru@meeruu.com
 */
import ErrInfo from './pages/errInfo';
import Test from './pages/test';
import Home from './pages/home'

const menuList = [
    {
        title: '首页',
        key: '/home',
        component: Home
    },
    {
        title: '错误信息',
        key: '/errInfo',
        component: ErrInfo
    },
    {
        title: '测试',
        key: '/test'
    }
];
export default menuList;