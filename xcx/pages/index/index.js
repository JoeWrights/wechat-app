//index.js
//获取应用实例
import util from "../../utils/index";
import config from "../../utils/config";
const app = getApp()

Page({
  data: {
    hiddenLoading:false,
    hasMore:true,
    page:1,
    days:3,
    pageSize:4,
    articleList:[]
  },
  //事件处理函数
  onLoad(){    //onLoad里面不要写太多代码 封装成方法
    this.requestArticle();
  },
  requestArticle(){
    util.request({
      url:"list",
      // ?请求有可能来自远程url，mock
      mock:true,
      data:{
        tag:"微信热门",
        start:this.data.page||1,
        days:this.data.days||3,
        pageSize:this.data.pageSize,
        langs:"en"
      }
    }).then(res=>{
      console.log(res);
      this.setData({
        hiddenLoading:true,
        articleList:res.data
      });
    });
  },
  onShareAppMessage(){
    let title=config.defaultShareText || ""
    return {
      title:title,
      path:`/pages/index/index`,
      success:function(res){

      },
      fail:function(res){

      }
    }
  },
  onReachBottom(){
    if(this.data.hasMore){
      let nextPage=this.data.page+1;
      this.setData({
        page:nextPage
      });
      this.requestArticle();
    }
  },
  onPullDownRefresh(){
    this.setData({
      hiddenLoading:false
    });
    this.requestArticle();
  },
  showDetail(e){
    let dataset=e.currentTarget.dataset;
    let item=dataset&&dataset.item;
    let contentId=item.content||0;
    wx.navigateTo({
      url: `../detail/detail?contentId=${contentId}`,
      success: function(res){
        // success
      },
      fail: function() {
        // fail
      },
      complete: function() {
        // complete
      }
    })
  }
})
