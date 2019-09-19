/*
 * @Author: ruzhan
 * @Date: 2019-09-19 15:18:53
 * @Descripttion: 
 * @Org: copyright@meeruu
 * @Email: zhan.ru@meeruu.com
 */
const proxy = require('http-proxy-middleware');
module.exports = function(app) {
    app.use(proxy('/errInfo', 
        { target: 'http://localhost:5000/' }
    ));
    app.use(proxy('/getData', 
        { target: 'http://localhost:5000/' }
    ));
    app.use(proxy('/deleteData', 
        { target: 'http://localhost:5000/' }
    ));
}