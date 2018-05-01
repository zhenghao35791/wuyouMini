
Page({
  data: {
    jobRequre: {
      moneyExpect: '',
      paySocial: '',
      workTime: '2018-01-01',
      socialBase: '',
      workWeekend: '',
      workShift: '',
      workStay: '',
    },
    paySocials: [
      { name: 'true', value: '需要', checked: 'true' },
      { name: 'false', value: '不需要' }
    ],
    socialBases: [
      { name: 'true', value: '工作地区最低工资数', checked: 'true' },
      { name: 'false', value: '实际发放的工资数' }
    ],
    workWeekends: [
      { name: 'true', value: '是', checked: 'true' },
      { name: 'false', value: '否' }
    ],
    workShifts: [
      { name: 'true', value: '是', checked: 'true' },
      { name: 'false', value: '否' }
    ],
    workStays: [
      { name: 'true', value: '需要', checked: 'true' },
      { name: 'false', value: '不需要' }
    ],
  },
  // 设置薪资期望
  bindMoneyExpect: function (e) {
    this.setData({
      'jobRequre.moneyExpect': e.detail.value
    });
  },
  // 是否需要缴纳社保
  radioPaySocial: function (e) {
    this.setData({
      'jobRequre.paySocial': e.detail.value
    })
  },
  // 可报道日期
  workTimeChange: function (e) {
    this.setData({
      'jobRequre.workTime': e.detail.value
    })
  },
  // 社保缴纳基数
  radioSocialBase: function (e) {
    this.setData({
      'jobRequre.socialBase': e.detail.value
    })
  },
  // 是否接受周末工作
  radioWorkWeekend: function (e) {
    this.setData({
      'jobRequre.workWeekend': e.detail.value
    })
  },
  // 是否接受倒班
  radioWorkShift: function (e) {
    this.setData({
      'jobRequre.workShift': e.detail.value
    })
  },
  // 是否需要提供住宿
  radioWorkStay: function (e) {
    this.setData({
      'jobRequre.workStay': e.detail.value
    })
  },
  // 保存工作要求
  saveJobRequre: function (e) {
    console.log(this.data.jobRequre);
    wx.navigateBack({ changed: true });//返回上一页  
  }
})