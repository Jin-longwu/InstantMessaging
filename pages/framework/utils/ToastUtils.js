import StringUtils from "@/pages/framework/utils/StringUtils.js"

var showLoadingIndex = 0;

var ToastUtils = {
	showLoading(title)
	{
		if(StringUtils.isEmpty(title))
		{
			title = '';
		}
		if(showLoadingIndex != 0) return;
		showLoadingIndex ++;
		uni.showLoading({
		    title: title,
			mask: true
		});
		
	},
	hideLoading()
	{
		if(showLoadingIndex == 0) return;
		uni.hideLoading();
		showLoadingIndex = 0;
	},
	showText(title, complete = null) {
		//ToastUtils.hide();
		uni.showToast({
			title: title,
			icon: 'none',
			complete: complete
		});
	},
	showSuccess(title, complete = null)
	{
		//ToastUtils.hide();
		uni.showToast({
			title: title,
			complete: complete
		});
	},
	
	showFailure(title, complete = null)
	{
		//ToastUtils.hide();
		uni.showToast({
			title: title,
			icon: 'none',
			complete: complete
		});
	},
	
	hide() {
		uni.hideToast();
	}
	
}


export default ToastUtils