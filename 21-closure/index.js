// Closure
// Garbage collector
function sum(a, b) {
	const c = a + b;
	return function() {
		// Có thể truy cập và thay đổi giá trị các biến bên ngoài của nó
		console.log(c);
	}
	// Những biến không dùng sẽ được xoá khỏi bộ nhớ
}
sum(1, 2)();

function debug(name) {
	return function(str) {
		console.log(`[${name}] ${str}`);
	}
}
const log = debug('Mouse');
log('Error happen'); // [Mouse] Error happen