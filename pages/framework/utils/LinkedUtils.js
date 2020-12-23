
const LinkedUtils = {
	
	openURL(url, title)
	{
		var jsonMap = {
			'url' : url,
			'title' : title 
		}
		var data = encodeURIComponent(JSON.stringify(jsonMap))
		uni.navigateTo({
			url:'/pages/main/more/Webview?data=' + data
		})
	}
	
}

export default LinkedUtils