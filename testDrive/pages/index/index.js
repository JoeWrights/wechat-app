//index.js
//获取应用实例
import testDrive from "../../modules/test-drive"
console.log(testDrive);
// 在Page里得到App
const app = getApp()

Page({
	data: {
		slides:[],
		autoplay:true,
		interval:3000,
		indicator_dots:true
	},
	onLoad(){
		this.setData({
			slides:app.globalData.slides
		});
	},
	//事件处理函数
	readMove:(event)=>{
		// id在哪里？
		const id=event.currentTarget.dataset.id;
		wx.navigateTo({
			url: `/pages/vehicles/show?id=${id}`,
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
	},
	testDrive
})