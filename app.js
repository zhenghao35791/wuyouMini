//app.js
var promise = require('utils/promise.js');

App({
  globalData: {
    /* 定义全局变量 */
    userInfo: null,
    host: 'http://localhost:5000',
    baseurl: 'https://vacations.ceair.com/wechat', //线上的接口
  },
  
  fetchApi(url, params, method = 'GET') {
    let methodParam = {
      method: method
    };

    let accessToken = {};
    if (this.exist(this.globalData.AccessToken)) {
      accessToken = {
        'AccessToken': this.globalData.AccessToken
      }
    }

    return new promise((resolve, reject) => {
      wx.request(
        Object.assign({
          url: `${this.globalData.baseurl}/${url}`,
          data: Object.assign({}, params),
          header: Object.assign({
            'Content-Type': 'application/json'
          }, accessToken),
          method: method,
          success: resolve,
          fail: reject
        }, methodParam)
      )
    }).then((data) => {
      return promise.resolve(data.data);
    }).catch((err) => {
      console.log(err);
    })
  },

  get(url, params) {
    return this.fetchApi(url, params);
  },

  post(url, params) {
    return this.fetchApi(url, params, 'POST');
  },

  exist(val) {
    if (!!val) {
      return true
    } else {
      return false
    }
  },

  onLaunch: function () {
    
  }
 
})