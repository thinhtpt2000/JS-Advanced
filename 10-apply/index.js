// Apply
// Call: func.call(this, param1, param2, ...);
// Apply: func.apply(this, [param1, param2, ...]);
function greeting() {
	console.log(`Hi, ${this.name}! I am ${this.age}.`);
}
var user = {
	name: 'Thinh',
	age: 20
}
greeting.apply(user);

/*
* Khác với call, apply nhận vào là một array hoặc array-like obj
* Cách hoạt động vẫn như nhau
* Cách sử dụng tương tự
* Trường hợp sử dụng: không biết bao nhiêu tham số đầu vào như ví dụ bên dưới => gọi hàm không biết bao nhiêu đầu vào
* Ngoài ra còn nhiều trường hợp khác
*/

function sum() {
	const numbers = Array.from(arguments);
	return numbers.reduce((sum, x) => sum + x, 0);
}
var rsOfSum = sum(1, 2, 3, 5);
console.log(rsOfSum);

function average() {
	// calculate sum
	const x = sum.apply(null, arguments);
	return x/arguments.length;
}
var rsOfAvg = average(1, 2, 3, 6);
console.log(rsOfAvg);