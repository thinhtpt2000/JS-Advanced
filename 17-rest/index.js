// ...rest
function log(a, ...numbers) {
	console.log(a);
	console.log(numbers);
}
log(1, 2, 3, 4);

/*
* rest phải đặt ở cuối, là array, chỉ chứ các phần tử còn lại
* arguments là array-like obj, chứ tất cả các phần tử
*/

function sum(...numbers) {
	return numbers.reduce((sum, x) => sum + x);
}
let result = sum(1, 2, 3, 4, 5);
console.log(result);

function concat(separator, ...strings) {
	return strings.join(separator);
}
let str = concat('.', 'a', 'b', 'c');
console.log(str);