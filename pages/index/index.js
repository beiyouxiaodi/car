//index.js
//获取应用实例
const app = getApp()
var interval = null //倒计时函数
Page({
  data: {
    date: '请选择日期',
    fun_id: 2,
    time: '获取验证码', //倒计时 
    currentTime: 61
  },
  onLoad: function () {
    wx.showModal({
      title: '授权提示',
      content: '若需登录疫苗无忧医生版，疫苗无忧医生版需要获取你的公开信息（昵称、头像等）',
      cancelText:'拒绝',
      confirmText: '授权',
      success: function (res) {
        if (res.confirm) {
          console.log('用户点击确定')
        } else if (res.cancel) {
          console.log('用户点击取消')
        }
      }
    })  
  },
  getCode: function (options) {
    var that = this;
    var currentTime = that.data.currentTime
    interval = setInterval(function () {
      currentTime--;
      that.setData({
        time: currentTime + '秒'
      })
      if (currentTime <= 0) {
        clearInterval(interval)
        that.setData({
          time: '重新发送',
          currentTime: 61,
          disabled: false
        })
      }
    }, 100)
  },
  getVerificationCode() {
    this.getCode();
    var that = this
    that.setData({
      disabled: true
    })
  }
})
