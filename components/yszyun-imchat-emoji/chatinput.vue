<template>
	<view class="footheight">
		<view class="footer">
			<view class="footer-left">
				<view class="uni-icon uni-icon-mic" @click="startRecord()"> </view>
			</view>
			<view class="footer-center">
				<input class="input-text" confirm-type="send" type="text" confirm-hold="true" v-model="inputValue" @focus="onInputFocus" @blur="onInputBlur" :focus="isFocus" @confirm="confirm"></input>
			</view>
			<view class="footer-emotion" @tap="showEmotion">
				<i class="icon iconfont icon-face"></i>
			</view>
			<view class="footer-right" @tap="sendMessge">
				<view id='msg-type'>发送</view>
			</view>
		</view>
		<emotion @emotion="handleEmotion" :height="200" v-if="isShowEmotion"></emotion>
	</view>
</template>

<script>
	import Emotion from './Emotion/index.vue'
	
	export default {
		name: "chat-input",
		components: {
			Emotion
		},
		data() {
			return {
				inputValue: '',
				isShowEmotion: false,
				isFocus: false,
				isSendEvent: false,
				
				// 音频相关
				voiceInfo : {
					startTime : 0, // 录音开始时间
					endTime : '', // 录音结束时间
				}
			}
		},
		methods: {
			startRecord() {
				this.$emit('onStartRecord', {});
			},
			sendMessge: function() {
				this.isSendEvent = true;
				var that = this;
				if (that.inputValue.trim() == '') {
					that.inputValue = '';
				} else {

					//点击发送按钮时，通知父组件用户输入的内容
					this.$emit('onInputMessage', {
						type: 'text',
						content: that.inputValue
					});
					that.inputValue = '';
					//this.isShowEmotion = false
				}
				
			},
			confirm(event)
			{
				this.sendMessge();
			},
			// 展示表情
			showEmotion() {
				this.isInputStatus = true;
				this.isShowEmotion = !this.isShowEmotion;
				this.$emit('onShowEmotion', this.isShowEmotion)
			},
			// 输入框聚焦
			onInputFocus(e) {
				let keyboardHeight = e.detail.height;  
				this.isInputStatus = true;
				this.isShowEmotion = false
				this.$emit('onInputFocus', keyboardHeight)
			},
			// 输入框失焦
			onInputBlur(e)
			{
				if(this.isSendEvent)
				{
					this.isFocus = true;
					//this.$emit('onInputFocus')
					return;
				}
				//let rs = JSON.stringify(e);
				this.isFocus = true;
				this.isShowEmotion = false
				this.$emit('onInputBlur')
			},
			hidden(){
				this.isSendEvent = false;
				this.isShowEmotion = false;
				this.isFocus = false;
				//this.$emit('onShowEmotion', this.isShowEmotion)
			},
			emotion(res) {
				let word = res.replace(/\#|\;/gi, '')
				const list = ['微笑', '撇嘴', '色', '发呆', '得意', '流泪', '害羞', '闭嘴', '睡', '大哭', '尴尬', '发怒', '调皮', '呲牙', '惊讶', '难过', '酷',
					'冷汗', '抓狂', '吐', '偷笑', '可爱', '白眼', '傲慢', '饥饿', '困', '惊恐', '流汗', '憨笑', '大兵', '奋斗', '咒骂', '疑问', '嘘', '晕', '折磨', '衰',
					'骷髅', '敲打', '再见', '擦汗', '抠鼻', '鼓掌', '糗大了', '坏笑', '左哼哼', '右哼哼', '哈欠', '鄙视', '委屈', '快哭了', '阴险', '亲亲', '吓', '可怜',
					'菜刀', '西瓜', '啤酒', '篮球', '乒乓', '咖啡', '饭', '猪头', '玫瑰', '凋谢', '示爱', '爱心', '心碎', '蛋糕', '闪电', '炸弹', '刀', '足球', '瓢虫',
					'便便', '月亮', '太阳', '礼物', '拥抱', '强', '弱', '握手', '胜利', '抱拳', '勾引', '拳头', '差劲', '爱你', 'NO', 'OK', '爱情', '飞吻', '跳跳',
					'发抖', '怄火', '转圈', '磕头', '回头', '跳绳', '挥手', '激动', '街舞', '献吻', '左太极', '右太极'
				]
				let index = list.indexOf(word)
				return `<img src="https://res.wx.qq.com/mpres/htmledition/images/icon/emotion/${index}.gif" align="middle">`
			},
			handleEmotion(i) {
				this.inputValue += i

			},
		}
	}
</script>

<style>
	.footheight{width: 100%;}
	.footer {
		display: flex;
		flex-direction: row;
		width: 100%;
		height: 100upx;
		/* min-height: 80upx; */
		border-top: solid 1px #bbb;
		overflow: hidden;
		padding-top: 10upx;
		background-color: #fafafa;
	}

	.footer-left {

		width: 80upx;
		height: 80upx;

		display: flex;
		justify-content: center;
		align-items: center;
	}

	.footer-right {
		width: 100upx;
		height: 80upx;
		display: flex;
		justify-content: center;
		align-items: center;
		color: #1482D1;
	}

	.footer-emotion {
		width: 60upx;
		height: 80upx;
		display: flex;
		justify-content: flex-end;
		align-items: center;
		color: #1482D1;
	}

	.footer-center {
		flex: 1;
		height: 80upx;
		display: flex;
		justify-content: center;
		align-items: center;
	}

	.footer-center .input-text {
		flex: 1;
		background: #fff;
		border: solid 1upx #ddd;
		padding: 10upx !important;
		font-family: verdana !important;
		overflow: hidden;
		border-radius: 15upx;
	}

	@font-face {
		font-family: 'iconfont';
		/* project id 1134039 */
		src: url('http://at.alicdn.com/t/font_1134039_uait6xu86bf.eot');
		src: url('http://at.alicdn.com/t/font_1134039_uait6xu86bf.eot?#iefix') format('embedded-opentype'),
			url('http://at.alicdn.com/t/font_1134039_uait6xu86bf.woff2') format('woff2'),
			url('http://at.alicdn.com/t/font_1134039_uait6xu86bf.woff') format('woff'),
			url('http://at.alicdn.com/t/font_1134039_uait6xu86bf.ttf') format('truetype'),
			url('http://at.alicdn.com/t/font_1134039_uait6xu86bf.svg#iconfont') format('svg');
	}

	.iconfont {
		font-family: "iconfont" !important;
		font-size: 18px;
		font-style: normal;
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
	}

	.icon-face:before {
		content: "\e71c";
		font-size: 50upx;
	}
</style>
