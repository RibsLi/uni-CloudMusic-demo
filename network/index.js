	import request from '@/network/request.js'
	
	// 排行榜数据
	export function getTopList() {
		return request({
			url: "/toplist/detail"
		})
	}
	
	// 排行榜详情数据
	export function getPlayList(id){
		return request({
			url:'/playlist/detail',
			params:{
				id
			}
		})
	}