// Array-like object % arguments
const names = ['Thịnh', 'Khang', 'Tiến'];

for (let i = 0; i < names.length; i++) {
	console.log(names[i]);
}

const obj = {
	0: 'Thịnh',
	1: 'Khang',
	2: 'Tiến',
	length: 3
} // là array-like object
for (let i = 0; i < names.length; i++) {
	console.log(obj[i]);
}

/*
* Arguments là một biến tồn tại trong scope của một hàm (hàm thông thường)
* Arguments là một array-like object
* Vì Arrow func không có scope nên không có arguments
*/
function sum() {
	// C1: duyệt for để tính tổng, lấy giá trị từ arguments
	/*
	let result = 0;
	for (let i = 0; i < arguments.length; i++) {
		result += arguments[i];
	}
	return result;
	*/
	// C2: chuyển arguments về array để gọi các hàm có sẵn của array
	const numbers = Array.from(arguments);
	return numbers.reduce((sum, x) => sum + x, 0);
}
let result = sum(1, 5, 9, 7, 6, 2);
console.log(result);