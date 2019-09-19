/*
 * @Author: ruzhan
 * @Date: 2019-09-19 13:49:25
 * @Descripttion: 
 * @Org: copyright@meeruu
 * @Email: zhan.ru@meeruu.com
 */
import JsonP from "jsonp";
import axios from "axios";
import { Modal } from "antd";
import Utils from "./../utils/utils";

// axios.defaults.headers['Content-Type'] = 'application/x-www-form-urlencoded';
export default class Axios {
  static requestList(_this, url, params, isMock) {
    var data = {
      params: params,
      isMock
    };
    this.ajax({
      url,
      data
    }).then(res => {
      if (res.data) {
        let list = res.data.dataList.map((item, index) => {
          item.key = index;
          return item;
        });

        _this.setState({
          list,
          pagination: Utils.pagination(res, current => {
            _this.params.page = current;
            _this.requestList();
          })
        });
      }
    });
  }
  static jsonp(options) {
    return new Promise((resolve, reject) => {
      JsonP(
        options.url,
        {
          param: "callback"
        },
        function(err, response) {
          if (response.status === "success") {
            resolve(response);
          } else {
            reject(response.messsage);
          }
        }
      );
    });
  }

  static ajax(options) {
    let loading;
    if (options.data && options.data.isShowLoading !== false) {
      loading = document.getElementById("ajaxLoading");
      loading.style.display = "block";
    }
    let baseApi = "";
    const params = (options.method || '').toLowerCase() === 'post' ? 'data' : 'params';
    return new Promise((resolve, reject) => {
      axios({
        url: options.url,
        method: options.method || "get",
        baseURL: baseApi,
        timeout: 5000,
        [params]: (options.data && options.data.params) || ""
      }).then(response => {
        if (options.data && options.data.isShowLoading !== false) {
          loading = document.getElementById("ajaxLoading");
          loading.style.display = "none";
        }
        if (parse(response.status) === "200") {
          let res = response.data;
          if (res.code === "0") {
            resolve(res);
          } else {
            Modal.info({
              title: "提示",
              content: res.msg
            });
          }
        } else {
          reject(response.data);
        }
      });
    });
  }
}
