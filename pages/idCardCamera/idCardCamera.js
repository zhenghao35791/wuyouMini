Page({
  data: {
    src: '',
  },
  onLoad() {
    this.ctx = wx.createCameraContext(this);
  },
  takePhoto() {
    this.ctx.takePhoto({
      quality: 'high',
      success: (res) => {
        this.setData({
          'src': res.tempImagePath
        })
      }
    })
  },
  error(e) {
    console.log(e.detail)
  }
})