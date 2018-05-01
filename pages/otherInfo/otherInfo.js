
Page({
  data: {
    otherInfo: {
      height: '',
      weight: '',
      marrige: '',
      emergencyConntact: '',
      emergencyTel: '',
      partyMember: '', 
      smoke: '',
      partyYear: '',
      language: ''
    },
    marriges: [
      { name: 'true', value: '已婚', checked: 'true' },
      { name: 'false', value: '未婚' }
    ],
    partyMembers: [
      { name: 'true', value: '是', checked: 'true' },
      { name: 'false', value: '否' }
    ],
    smokes: [
      { name: 'true', value: '是', checked: 'true' },
      { name: 'false', value: '否' }
    ]
  },
  // 设置身高
  bindHeight: function (e) {
    this.setData({
      'otherInfo.height': e.detail.value
    });
  },
  // 设置体重
  bindWeight: function (e) {
    this.setData({
      'otherInfo.weight': e.detail.value
    });
  },
  // 婚姻状况
  radioMarrige: function (e) {
    this.setData({
      'otherInfo.marrige': e.detail.value
    })
  },
  // 设置紧急联系人
  bindEmergencyConntact: function (e) {
    this.setData({
      'otherInfo.emergencyConntact': e.detail.value
    });
  },
  // 设置紧急联系电话
  bindEmergencyTel: function (e) {
    this.setData({
      'otherInfo.emergencyTel': e.detail.value
    });
  },
  // 是否党员
  radioPartyMember: function (e) {
    this.setData({
      'otherInfo.partyMember': e.detail.value
    })
  },
  // 是否吸烟
  radioSmoke: function (e) {
    this.setData({
      'otherInfo.smoke': e.detail.value
    })
  },
  // 党龄
  bindPartyYear: function (e) {
    this.setData({
      'otherInfo.partyYear': e.detail.value
    });
  },
  // 外语
  bindLanguage: function (e) {
    this.setData({
      'otherInfo.language': e.detail.value
    });
  },
  // 保存其他信息
  saveOtherInfo: function (e) {
    console.log(this.data.otherInfo);
    wx.navigateBack({ changed: true });//返回上一页  
  }
})