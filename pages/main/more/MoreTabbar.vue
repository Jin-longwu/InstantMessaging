<template>
	
	<view class="content">
		
		<uni-list>
			<uni-list-item title="企业版本介绍" hover-class="uni-list-cell-hover"  @click="jumpToOfficial()" />
			<uni-list-item title="企业版本开发文档" hover-class="uni-list-cell-hover"  @click="jumpToDevDocument()" />
		</uni-list>
		
	</view>
	
</template>

<script>
	import uniList from '@/components/uni-list/uni-list.vue'
	import uniListItem from '@/components/uni-list-item/uni-list-item.vue'
	
	import LinkedUtils from "@/pages/framework/utils/LinkedUtils.js"
	
	
	export default {
		data() {
			return {
				
				actionSheet : {
					show: false,
					maskClosable: true,
					tips: "退出登录会清除您的登录信息，确认退出吗？",
					itemList: [{text: "退出登录",color: "#e53a37"}],
					color: "#9a9a9a",
					size: 26,
					isCancel: true
				},
				
				userInfo : {
					username : '',
					nickname : '',
					avatar : ''
				},
				
				reload : false,
			}
		},
		components: {
			uniList,
			uniListItem,
		},
		onShow() {
			this.loadUserInfo(false);
		},
		onPullDownRefresh() {
			this.loadUserInfo(true);
		},
		methods: {
			
			loadUserInfo(reload)
			{
			},
			jumpToSetting()
			{
			},
			
			jumpToModifyPassword()
			{
				uni.navigateTo({
				    url: '/pages/user/view/ModifyPassword'
				});
			},
			
			jumpToOfficial()
			{
				LinkedUtils.openURL("https://www.pangugle.com/web/im.html", "IM介绍");
			},
			
			jumpToDevDocument()
			{
				LinkedUtils.openURL("https://www.pangugle.com/tech/article/pangugle_im/tutorial.html", "开发文档");
			},
			
			jumpToAbout()
			{
				
			},
			
			
		}
	}
</script>

<style>
	.uni-list-cell{padding-top: 32px;padding-bottom: 10px;;}
	.uni-list::after{background-color: #fff;} 
	.uni-list{margin-bottom: 10px;}
	
	.logout {
		background-color: #fff;
		text-align: center;
		font-size:16px;
		line-height: 48px;
		margin-top: 10px;
	}
</style>
