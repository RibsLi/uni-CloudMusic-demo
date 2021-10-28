<template>
	<view class="music-head">
		<view class="music-head-icon" v-show="showIcon">
			<text class="icon-chevron-left"></text>
			<text class="line"></text>
			<text class="icon-home"></text>
		</view>
		{{title}}
	</view>
</template>

<script>
	export default {
		name:"MusicHead",
		data() {
			return {
				
			};
		},
		props: {
			title: {
				type: String,
				default: ''
			},
			showIcon: {
				type: Boolean,
				default: false
			}
		}
	}
</script>

<style scoped>
.music-head {
	position: relative;
	height: 75px;
	line-height: 80px;
	font-size: 16px;
	text-align: center;
}
.music-head-icon {
	position: absolute;
	left: 8px;
	top: 26px;
	width: 90px;
	height: 30px;
	color: #fff;
	background-color: rgba(100, 100, 100, .4);
	border-radius: 15px;
	display: flex;
	align-items: center;
	justify-content: space-evenly;
}
.line {
	display: inline-block;
	width: 1px;
	height: 14px;
	background-color: #fff;
}
</style>
