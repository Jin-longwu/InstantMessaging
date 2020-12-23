
const REGEX_LETTER_DIGET = /^[0-9a-zA-Z_]{1,}$/i;

const REGEX_URL = /(http|https):\/\/([\w.]+\/?)\S*/;

const RegexUtils = {
	isLetterDigit(input)
	{
		return REGEX_LETTER_DIGET.test(input);
	},
	
	/* 判断url是否为绝对路径 */
	isUrl (url) { 
	  return REGEX_URL.test(url);
	}
}

export default RegexUtils