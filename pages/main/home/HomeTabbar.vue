<template>
	
	<view>
		
		<!-- 列表 key 在wx不行，但是这里必须唯一 -->
		<view  class="uni-list">
			<view class="uni-list-cell" hover-class="uni-list-cell-hover" 
				v-for="(item,index) in dataList" 
				@click="jumpToTargetView(item)"
				 >
				<view class="uni-media-list ">
					<view class="uni-media-list-logo">
						<image src="/static/pg_def_avatar.png"></image>
						<text class="sp">1</text>
					</view>
					<view class="uni-media-list-body ">
						<view class="uni-media-list-text-top uni-ellipsis">{{item.title}}</view>
						<view  class="uni-media-list-text-bottom uni-ellipsis">
							{{item.content}}
						</view>
					</view>
				</view>
			</view>
			
		</view>
		
	</view>
	
</template>

<script>
	
	// framework
	import StringUtils from '@/pages/framework/utils/StringUtils.js'
	
	import LinkedUtils from "@/pages/framework/utils/LinkedUtils.js"
	
	export default {
		data() {
			return {
				dataList : [],
			}
		},
		
		onLoad() {
			this.dataList = [
				{title:"基础版本", content:"为当前开源版本，只有UI"},
				{title:"企业版本", content:"如有需要访问官网, 下载APP体验!"},
				{title:"模块化开发", content:"重点是目录结构，更多请访问官网!"},
				{title:"张三", content:"在哪里啊？"},
				{title:"李四", content:"天气怎么这么热啊？"},
				{title:"王五", content:"什么情况？"},
				{title:"云推送", content:"详情请访问官网!"},
				{title:"复制粘贴", content:"详情请访问官网!"},
				{title:"地图", content:"详情请访问官网!"},
			]
		},
		methods: {
			jumpToTargetView(item)
			{
				if(item.title == '企业版本')
				{
					LinkedUtils.openURL("https://www.pangugle.com/web/im.html", "IM介绍");
					return;
				}
				if(item.title == '模块化开发')
				{
					LinkedUtils.openURL("https://www.pangugle.com/tech/article/uni_app/module.html", "模块化开发");
					return;
				}
				
				if(item.title == '云推送')
				{
					LinkedUtils.openURL("https://www.pangugle.com/tech/article/uni_app/push.html", "云推送");
					return;
				}
				
				if(item.title == '复制粘贴')
				{
					LinkedUtils.openURL("https://www.pangugle.com/tech/article/uni_app/copy.html", "复制粘贴");
					return;
				}
				
				if(item.title == '地图')
				{
					LinkedUtils.openURL("https://www.pangugle.com/tech/article/uni_app/third_map_location.html", "地图");
					return;
				}
				
				uni.navigateTo({
					url:"../../chat/view/pangugle-chat"
				})
			},
		},
		
	}
</script>

<style>
	
	.flex-item {
		width: 33.3%;
		height: 100px;
		text-align: center;
		line-height: 100px;
	}
	
	.uni-media-list-logo {height: 48px;width: 48px;position: relative;}
	
	.uni-media-list-text-top{padding-top: 5px;}
	.uni-media-list-text-bottom{padding-top: 2px;}
	
	.sp{
		position: absolute;
		right: -6px;
		background-color: #f95454;
		color: #fff;
		font-size: 12px;
		width: 19px;
		height: 19px;
		line-height: 19px;
		text-align: center;
		border-radius: 50%;
		top: -7px;
	}
</style>
