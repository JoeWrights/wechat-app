// pages/stories/index.js
const app = getApp();

Page({
    data: {
        entities:[],
        currentVid:null,
        currentVideo:null
    },
    onLoad: function (options) {
        // 生命周期函数--监听页面加载
        const entities=app.globalData.stories;
        this.setData({
            entities
        });
    },
    play(e){
        if(this.data.currentVid!=null){
            this.data.currentVideo.pause();
        }
        const currentVideo=wx.createContext(`e.currentTarget.dataset.vid`);
        currentVideo.play();
        this.setData({
            currentVid:e.currentTarget.dataset.vid,
            currentVideo
        });
    },
    showVideo(e){
        const id=e.currentTarget.dataset.vid;
        wx.navigateTo({
            url: `./show?id=${id}`
        })
    }
})