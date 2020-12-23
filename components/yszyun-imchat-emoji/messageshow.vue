<template>
	<view class="m-item" :id="'message'+cid">
		<view class="m-left">
			<image class="head_icon" src="https://img-cdn-qiniu.dcloud.net.cn/uniapp/app/homeHL.png" v-if="message.user=='home'"></image>
		</view>
		<view class="m-content">
			<view class="m-content-head" :class="{'m-content-head-right':message.user=='customer'}">
				<view :class="'m-content-head-'+message.user">
				<rich-text :nodes="message.content.replace(this.reg, emotion)"></rich-text></view>
			</view>
		</view>
		<view class="m-right">
			<image class="head_icon" src="https://img-cdn-qiniu.dcloud.net.cn/uniapp/app/customerHL.png" v-if="message.user=='customer'"></image>
		</view>
	</view>
</template>

<script>
	export default {
		props: {
			message: {
				type: Object,
				default () {
					return {};
				}
			},
			cid: {
				type: [Number, String],
				default: ''
			}
		},
		data() {
			return {
				reg: /\#[\S]{1,3}\;/gi
			}
		},
		methods: {
			emotion(res) {
				//console.log('mess', res)
				let word = res.replace(/\#|\;/gi, '')
				//console.log(word)
				const list = ['微笑', '撇嘴', '色', '发呆', '得意', '流泪', '害羞', '闭嘴', '睡', '大哭', '尴尬', '发怒', '调皮', '呲牙', '惊讶', '难过', '酷',
					'冷汗', '抓狂', '吐', '偷笑', '可爱', '白眼', '傲慢', '饥饿', '困', '惊恐', '流汗', '憨笑', '大兵', '奋斗', '咒骂', '疑问', '嘘', '晕', '折磨', '衰',
					'骷髅', '敲打', '再见', '擦汗', '抠鼻', '鼓掌', '糗大了', '坏笑', '左哼哼', '右哼哼', '哈欠', '鄙视', '委屈', '快哭了', '阴险', '亲亲', '吓', '可怜',
					'菜刀', '西瓜', '啤酒', '篮球', '乒乓', '咖啡', '饭', '猪头', '玫瑰', '凋谢', '示爱', '爱心', '心碎', '蛋糕', '闪电', '炸弹', '刀', '足球', '瓢虫',
					'便便', '月亮', '太阳', '礼物', '拥抱', '强', '弱', '握手', '胜利', '抱拳', '勾引', '拳头', '差劲', '爱你', 'NO', 'OK', '爱情', '飞吻', '跳跳',
					'发抖', '怄火', '转圈', '磕头', '回头', '跳绳', '挥手', '激动', '街舞', '献吻', '左太极', '右太极'
				]
				let index = list.indexOf(word)
				return `<img src="https://res.wx.qq.com/mpres/htmledition/images/icon/emotion/${index}.gif" align="middle">`
			}
		}
	}
</script>

<style>
	.m-item {
		display: flex;
		flex-direction: row;
		padding-top: 40upx;
	}

	.m-left {
		display: flex;
		width: 120upx;
		justify-content: center;
		align-items: flex-start;
	}

	.m-content {
		display: flex;
		flex: 1;
		flex-direction: column;
		justify-content: center;
		word-break: break-all;
	}

	.m-right {
		display: flex;
		width: 120upx;
		justify-content: center;
		align-items: flex-start;
	}

	.head_icon {
		width: 80upx;
		height: 80upx;
	}

	.m-content-head {
		position: relative;
	}

	.m-content-head-right {
		display: flex;
		justify-content: flex-end;
	}

	.m-content-head-home {
		text-align: left;
		background: #1482d1;
		border: 1px #1482d1 solid;
		border-radius: 20upx;
		padding: 20upx;
		color: white;
		display: inline-block;
	}

	.m-content-head-home:before {
		border: 15upx solid transparent;
		border-right: 15upx solid #1482d1;
		left: -26upx;
		width: 0;
		height: 0;
		position: absolute;
		content: ' '
	}

	.m-content-head-customer {
		border: 1upx white solid;
		background: white;
		border-radius: 20upx;
		padding: 20upx;
	}

	.m-content-head-customer:after {
		border: 15upx solid transparent;
		border-left: 15upx solid white;
		top: 20upx;
		right: -26upx;
		width: 0;
		height: 0;
		position: absolute;
		content: ' '
	}
</style>
