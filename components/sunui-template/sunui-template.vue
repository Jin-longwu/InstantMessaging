<template>
	<view>
		<view v-if="skyContent">
			<slot />
		</view>
		<view class="sunui-template" :style="{height:skyDesc.height,width:skyDesc.width,backgroundColor:skyDesc.bgColor}"
		 v-else>
			<view>
				<view class="sunui-sky-loading">
					<view class="sunui-sky-loading-iconfont">
						<text class="sunui-iconfont" :class="[skyDesc.Desc?skyDesc.iconName:'']" :style="{color:skyDesc.iconColor,fontSize:skyDesc.fontSize}"></text>
					</view>
					<view style="text-align: center;" :style="{color:skyDesc.iconColor}">{{skyDesc.Desc}}</view>
				</view>
				<button type="button" class="sunui-sky-rest-loading" :style="{backgroundColor:skyDesc.btnColor}" hover-class="sunui-sky-btn-hover"
				 :hidden="!skyDesc.isLoad" @click.stop="resetLoading">重新加载</button>
				<button type="primary" v-if="skyDesc.isBack" style="width: 368rpx;margin-top: 100rpx;color: #fff;" hover-class="sunui-sky-btn-hover"
				 @click.stop="tapBackPage" :style="{backgroundColor:skyDesc.btnColor}">返回上个页面</button>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		props: {
			skyContent: {
				type: Boolean,
				default: true
			},
			skyDesc: {
				type: Object,
				default: function() {
					return {
						isBack: false,
						isLoad: true,
						bgColor: '#eee',
						Desc: '暂无此服务~',
						iconColor: '#ff0000',
						iconName: 'icon-shibaicopy',
						btnColor: '#ff0000',
						height: '100%',
						width: '100%',
						fontSize: '5em'
					}
				}
			}
		},
		methods: {
			resetLoading: function(e) {
				this.$emit('resetLoading', this.skyType);
			},
			tapBackPage() {
				uni.navigateBack({
					delta: 1
				});
			}
		}
	}
</script>

<style lang="scss">
	@import "iconfont.css";

	.sunui-sky-btn-hover {
		opacity: .8;
	}

	.icon-kong,
	.icon-cuowuhttp {
		color: #000;
		font-size: 3em;
	}

	.sunui-template {
		width: 100%;
		font-size: .8em;
		position: absolute;
		background-color: #eee;
		margin: auto;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		z-index: 666;

		.sunui-sky-loading-iconfont {
			width: 100%;
			text-align: center;
			margin-bottom: 10%;
		}

		.sunui-sky-rest-loading {
			color: #fff;
			font-size: .8em;
			height: 60upx;
			line-height: 60upx;
			background-color: #3C96FD;
			border-radius: 100upx;
			margin: 0;
			margin-top: 10%;
		}
	}
	view{
		font-size: 16px;
	}
</style>
