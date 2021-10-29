<template>
	<view class="list">
		<music-head :showIcon="true" title="歌单" color="white"/>
		<view class="fixbg"></view>
		<scroll-view scroll-y="true">
			<view class="list-head">
				<view class="list-head-img">
					<image src="../../static/img/1.jpg" mode="widthFix"></image>
					<text class="icon-play3">30亿</text>
				</view>
				<view class="list-head-text">
					<view class="">
						飙升榜
					</view>
					<view class="">
						<image src="../../static/img/1.jpg" mode=""></image>
						网易云音乐
					</view>
					<view class="">
						云音乐中每天热度
						<text class="icon-chevron-right"></text>
					</view>
				</view>
			</view>
			<!-- #ifdef MP-WEIXIN -->
				<button open-type="share" class="list-shar">
					<text class="icon-share2"></text>
					分享给微信好友
				</button>
			<!-- #endif -->
		</scroll-view>
	</view>
</template>

<script>
	import MusicHead from '@/components/MusicHead/MusicHead.vue'
	import { getPlayList } from '@/network/index.js'
	
	export default {
		data() {
			return {
				
			}
		},
		components: {
			MusicHead
		},
		methods: {
			
		},
		// onLoad() {
		// 	getPlayList(id).then(res => {
		// 		console.log(res);
		// 	})
		// }
	}
</script>

<style scoped>
.fixbg {
	width: 100%;
	height: 100vh;
	position: fixed;
	left: 0;
	top: 0;
	background: url(../../static/img/1.jpg) center center;
	filter: blur(10rpx);
	transform: scale(1.2);
	z-index: -1;
}
.list-head {
	display: flex;
	margin:30rpx;
}
.list-head-img {
	width: 264rpx;
	height: 264rpx;
	border-radius: 30rpx;
	overflow: hidden;
	margin-right: 42rpx;
	position: relative;
}
.list-head-img image {
	width: 100%;
	height: 100%;
}
.list-head-img text {
	position: absolute;
	right: 8rpx;
	top: 8rpx;
	color: #FFFFFF;
	font-size: 26rpx;
}
.list-head-text {
	flex: 1;
	color: #f0f2f7;
}
.list-head-text view:nth-child(1) {
	color: #fff;
	font-size: 34rpx;
}
.list-head-text view:nth-child(2) {
	display: flex;
	margin: 20rpx 0;
	font-size: 26rpx;
	align-items: center;
}
.list-head-text view:nth-child(2) image {
	display: flex;
	width: 54rpx;
	height: 54rpx;
	border-radius: 50%;
	margin-right: 14rpx;
}
.list-head-text view:nth-child(3) {
	line-height: 34rpx;
	font-size: 22rpx;
}
.list-head-text view:nth-child(3) text {
	margin: 0 16rpx;
}
.list-shar {
	width: 330rpx;
	height: 74rpx;
	border-radius: 37rpx;
	margin: 0 auto;
	background-color: rgba(100, 100, 100, .3);
	text-align: center;
	line-height: 74rpx;
	color: #fff;
	font-size: 28rpx;
}
.list-shar text {
	margin-right: 16rpx;
}
</style>
