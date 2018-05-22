// pages/vehicles/show.js
import testDrive from "../../modules/test-drive";
const app = getApp();
Page({

	/**
	 * 页面的初始数据
	 */
	data: {
		entity: []
	},

	/**
	 * 生命周期函数--监听页面加载
	 */
	onLoad: function (options) {
		const id = options.id;
		console.log(id);
		const entity = app.globalData.vehicles.filter(item=>{
			return item.id==id;
		});
		console.log(entity);
		this.setData({
			entity:entity[0]
		});
		wx.setNavigationBarTitle({
			title: this.data.entity.header
		})
	},
	testDrive,
	//图片预览
	preview(e){
		const index=e.currentTarget.dataset.index;	//获取swiper里的图片的下标
		const slideName=e.currentTarget.dataset.slides;
		// console.log(slideName);
		const slide=this.data.entity.meta[slideName];
		const imgList=[];
		slide.map(item=>{
			imgList.push(item.image);
		});
		wx.previewImage({
			current: imgList[index], // 当前显示图片的链接，不填则默认为 urls 的第一张
			urls: imgList
		})
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