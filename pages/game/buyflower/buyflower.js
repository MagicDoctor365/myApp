var mydata = require("../data.js");
var util =require("../util.js");
var persondata = require("../../person-info/data.js");
Page({
  data: {
    flowersInShop: mydata.flowersInShop
  },

  buy: function(event) {
    var that = this;
    var id = event.currentTarget.dataset.id;
    var flower = this.data.flowersInShop[id];

    wx.showModal({
      title: '您正在购买"'+flower.name+'"',
      content: flower.name + '的花期是' + flower.age + '天，收益率为'
      + flower.profit*100 + '%，需要消耗您'+ flower.price+'积分。',
      success: function (res) {
        if (res.confirm) {
          if (persondata.points < flower.price) {
            wx.showToast({
              title: '积分不足！',
              icon: 'none',
              duration: 2000
            });
            return;
          }
          //扣减积分
          persondata.points -= flower.price;
          mydata.flowers.push({
            id: flower.id,
            imgUrl: flower.imgUrl,
            name: flower.name,
            age: flower.age,
            profit: flower.profit,
            price: flower.price,
            aspect: flower.aspect
          });
          wx.showToast({
            title: '购买成功！',
            icon: 'success',
            duration: 2000
          });
        } else if (res.cancel) {
          wx.showToast({
            title: '取消购买！',
            icon: 'success',
            duration: 2000
          })
        }
      }
    })
  },

  onLoad: function (options) {
    
  },

  onReady: function () {
  
  },

  onShow: function () {
  
  },

  onHide: function () {
  
  },

  onUnload: function () {
  
  },

  onPullDownRefresh: function () {
  
  },

  onReachBottom: function () {
  
  },

  onShareAppMessage: function () {
  
  }
})