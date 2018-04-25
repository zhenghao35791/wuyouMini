var app = getApp();

Page({
  data: {
    task: {
      name: '',
      tel: '',
      IDCard: '',
      birthday: '2018-01-01',
      sex:'',
      address: '点击选择地点'
    },
    items: [
      { name: 'female', value: '女' },
      { name: 'male', value: '男', checked: 'true' }
    ],
    region: ['江苏省', '苏州市', '高新区'],
    customItem: '全部',
    hotelCity: '苏州市'
  },
  // 设置名称
  bindNameInput: function (e) {
    this.setData({
      'task.name': e.detail.value
    });
  },
  // 设置名称
  bindTelInput: function (e) {
    this.setData({
      'task.tel': e.detail.value
    });
  },
  // 设置身份证
  bindIDCardInput: function (e) {
    this.setData({
      'task.IDCard': e.detail.value
    });
  },
  // 设置出生日期
  birthDateChange: function (e) {
    this.setData({
      'task.birthday': e.detail.value
    })
  },
  radioChange: function (e) {
    console.log('radio发生change事件，携带value值为：', e.detail.value);
    this.setData({
      'task.sex': e.detail.value
    })
  },
  // 获取当前地点
  chooseLocation: function () {
    var that = this;

    wx.chooseLocation({
      success: function (res) {
        that.setData({
          'task.address': res.address,
          'task.latitude': res.latitude,
          'task.longitude': res.longitude
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
  // 获取联系地址
  bindRegionChange: function (e) {
    console.log('联系地址改变，携带值为', e.detail.value)
    this.setData({
      'task.region': e.detail.value
    })
  },
  // 选择城市
  selectCity: function (e) {//选择城市 切换保存方法
    var type = e.currentTarget.dataset.type;
    var that = this;
    var url = '../selectcity/selectcity';
    app.globalData.cityFn = function (city) {
          that.setData({
            startCity: city
          });
    };

    wx.navigateTo({
      url
    })
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