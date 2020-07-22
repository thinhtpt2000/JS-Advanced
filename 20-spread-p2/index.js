// Spread an array
const a = [1, 2, 3];
const b = [0, ...a, 4];
console.log(b);

// Spead an object
const obj1 = {
	a: 1,
	b: 2,
	c: 3,
	d: {e: 10}
}

let obj2 = {...obj1, z: 1000};
// for (let key in obj1) {
// 	obj2[key] = obj1[key];
// }
obj2.b = 5;
obj2.d.e = 11; // sẽ thay đổi luôn value e của obj1 nếu duyệt for
console.log(obj1)
console.log(obj2);

