	import request from '@/network/request.js'
	
	export function getTopList() {
		return request({
			url: "/toplist/detail"
		})
	}