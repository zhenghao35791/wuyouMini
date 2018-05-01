var app = getApp();

Page({
  data: {
    task: {
      name: '',
      tel: '',
      birthday: '2018-01-01',
      sex: '',
      nation: '',
      address: '点击选择地点',
      email: '',
      IDCard: '',
    },
    sexs: [
      { name: 'male', value: '男', checked: 'true' },
      { name: 'female', value: '女' }
    ],
    region: ['江苏省', '苏州市', '高新区'],
    customItem: '全部'
  },
  // 设置姓名
  bindNameInput: function (e) {
    this.setData({
      'task.name': e.detail.value
    });
  },
  // 设置手机号
  bindTelInput: function (e) {
    this.setData({
      'task.tel': e.detail.value
    });
  },
  // 设置出生日期
  birthDateChange: function (e) {
    this.setData({
      'task.birthday': e.detail.value
    })
  },
  // 设置性别
  radioChange: function (e) {
    this.setData({
      'task.sex': e.detail.value
    })
  },
  // 设置民族
  bindNationInput: function (e) {
    this.setData({
      'task.nation': e.detail.value
    });
  },
  // 设置所在地
  chooseLocation: function () {
    var that = this;
    wx.chooseLocation({
      success: function (res) {
        that.setData({
          'task.address': res.address
        })
      },
      fail: function () {
        // fail
      },
      complete: function () {
        // complete
      }
    })
  },
  // 设置邮箱
  bindEmailInput: function (e) {
    this.setData({
      'task.email': e.detail.value
    });
  },
  // 求职意向跳转
  jobIntention: function () {
    wx.navigateTo({ url: "/pages/jobIntention/jobIntention" });
  },
  // 工作经历跳转
  jobExper: function () {
    wx.navigateTo({ url: "/pages/workExper/workExper" });
  },
  // 学历证书跳转
  educateCerti: function () {
    wx.navigateTo({ url: "/pages/educateCerti/educateCerti" });
  },
  // 专业技能跳转
  professionSkill: function () {
    wx.navigateTo({ url: "/pages/professionSkill/professionSkill" });
  },
  // 工作要求跳转
  jobRequire: function () {
    wx.navigateTo({ url: "/pages/jobRequire/jobRequire" });
  },
  // 其他信息跳转
  otherInfo: function () {
    wx.navigateTo({ url: "/pages/otherInfo/otherInfo" });
  },
  // 设置联系地址
  bindRegionChange: function (e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      region: e.detail.value
    })
  },
  // 设置身份证
  bindIDCardInput: function (e) {
    this.setData({
      'task.IDCard': e.detail.value
    });
  },
  // 
  onShow: function () {
    // 恢复新建按钮状态
    this.setData({
      'creating': false
    });
  },
  onLoad: function (options) {
  }

})