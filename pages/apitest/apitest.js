// pages/apitest/apitest.js
const backgroundAudioManager = wx.getBackgroundAudioManager()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    animationData: {}
  },
  bindRequest:function(){
    var _this = this
    wx.request({
      url: 'http://172.19.70.160:8080/province/get',
      data:{
        parentCode:'C086'
      },
      header:{
        'Content-Type':'application/json'
      },
      success:res => {
        console.log(res)
      }
    })
  },
  bindUpload:function(){
    wx.chooseImage({
      success: function (res) {
        var tempFilePaths = res.tempFilePaths
        wx.uploadFile({
          url: 'http://127.0.0.1:8080/leolder/hero/fileUpload',
          filePath: tempFilePaths[0],
          name: 'file',
          formData: {
            // 'user': 'test'
          },
          success: function (res) {
            var data = res.data
            console.log(data)
          }
        })
      }
    })
  },
  bindDownload:function(){
    wx.downloadFile({
      url: 'http://127.0.0.1:8080/leolder/hero/download', 
      success: function (res) {
        // 只要服务器有响应数据，就会把响应内容写入文件并进入 success 回调，业务需要自行判断是否下载到了想要的内容
        if (res.statusCode === 200) {
          console.log(res.tempFilePath)
          wx.saveFile({
            tempFilePath: res.tempFilePath,
            success:function(res){
              console.log(res)
              console.log(res.savedFilePath)
            }
          })
        }
      }
    })
  },
  bindChooseImg:function(){
    wx.chooseImage({
      count: 9, // 默认9
      sizeType: ['original', 'compressed'], // 可以指定是原图还是压缩图，默认二者都有
      sourceType: ['album', 'camera'], // 可以指定来源是相册还是相机，默认二者都有
      success: function (res) {
        // 返回选定照片的本地文件路径列表，tempFilePath可以作为img标签的src属性显示图片
        var tempFilePaths = res.tempFilePaths
        console.log(tempFilePaths)
      }
    })
  },
  bindPreviewImg:function(){
    wx.chooseImage({
      count: 9, // 默认9
      sizeType: ['original', 'compressed'], // 可以指定是原图还是压缩图，默认二者都有
      sourceType: ['album', 'camera'], // 可以指定来源是相册还是相机，默认二者都有
      success: function (res) {
        // 返回选定照片的本地文件路径列表，tempFilePath可以作为img标签的src属性显示图片
        var tempFilePaths = res.tempFilePaths
        console.log(tempFilePaths)
        wx.previewImage({
          urls: tempFilePaths,
        })
      }
    })
  },
  bindGetImageInfo:function(){
    wx.chooseImage({
      success: function (res) {
        wx.getImageInfo({
          src: res.tempFilePaths[0],
          success: function (res) {
            console.log(res)
          }
        })
      }
    })
  },
  bindImageSave:function(){
    wx.chooseImage({
      success: function (res) {
        wx.saveImageToPhotosAlbum({
          filePath: res.tempFilePaths[0],
          success(res) {
            console.log(res)
          }
        })
      }
    })
   
  },
  bindBgPause:function(){
    backgroundAudioManager.pause()
  },
  bindBgPlay: function () {
    backgroundAudioManager.play()
  }, 
  bindBgStop: function () {
    backgroundAudioManager.stop()
  },
  bindBgRestart:function(){
    backgroundAudioManager.src = "http://www.dyjkglass.com/qiangu.mp3"
  },
  bindSetStorage:function(){
    //异步
    wx.setStorage({
      key: 'name1',
      data:'王昭君',
      success: function (res) {
        console.log(res)
      }
    })
    //同步
    wx.setStorageSync('name2', '李袁')
  },
  bindGetStorage: function () {
    //异步
    wx.getStorage({
      key:'name2',
      success:function(res){
        console.log(res)
      }
    })
    //同步
    var name1 = wx.getStorageSync("name1")
    console.log(name1)
  },
  bindGetStorageList: function () {
    //异步
    wx.getStorageInfo({
      success: function(res) {
        console.log(res)
      },
    })
    //同步
    var res = wx.getStorageInfoSync()
    console.log(res)
  },
  bindRemoveStorage: function () {
    //异步
    wx.removeStorage({
      key: 'name1',
      success: function(res) {
        console.log(res)
      },
    })
    //同步
    wx.removeStorageSync("name2")
  },
  bindClearStorage: function () {
    //异步
    wx.clearStorage({
      success:function(res){
        console.log(res)
      }
    })
    //同步
    wx.clearStorageSync()
  },
  bindGetLocation:function(){
    wx.getLocation({
      type: 'gcj02', //返回可以用于wx.openLocation的经纬度
      success: function (res) {
        var latitude = res.latitude
        var longitude = res.longitude
        wx.openLocation({
          latitude: latitude,
          longitude: longitude,
          scale: 28,
          name:'新华汇',
          address:'软件大道',
          success:function(res){
            console.log(res)
          }
        })
      }
    })
  },
  bindChooseLocation:function(){
    wx.chooseLocation({
      success: function(res) {
        console.log(res)
      },
    })
  },
  bindCallPhone:function(){
    wx.makePhoneCall({
      phoneNumber: '18260631810',
      success:function(res){
        console.log(res)
      }
    })
  },
  bindScan:function(){
    wx.scanCode({
      onlyFromCamera:true,
      scanType: ['qrCode', 'barCode', 'datamatrix','pdf417'],
      success:function(res){
        console.log(res)
      }
    })    
  },
  bindAnimation:function(){
    var animation = wx.createAnimation({
      duration: 1000,
      timingFunction: 'ease',
    })

    this.animation = animation

    animation.scale(2, 2).rotate(45).step()

    this.setData({
      animationData: animation.export()
    })

    setTimeout(function () {
      animation.translate(30).step()
      this.setData({
        animationData: animation.export()
      })
    }.bind(this), 1000)
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
  
  }
})