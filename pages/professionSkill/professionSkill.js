
Page({
  data: {
    professionSkill: {
      'workingSkills': '',
      'selfIntroduce': '',
      'selfJudge': ''
    }
  },
  // 设置工作技能
  bindWorkingSkills: function (e) {
    this.setData({
      'professionSkill.workingSkills': e.detail.value
    });
  },
  // 设置自我介绍
  bindSelfIntroduce: function (e) {
    this.setData({
      'professionSkill.selfIntroduce': e.detail.value
    });
  },
  // 设置自我评价
  bindSelfJudge: function (e) {
    this.setData({
      'professionSkill.selfJudge': e.detail.value
    });
  },
  // 保存专业技能
  saveProfessionSkill: function (e) {
    console.log(this.data.professionSkill);
    wx.navigateBack({ changed: true });//返回上一页  
  }
})