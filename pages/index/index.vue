<template>
	<view class="content">
		<!-- 首页头部标题 -->
		<music-head title="网易云音乐" />
		<view class="container">
			<scroll-view scroll-y="true" >
				<!-- 首页登录框 -->
				<view class="login">
					<view class="login-left">
						<text class="icon-user usericon"></text>
						<text class="login-status">未登陆</text>
					</view>
					<view class="login-right">
						<text>立即登陆</text>
					</view>
				</view>
				<!-- 首页搜索框 -->
				<view class="index-search">
					<text class="icon-search"></text>
					<input type="text" value="" placeholder="搜索音乐" />
				</view>
				<!-- 首页各类榜单 -->
				<top-list :topList="topList" />
			</scroll-view>
		</view>
	</view>
</template>

<script>
	import MusicHead from '@/components/MusicHead/MusicHead.vue'
	import TopList from '@/components/TopList/TopList.vue'
	
	import { getTopList } from '@/network/index.js'
	
	export default {
		data() {
			return {
				title: 'Hello',
				topList: []
			}
		},
		components: {
			MusicHead,
			TopList
		},
		onLoad() {
			// 请求首页各排行榜数据
			getTopList().then(res => {
				console.log(res)
				this.topList = res.data.list
				this.topList.length = 4
			})
		},
		methods: {
			
		}
	}
</script>

<style scoped>
	.login {
		display: flex;
		justify-content: space-between;
		align-items: center;
		text-align: center;
		margin: 0 30rpx;
		font-size: 24rpx;
	}
	.login-left {
		display: flex;
		align-items: center;
	}
	.login-left .usericon {
		background-color: #ccc;
		display: inline-block;
		width: 50rpx;
		height: 50rpx;
		line-height: 50rpx;
		border-radius: 50%;
		font-size: 35rpx;
		color: #eee;
		margin-right: 20rpx;
	}
	.login-left .login-status {
		color: #aaa;
	}
	.login-right {
		width: 100rpx;
		border: 2rpx solid #CCC;
		padding: 10rpx 20rpx;
		border-radius: 30rpx;
	}
.index-search {
	display: flex;
	align-items: center;
	height: 70rpx;
	margin: 70rpx 30rpx 30rpx 30rpx;
	background-color: #f7f7f7;
	border-radius: 50rpx;
}
.index-search text {
	font-size: 26rpx;
	margin: 0 26rpx;
}
.index-search input {
	font-size: 28rpx;
	flex: 1;
}
</style>
