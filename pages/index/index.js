//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    imgUrls: [
      '/images/swiper01.jpg',
      '/images/swiper02.jpg',
      '/images/swiper03.jpg',
    ],
    indicatorDots: false,
    autoplay: false,
    interval: 5000,
    duration: 1000,
    proList: [
      {
      title:"精英贷款1",
      shortDesc:"最快三小时\n22岁以上\n放款十万",
      img:"/images/pro_01.jpg",
      },
      {
        title: "精英贷款2",
        shortDesc: "最快三小时\n22岁以上\n放款十万",
        img: "/images/pro_01.jpg",
      }
    ],
  },
  onLoad: function () {
    this.setData({
      test: '01',
    })
    // this.getProList();
  },
  toDetail: function(e){
    console.log(e);
    var index = e.currentTarget.dataset.index;
    console.log(index);
    var proList = this.data.proList;
    var title = proList[index].title;
    wx.setStorageSync('title', title);
    wx.navigateTo({
      url: '/pages/detail/detail?title='+title,
    })
  },
  getProList: function(){
    var self = this;
    wx.request({
      /*获取全局变量*/
      url: app.globalData.host,
      method: 'GET',
      success: function(res){
        console.log(res);
        self.setData({
          proList: res.data,
        })
      },
      fail: function(){

      }
    })
  },
  
  copy: function(){
    if (wx.setClipboardData){
      wx.setClipboardData({
        data: '232323232',
        success: function (res) {
          wx.showModal({
            title: '复制成功',
            content: '内容已经复制成功！',
          })
        }
      })
    }
    else{
      wx.showModal({
        title: '提示',
        content: '您的微信版本太低，请升级',
      })
    }
  }
})
