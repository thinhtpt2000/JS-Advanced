// Destructuring
// Có thể áp dụng cho array, object
const arr = [10, 20, 30, 40, 50];
const [a, , ,d] = arr;
console.log(a, d) // 10 40

const [b, ...c] = arr;
console.log(b, c);

const [e, f=20] = [10];
console.log(e, f);

// Tương tự với object
const obj = {
	x: 1,
	y: 2,
	z: 3
}
const {x, y, z} = obj;
console.log(x, y, z);

const {x: m, ...t} = obj;
console.log(m, t);