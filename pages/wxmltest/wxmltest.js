// pages/wxmltest/wxmltest.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    id:1000,
    name:"李袁",
    isShow:true,
    flag:false,
    a:1,
    b:2,
    person:{name:'甄姬',age:10},
    personList:[{
      name:'Liyuan',
      age:28
    },{
      name:'昭君',
      age:22
    }]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
  
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
  
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
  
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
  
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
  
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
  
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
  
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
    console.log("s");
  },
  changeState:function(){
    this.setData({
      flag:!this.data.flag
    })
  }
})