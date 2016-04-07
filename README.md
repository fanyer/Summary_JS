#《JS高级程序设计》

##第六章读书总结

###6.1  JS里的对象

**对象的定义是无序属性的集合**，可以包括基本值、对象或函数。


> 数据属性，用obj.defineProperty();
>
	[[enummerable]]
	[[configurable]]
	[[writable]]
	[[value]]


> 访问器属性（不包含数据值）
> 
	[[enummerable]]
	[[configurable]]
	[[getter]]
	[[setter]]
	





这里主要阐述了3种创建对象的方式：
    
    1. 工厂模式
    2. 构造器模式
    3. 原型模式
    
 一、工厂模式

	每个新的对象都构造新的属性和方法

 二、构造器模式

	构造器函数也是函数，用new调用的函数
	构造函数字面量的首字母一般大写

 三、原型模式

	原型对象都有一个constructor的属性，包含对原型对象的指针



一般采用构造器模式 + 原型模式

构造器来生成属性，原型生成方法；

关于属性，有一点需要注意：delete只能删除属性，不能删除变量和参数


hasOwnProperty方法可以检测一个属性是否在实例中，还是在原型上；

例如
    
    function Person(argument) {
    	this.name = 'a';
    }
    
    Person.prototype.showName = function() {
    	alert(this.name);
    };
    
    var p1=new Person();
    alert(p1.hasOwnProperty('name')); //false
    
    var p2=new Person();
    p2.name='b';
    alert(p2.hasOwnProperty('name')); //true
    
    delete p2.name;
    alert(p2.hasOwnProperty('name')); //false
    



所有的自定义属性都是可枚举的，for in返回的都是可枚举的属性

	'name' in p1
	 p1.hasOwnProperty('name')

由此两个可以确定原型和实例上的属性


由Object.keys(p1)可以返回一个字符串，该字符串包含该对象所有可枚举的属性（如果是实例则返回实力属性，不包含原型属性）

Object.keys可以用来代替for in循环

