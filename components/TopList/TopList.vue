<template>
	<view class="top-list">
		<view class="top-list-item" v-for="(item, index) in topList" :key="index">
			<view class="top-list-img">
				<image :src="item.coverImgUrl" mode="widthFix"></image>
				<text>{{item.updateFrequency}}</text>
			</view>
			<view class="top-list-text">
				<view class="" v-for="(item, index) in item.tracks" :key="index">{{index + 1}}.{{item.first}} - {{item.second}}</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		name:"TopList",
		data() {
			return {
				
			};
		},
		props: {
			topList: {
				type: Array,
				default() {
					return []
				}
			}
		}
	}
</script>

<style scoped>
.top-list {
	margin: 0 30rpx;
}
.top-list-item {
	display: flex;
	margin-bottom: 34rpx;
}
.top-list-img {
	width: 212rpx;
	height: 212rpx;
	position: relative;
	margin-right: 22rpx;
	overflow: hidden;
}
.top-list-img image {
	width: 100%;
	height: 100%;
	background-color: red;
	border-radius: 15rpx;
}
.top-list-img text {
	position: absolute;
	left: 12rpx;
	bottom: 6rpx;
	font-size: 20rpx;
	color: #fff;
}
.top-list-text {
	font-size: 24rpx;
	line-height: 70rpx;
	flex: 1;
	text-overflow: ellipsis;
	overflow: hidden;
	white-space: nowrap;
}

</style>
