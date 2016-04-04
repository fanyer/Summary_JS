define(function (require,exports,module) {
	
	function JS_summary() {
		
		//定时期的第三个参数
		setTimeout(function (num) {
			alert(num);// body...
		},2000,3);

		//字符串拼接
		document.body.innerHTML = 
		"<div>\
		<span>faefa</span>\
		</div>"

		//跳出所有的循环
		a:for (var i = 0; i < 5; i++) {
			
			for (var j = 0; i < i;jj++) {

				if (j==3) {
					break a;
				}

			}

		}


		//控制台中显示css和图片等

		//call,apply的参数为空时则为window

		//insertBefore在没有节点时，则其行为为appendChild

		oUl.insertBefore(oLi,aLi[0]);

		//匿名函数自执行

		(function (argument) {
			// body...
		})();

		//匿名函数自执行，可以用(),~,+之类的位运算符
		~function (argument) {
			// body...
		}();
	}

	exports.xxx = xxx;


})

