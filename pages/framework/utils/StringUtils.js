const nullString = "null";

const StringUtils = {
	isEmpty(input)
	{
		if( input == null || input == '' || typeof input == "undefined" || input == nullString)
		{
			return true;
		}
		else
		{
			return false;
		}
	},
	isEqual(str1, str2)
	{
		return str1 === str2;
	},
	
	substr(input, start, length)
	{
		try{
			return input.substr(start, length);
		}catch(e){
		}
		return '';
	},
	
	substring(input, start, end)
	{
		try{
			return input.substr(start, end);
		}catch(e){
		}
		return '';
	},
	
	insertString(source, start, input)
	{
		return source.slice(0, start) + input + source.slice(start)
	},
	
	asBoolean(input)
	{
		try{
			let rs = input.toString();
			if(rs === 'true')
			{
				return true;
			}
		}catch(e){
		}
		return false;
	}
};


export default StringUtils