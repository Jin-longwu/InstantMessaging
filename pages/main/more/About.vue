<template>
	<view class="about">
		<view class="con">
			1. 加作者Q: 2624342267<br/>
			2. 官网：https://www.pangugle.com/web/im.html <br/>
			3. 一次付款，永久授权;<br/>
			4. 本项目是一个支持多端(苹果,安卓,H5);
		</view>
		<view class="con2">
		</view>
	</view>
</template>

<script>
	import uLink from "@/components/uLink.vue"

	export default {
			
	}
</script>

<style>
	.con{
		padding: 20px 20px 0 40px;
		font-size: 15px;
	}
	.con2{
		padding: 20px 0 0 40px;
		/* font-weight: bold; */
		font-size: 16px;
	}
	page,
	view {
		display: flex;
	}

	page {
		min-height: 100%;
		background-color: #FFFFFF;
	}

	image {
		width: 360upx;
		height: 360upx;
	}

	.about {
		flex-direction: column;
		flex: 1;
	}

	.content {
		flex: 1;
		padding: 30upx;
		flex-direction: column;
		justify-content: center;
	}

	.qrcode {
		display: flex;
		align-items: center;
		flex-direction: column;
	}

	.qrcode .tip {
		margin-top: 20upx;
	}

	.desc {
		margin-top: 30upx;
		display: block;
	}

	.code {
		color: #e96900;
		background-color: #f8f8f8;
	}

	button {
		width: 100%;
		margin-top: 40upx;
	}

	.version {
		height: 80upx;
		line-height: 80upx;
		justify-content: center;
		color: #ccc;
	}

	.source {
		margin-top: 30upx;
		flex-direction: column;
	}

	.source-list {
		flex-direction: column;
	}

	.link {
		color: #007AFF;
	}
</style>
