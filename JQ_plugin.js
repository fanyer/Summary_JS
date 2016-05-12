$.fn.serializeObject = function() { 
	var o = {}; 
	var a = this.serializeArray(); 

	$.each(a, function() { 
		if (o[this.name]) {  //表单中可能有多个相同标签，比如有多个label，那么你在json即o中插入第一个label后，还要继续插入，那么这时候o[label]在o中就已经存在，所以你要把o[label]做嵌套数组处理

			if (!o[this.name].push) { //如果o[label]不是嵌套在数组
				o[this.name] = [ o[this.name] ]; //将o[label]初始为嵌套数组，如o={a,[a,b,c]}
			} 

			o[this.name].push(this.value || ''); //将值插入o[label]

		} else { 
			o[this.name] = this.value || '';  //第一次在o中插入o[label]
		} 
	}); 
	
	return o; 
}
