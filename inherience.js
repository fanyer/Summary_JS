//拷贝继承

////////////////////////////////////////////////////////////////

//类式继承(用new的继承)

function Aaa() {		//父类
	this.name='小明';
}

Aaa..prototype.showName = function(first_argument) {
	alert(this.name);
};

function Bbb() {		//子类
	Aaa.call(this);		//继承父类构造函数里的属性
}

Bbb.prototype = new Aaa();	//实现继承Core

//这里继承把属性也继承了，所以这种继承只适合单例模式
//为了解决这个问题，需要一个中间项


//最终的类式继承
var f = function () {};			//方法继承
f.prototype = Aaa.prototype;

Bbb.prototype=new f();
Bbb.prototype.constructer=Bbb;	//修改this指向



///////////////////////////////////////////////////////////////////////




//原型继承(不需要用new)

var	a={name:'小明'}；

var b= clone(a);

alert(b.name);

function clone(obj) {
	var F=function () {};
	F.prototype=obj;

	return new F();
}
