<script>
	
    export default {
		data() {
			return {
				mTimeoutID : -1, //定时器返回值
			}
		},
        onLaunch() {
        },
		methods : {
		}
    }
</script>

<style>
	/* #ifndef APP-PLUS-NVUE */
	/* pg_common.css */
	@import './common/pg_common.css';

    /* uni.css - 通用组件、模板样式库，可以当作一套ui库应用 */
    @import './common/uni.css';
	
    /*每个页面公共css */
    page{
    	font-size: 12px;
    }
	view{
		-webkit-box-sizing: border-box;  /*内边边距属于宽的一部分*/
		   -moz-box-sizing: border-box;
				box-sizing: border-box;
	}
	input{
		font-size: 13px;
	}
	button{
		font-size: 16px;
	}
    
	/* #endif*/
</style>
