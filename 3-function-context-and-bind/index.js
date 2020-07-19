/*
* Global context
* Function context
* Bind
*/


var mouse = {
	name: 'Mickey',
	sayHi: function() {
		console.log('Hi, my name is ' + this.name);
	}
}

mouse.sayHi(); // Hi, my name is Mickey

// say = function() {console.log(...)} => không có context (global context không có name)
// lúc này this là global context
var say = mouse.sayHi;
say(); // Hi, my name is undefined

var cat = {
	name: 'Tom'
}

// Muốn thay đổi context trong function thì dùng bind
// Ở trường hợp trên, ta có thể sửa lại thành
var sayBind = mouse.sayHi.bind(cat);
sayBind(); // Hi, my name is Tom