/*
 * @Author: ruzhan
 * @Date: 2019-09-19 15:54:40
 * @Descripttion: 
 * @Org: copyright@meeruu
 * @Email: zhan.ru@meeruu.com
 */
import axios from './axios';

window.onerror = function (msg, url, row, col, error) {
    console.log('我知道异步错误了');
    console.log({
      msg,  url,  row, col, error
    })

    axios.ajax({
        url: '/errCatch',
        method: 'POST',
        data: {
            params: {content: JSON.stringify({
                msg,  url,  row, col, error
              })}
        }
    })
    return true;
  };

  window.addEventListener("unhandledrejection", function(e){
    e.preventDefault()
    console.log('我知道 promise 的错误了');
    console.log(e.reason);
    axios.ajax({
        url: '/errCatch',
        method: 'POST',
        data: {
            params: {content: JSON.stringify({reason: e.reason, type: e.type})}
        }
    })
    return true;
  });


  