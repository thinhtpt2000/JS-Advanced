// ...spread
const a = [1, 2, 3];
const b = [0, ...a, 4];
console.log(a);
console.log(b);

/*
* spread là thả các phần tử của array vào (trải ra)
* khác với rest, có nghĩa là gom lại
*/

function sum(...numbers) {
	return numbers.reduce((a, b) => a + b);
}
let result = sum(...b, ...a);
console.log(result);