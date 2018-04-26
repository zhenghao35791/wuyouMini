// pages/jobIntention/jobIntention.js

Page({
  data: {
    jobIntent: {
      'intentAddress': '',
      'intentJob': ''
    }
  },
  // 设置意向工作地点
  intentAddressInput: function(e) {
    this.setData({
      'jobIntent.intentAddress': e.detail.value
    });
  },
  // 设置意向工作职位
  intentJobInput: function (e) {
    this.setData({
      'jobIntent.intentJob': e.detail.value
    });
  },
  // 保存求职意向
  saveIntent: function(e) {
    console.log(this.data.jobIntent);
    wx.navigateBack({ changed: true });//返回上一页  
   }
})