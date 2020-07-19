var a = {
	name: 'AAA',
	run: function () {
		var run2 = function() {
			console.log(this.name); // this mặc định là global context
		}.bind(this);
		run2(); // AAA, nếu không bind thì sẽ là undefined

		var run3 = () => {
			console.log(this.name); // this sẽ là this của hàm gần nhất (hàm nó nằm  trong) vì arrow func không có this
		}
		run3(); // AAA
	}
}
a.run();

var b = {
	foo: 'bar',
	run: function() { // khi chuyển sang arrow ở đây => undefined (this trở thành global context)
		setTimeout(() => {
			console.log(this.foo); // phải dùng arrow func, bind để không lỗi undefined
		}, 2000);
	}
}
b.run();