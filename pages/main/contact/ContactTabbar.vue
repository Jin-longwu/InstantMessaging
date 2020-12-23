<template>
	
	<view>
		<uni-list>
			<uni-list-item thumb="/static/contact_add_friend.png"  title="新的朋友"  @click="jumpToConfirmList()"/>
		</uni-list>
	
		<view class="uni-form-item uni-column">
			<view class="title">朋友</view>
		</view>
		<uni-list>

			<uni-list-item 
				v-for="(value, key) in contactDataList" :key="key"
				:show-extra-icon="true" 
				:showArrow="false" 
				thumb="/static/pg_def_avatar.png"
				:title="value.title" 
				@click="jumpToUserBasicInfo(value)"/>
		</uni-list>
		
		
	</view>
</template>
<script>
	import uniLoadMore from '@/components/uni-load-more/uni-load-more.vue';
	
	import uniList from '@/components/uni-list/uni-list.vue'
	import uniListItem from '@/components/uni-list-item/uni-list-item.vue'
	
	
	export default {
		components: {
			uniLoadMore,
			uniList,
			uniListItem
		},
		data() {
			return {
				contactDataList : [],
			}
		},
		onLoad() {
			this.contactDataList = [
				{title:"张三"},
				{title:"李四"},
				{title:"王五"},
				{title:"李奎"},
				{title:"test01"},
			]
		},
		methods: {
			handleFriendTitle(value) 
			{
				let title = value.username;
				let friendInfo = FriendInfoManager.getFriendInfo(value.username);
				if(!StringUtils.isEmpty(friendInfo.alias))
				{
					title = friendInfo.alias;
				}
				else if(!StringUtils.isEmpty(friendInfo.nickname))
				{
					title = friendInfo.nickname;
				}
				return title;
			},
			jumpToConfirmList()
			{
				uni.navigateTo({
					url:"../../chat/view/pangugle-chat"
				})
			},
			
			jumpToUserBasicInfo(value)
			{
				uni.navigateTo({
					url:"../../chat/view/pangugle-chat"
				})
			},
			
		
		}
	}
</script>

<style>

</style>
