const baseURL = "https://lianghj.top:3000"
const timeout = 60000

export default function request(options) {
	return new Promise((reslove, reject) => {
		uni.request({
			url: baseURL + options.url,
			timeout: timeout,
			method: options.method || "get",
			data: options.data || {},
			success: reslove,
			fail: reject
		})
	})
}