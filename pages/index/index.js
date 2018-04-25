Page({
  data: {
    task: {
      name: '',
      address: '点击选择地点',
      signTime: '00:00',
      signEarlyTime: '00:00',
      startDay: '2016-11-00',
      endDay: '2016-11-00',
      repeat: {
        'monday': 1,
        'tuesday': 1,
        'wednesday': 1,
        'thursday': 1,
        'friday': 1,
        'saturday': 0,
        'sunday': 0
      }
    },
    openId: '',
    userInfo: {},
    creating: false,
    button: {
      txt: '新建'
    },
    modalHidden: true
  },// 设置任务名称
  bindKeyInput: function (e) {
    this.setData({
      'task.name': e.detail.value
    });
  },// 设置结束日期
  endDateChange: function (e) {
    this.setData({
      'task.endDay': e.detail.value
    })
  },
  onShow: function () {
    // 恢复新建按钮状态
    this.setData({
      'creating': false
    });
  },
  onLoad: function (options) {
  }

})