/*
* 1. declaration (khai báo biến)
* 2. hoisting
* 3. block scope (if, for,...)
* 4. redecleartion (khai báo lại)
*/

var a = 1;
let b = 2;
var c = 3;
console.log(a, b, c);

var a = 2;
console.log(a);

/*
* REDECLARATION
* Để ngăn chặn việc cho phép khai báo lại như biến a
* Ta dùng let thay var
* var a = 3; không lỗi
* let b = 3; lỗi
* var b = 2; lỗi
* let c = 2; lỗi
*/

/*
* Tương tự, const cũng sẽ không khai báo lại được
* const khi không muốn thay đổi giá trị
* khai báo const phải kèm theo giá trị
* const d; lỗi
*/

/*
* SCOPE
* Ví dụ như function run ở bài 1, nhưng với let và const
* sẽ báo lỗi => JS không đem khai báo của let và const lên đầu
* let và const còn tuân thủ block scope
* if (true) {
	let x = 10;
	const y = 20;
	var z = 30;
* }
* Khi console.log x và y sẽ báo lỗi, còn với z thì không
* Thường được chú ý trong for (khai báo biến đếm)
*/

