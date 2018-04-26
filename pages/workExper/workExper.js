// pages/workExper/workExper.js
Page({
  data: {
    workExpers: [
      {
        workID: 0,
        workTimeStart: '2018-01-01',
        workTimeEnd: '2018-01-01',
        workCompany: '',
        workJob: ''
      }
    ]
  },
  // 添加工作经历
  addWorkExper: function () {
    // 获取当前workExpers长度
    var workLength = this.data.workExpers.length;
    // 获取当前workExpers最大的workID
    var newWorkID = this.data.workExpers[workLength - 1].workID;
    // 获取新增的工作经历的workID
    this.data.workExpers.push(
      {
        workID: newWorkID + 1,
        workTimeStart: '2018-01-01',
        workTimeEnd: '2018-01-01',
        workCompany: '',
        workJob: ''
      }
    );
    this.setData({
      workExpers: this.data.workExpers
    })
    console.log(this.data.workExpers);
  },
  // 设置公司
  bindWorkCompany: function (e) {
    var id = e.currentTarget.id;
    this.data.workExpers[id].workCompany = e.detail.value;
    this.setData({
      'workExpers': this.data.workExpers
    })
   },
  // 设置职位
  bindWorkJob: function (e) {
    var id = e.currentTarget.id;
    this.data.workExpers[id].workJob = e.detail.value;
    this.setData({
      'workExpers': this.data.workExpers
    })
  },
  // 设置开始日期
  startDateChange: function (e) {
    var id = e.currentTarget.id;
    this.data.workExpers[id].workTimeStart = e.detail.value;
    this.setData({
      'workExpers': this.data.workExpers
    })
  },
  // 设置结束日期
  endDateChange: function (e) {
    var id = e.currentTarget.id;
    this.data.workExpers[id].workTimeEnd = e.detail.value;
    this.setData({
      'workExpers': this.data.workExpers
    })
  },
  // 保存工作经历
  saveIntent: function (e) {
    console.log(this.data.workExpers);
    wx.navigateBack({ changed: true });//返回上一页  
  },
  onLoad: function (options) {

  }
})