// Static
class Foo {
	static someMethod() {
		console.log('Some method');
	}

	anotherMethod() {
		console.log('Another method');
	}
}

Foo.someMethod();

const foo = new Foo();
foo.anotherMethod();

// Function
function Foo() {

}
// Normal method
Foo.prototype.anotherMethod = function() {
	
};
// Static method
Foo.someMethod = function() {

}

/*
* Static method dùng khi không đòi hỏi tạo object mới để có thể dùng được method đấy
* Ví dụ: Array.from()
* Static còn có thể dùng để tạo ra các biến
*/