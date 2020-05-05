//导入请求文件
import {request} from "../../request/index.js"
//获取应用实例
const app = getApp()

Page({
  data: {
    swiperLists: [],
    catesLists:[],
    floorLists:[]
  },
  onLoad: function () {
    this.getSwiperList()
    this.getCatesList()
    this.getFloorList()
  },
  // 获取轮播图
  getSwiperList(){
    // var reqTask = wx.request({
    //   url: 'https://api-hmugo-web.itheima.net/api/public/v1/home/swiperdata',
    //   method: 'GET',
    //   success: (result)=>{
    //     console.log(result)
    //     this.setData({
    //       swiperLists: result.data.message
    //     })
    //   }
    // });
    request({url: 'https://api-hmugo-web.itheima.net/api/public/v1/home/swiperdata'})
      .then((result)=>{
        this.setData({
          swiperLists: result.data.message
        })
      }
    )
  },
  // 获取导航模块
  getCatesList(){
    request({url: 'https://api-hmugo-web.itheima.net/api/public/v1/home/catitems'})
      .then((result)=>{
        this.setData({
          catesLists: result.data.message
        })
      }
    )
  },
  // 获取楼层模块数据
  getFloorList(){
    request({url:"https://api-hmugo-web.itheima.net/api/public/v1/home/floordata"})
    .then((result)=>{
      this.setData({
        floorLists: result.data.message
      })
    })
  }
})
