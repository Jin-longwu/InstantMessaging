<template>
	<view>
		<web-view :src="url"></web-view>
	</view>
</template>

<script>
    export default {
        data() {
            return {
                url: '',
            }
        },
        onLoad(e) {
             // 获取传递过来的链接
			var dataString = decodeURIComponent(e.data);
			var dataJson = JSON.parse(dataString);
			
            this.url = dataJson.url;
			var title = dataJson.title;
			
			if(title)
			{
				uni.setNavigationBarTitle({
				    title: title
				});
			}
			
        }
    }
</script>

<style>
</style>
