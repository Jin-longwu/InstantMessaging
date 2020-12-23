<template>
	<view class="uni-common-mt">
		<view class="uni-form-item uni-column">
			<view class="search_group">
				<input class="uni-input" v-model="inputUsername" placeholder-style="color:#999" placeholder="用户名" />
				<view class="btn_search" @click="searchFriendInfo()">搜索</view>
			</view>
		</view>
		
	</view>
</template>

<script>
	
	import uniIcon from '@/components/uni-icons/uni-icons.vue'
	import RegexUtils from "@/pages/framework/utils/RegexUtils.js"
	
	// framework
	import StringUtils from '@/pages/framework/utils/StringUtils.js'
	import ToastUtils from '@/pages/framework/utils/ToastUtils.js'
	
	export default {
		data() {
			return {
				inputUsername : '',
			}
		},
		components:{
			uniIcon
		},
		
		methods:{
			searchFriendInfo()
			{
				let input = this.inputUsername;
				if(StringUtils.isEmpty(input)){
					return;
				}
				
				// verify params
				if(!RegexUtils.isLetterDigit(input))
				{
					ToastUtils.showText("只能是数字或字母!")
					return;
				}
				let len = input.length;
				if(len <= 5 || len > 20)
				{
					ToastUtils.showText("长度只能大于5且小于等于20个字符!")
					return;
				}

				// 
				uni.hideKeyboard();
			}
		}
	}
</script>
	
<style>
	
	.no_exist{height: 80px;line-height: 80px;text-align: center;color: #999;
		background-color: #fff;margin-top: 10px;
	}
	.uni-list-cell {
		justify-content: flex-start
	}
	.uni-list-cell-pd {
	    padding: 0px 15px!important;
	}
	.uni-common-mt{margin-top: 0;}
	.search_group{
		display: flex;
		flex-direction: row;
		align-items:center;
		background-color: #fff;
	}
	.uni-input{
		display: flex;
		flex: 1;
		
	}

	.btn_search{
		width: 60px;
		height: 60px;
		line-height: 60px;
		/* color:#fff; */
		/* background-color: #0e90d2; */
		text-align: center;
		font-size: 16px;
		/* line-height: 35px; */
		/* height: 35px; */
		/* margin-right: 10px; */
		
	}
</style>
