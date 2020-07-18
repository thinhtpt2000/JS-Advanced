// hoisting
console.log(x); // undefined (declared using var)

/* 
* JS sẽ tìm tất cả khai báo với var lên trên cùng nhưng không gán giá trị
* Dòng khai báo x bên dưới sẽ được mang lên trên và có dạng var x;
* Để tránh undefined, cần phải khai báo var ở đầu chương trình
*/
var x = 5;


/*
* var x = 5;
* function run() {
	console.log(x);
	var x = 10; // gây ra undefined cho console.log bên trên vì var x; sẽ được biết trên đầu hàm
* }
* run(x); // 5 nếu trong run không có biến x; undefined nếu trong run có var x
*/