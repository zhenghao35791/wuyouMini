
Page({
  data: {
    educate: {
      school: '',
      education:'专科',
      major:''
    },
    index: 0,
    educations: ['小学','初中','高中','职高','专科', '本科', '硕士', '博士', '其他'],
    certis: [
      {
        ceriID: 0,
        certiName: '',
        certiNumber: ''
      }
    ]
  },
  // 设置学校
  bindSchool: function (e) {
    this.setData({
      'educate.school': e.detail.value
    });
  },
  // 设置学历
  bindEducation: function (e) {
    console.log(this.data.educations[this.data.index]);
    this.setData({
      'educate.education': this.data.educations[e.detail.value]
    });
  },
  // 设置专业
  bindMajor: function (e) {
    this.setData({
      'educate.major': e.detail.value
    });
  },
  // 添加证书
  addCeri: function () {
    // 获取当前certis长度
    var ceriLength = this.data.certis.length;
    // 获取当前certis最大的workID
    var newceriID = this.data.certis[ceriLength - 1].ceriID;
    // 获取新增的证书名称的ceriID
    this.data.certis.push(
      {
        ceriID: newceriID + 1,
        certiName: '',
        certiNumber: ''
      }
    );
    this.setData({
      certis: this.data.certis
    })
    console.log(this.data.certis);
  },
  // 设置证书名称
  bindCetiName: function (e) {
    var id = e.currentTarget.id;
    this.data.certis[id].certiName = e.detail.value;
    this.setData({
      'certis': this.data.certis
    })
   },
  // 设置证书编号
  bindCetiNumber: function (e) {
    var id = e.currentTarget.id;
    this.data.certis[id].certiNumber = e.detail.value;
    this.setData({
      'certis': this.data.certis
    })
  },
  // 保存证书
  saveCeris: function (e) {
    console.log('保存证书信息');
    console.log(this.data.certis);
    console.log(this.data.educate);
    wx.navigateBack({ changed: true });//返回上一页  
  },
  onLoad: function (options) {

  }
})