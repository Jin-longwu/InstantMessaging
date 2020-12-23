<template>
	
	<uni-list>
		<uni-list-item thumb="/static/contact_add_friend.png" :show-badge="true" title="添加好友" @click="doAddFriend()" />
		
		<!-- #ifndef H5 -->
		<uni-list-item thumb="/static/pg_def_qrcode.png" :show-badge="true" title="扫一扫"  @click="doScanCode()"/>
		<!-- #endif -->
	</uni-list>
	
</template>

<script>
	import uniList from '@/components/uni-list/uni-list.vue'
	import uniListItem from '@/components/uni-list-item/uni-list-item.vue'
	
	export default {
		data() {
			return {
			}
		},
		components: {
			uniList,
			uniListItem,
		},
		onShow() {
		},
		methods: {
			
			doScanCode()
			{
				uni.scanCode({
					scanType: ["qrCode"],
				    success: function (res) {
				        console.log('条码类型：' + res.scanType);
				        console.log('条码内容：' + res.result);
						console.log("type = ", typeof(res.result));
				    }
				});
			},
			
			doAddFriend()
			{
				uni.navigateTo({
					url:"../../chat/view/SearchUser"
				})
			},
			
			doCreateGroup()
			{
				ChatJumpHelper.jumpToGroupCreate();
			}
			
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
