1、js包括的所有部分：

	1)、js的核心 ECMAScript描述了该语言的语法和基本对象

	2)、DOM描述了处理网页内容的方法和接口

	3）、BOM描述了与浏览器进行交互的方法和接口

2、js与java的区别：  

	1）、js是弱类型语言，只用var定义变量。可以用任意类型初始化 变量，并且可以随时改 变变量的类型。

	2)、语句末尾的；可有可无，不像java必须要分号分隔语句。

	3）、在使用变量之前不必声明此变量。

	4)、java中的对象都是早绑定，在定义类时就规定好了对象的属性和方法，而js是晚绑定，在运行过程中可以动态添加属性。

	5)、java中的this和js中的this指代的东西不同：java中指代的是对象本身，js中指代的是调用方法的对象。

3、栈上的变量长度都是固定的，所以字符串放在栈上且当改变字符串时，其实不是在此字 符串上改变，而是新 建了个字符串。内存地址长度不变，所以变量的地址也放在栈上。 以后当有什么数据类型长度不变 时，可放在栈上，这样查找更快。

4、变量未初始化时值为undefined，未定义的变量也是undefined，但是此时不能对变量使用 运算符。当函数无明 确返回值时，返回的也是undefined

5、Null==undefined时返回true，即这两个值相等，但是null表示的是不存在的对象，而 undefined表示的是不存 在的变量或未初始化的变量。

6、尽管所有的整数都可以表示为8进制的或16进制的，但所有数学运算返回的都是10进 制的，NaN == NaN返 回false  alert(10.0.toString())输出'10';parseInt('1234blue')返回1234   parseInt('10.5')返回10 因为.被解释 成无效数字 所以.以后的字符都不转化

7、Number.toFixed(n)方法是保留小数点几位的方法 Number.toExponential(n)方法是用科学 计数法表示数字。

8、Js的基本类型：number、boolean、string、null、undefined

9、Js的数组对象有pop、push方法使数组具有栈的特性，有shift和unshift(在第一个位置 插入数据，其余数据后移 一位)方法使数组有队列的特性。

10、Js中没有私有作用域，所有变量和方法都是公用的，但大多在方法或变量名前加_表明 这是私有属性。

11、Js中创建对象的方法：对象的所有非函数属性都在构造函数中定义，这样可以通过构造 函数的参数定义不 同对象的相同属性。对象的所有函数属性都放到对象的prototype里 面，这样所有的函数属性都只定义一 次。即所有对象共享这些函数，而每个对象的自己 的属性在构造函数参数中定义。在构造函数里定义 的非函数属性是每个对象独有的，而 prototype里的函数属性是各个对象公用的。

12、Js执行引擎并非一行一行分析和执行程序，是一段一段分析和执行的，每个<script>标签为一段，是先执行函 数定义语句，然后再按顺序执行其他语句，所以如果两次定义了同一个函数，并且在第一个函数定义后 第二个函数定义前调用此函数的话，执行的是第二次函数定义的语句。但是变量的赋值不是先执行.

13、Js中创建对象的语句：var obj = new Object()<====>var obj = {};Object.call(obj);

14、Js中的闭包：就是在构造函数体内定义另外的函数作为目标对象的方法函数，而这个对象的方法函数反过来 引用外层函数体中的临时变量。这使得只要目标对象在生存期内始终能保持其方法，就能间接保持原构 造函数体当时用到的临时变量值。尽管最开始的构造函数调用已经结束，临时变量的名称也都消失了， 但在目标对象的方法内始终能引用到该变量的值，而且该值只能通过这种方法来访问。即使再次调用相 同的构造函数，但只会生成新对象和方法，新的临时变量只是对应新的值，和上次那次调用是各自独立 的。

15、call、apply方法能增加函数的复用性，也就是说此俩方法能使函数在不同的作用域中调用。

16、必须要全面理解prototype、constructor、构造函数之间的关系：

 person.prototype指向了原型对象，而person.prototype.constructor又指回了person。原型对象中除了包含constructor属性之外，还包括后来添加到prototype中的其他属性。person的每个实例：person1和person2都包含一个内部属性，该属性仅仅指向了person.prototype.换句话说他们与构造函数没有直接的关系。其中person相当于类，而person1和person2相当于对象，person的constructor是Function，person1和person2的constructor是person(),但是当显示给person的prototype赋予一个对象时：person.prototype= new animal()此时,peroson1和person2的constructor指向animal(),而person的constructor仍然指向Function();这点说明：对象中的指针指向的是原型而不是指向构造函数。如果在对象创建之后再给prototype显示赋值，那么赋值后的prototype中的属性不能出现在以前创建的对象中：eg function fxh(){};function beyond(){name:'beyond'};

f = new fxh();alert(f.name);fxh.prototype = new beyond();

17、当改变了函数的prototype后，相应的constructor也发生了变化：js高级程序设计学习笔记

注意：当subtype.prototype = new SuperType()时候，subtype的实例instance的prototype指向了subtype prototype即supertype的一个实例，所有此prototype里面的默认的_proto_指向了supertype的prototype，所以instance的constructor指向了supertype。

18、函数表达式和函数声明的区别：及var fxh = function(){}和function fxh(){}的区别，前者是代码执行到相应行的时候才会有函数定义，而后者在代码执行以前便把函数定义加载到作用域中。

19、addEventListener方法是大多数浏览器为元素绑定事件的方法，attachEvent是ie为元素绑定事件的方法。他们的区别：

> 1、后者传入的第一个参数是事件名称，但前面要加on 比如onclick 前者传入的第一个参数也是事件名称，但不加on 比如click 
> 2、前者可以通过第三个boolean型参数规定事件在冒泡阶段处理还是在捕获阶段处理，而后者只能在冒泡阶段处理。 3、前者的执行作用域是调用方法的元素的作用域，即this指向的是调用元素，而后者的执行作用域是全局，即this === window

20、屏蔽a标签的href属性并使onclick事件生效的方法：

    function hrefHidden(){
    	var fxh = document.getElementsByName('fxh')[0];

    	fxh.onclick = function(event){
		    alert('fxh')
		    window.event.returnValue = false;
   		}
    }