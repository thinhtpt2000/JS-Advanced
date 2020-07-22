// Value types vs. reference types
let a1 = 1;
let a2 = 1;
console.log(a1 === a2); // true

let obj1 = {a: 2};
let obj2 = {a: 2};
console.log(obj1 === obj2);  // false
/*
* Do kiểu object phức tạp, nên khi tạo ra trên bộ nhớ, biến sẽ lưu giá trị tham chiếu đến giá trị thực tế của object đó
* => reference type
* Ví dụ như xây nhà, biến không thể lưu trữ đủ cái nhà, nên biến chỉ chứa địa chỉ đến cái nhà đấy
* Nên khi so sánh 2 object, là so sánh 2 địa chỉ, mà 2 địa chỉ không bao giờ giống nhau => false
* Kiểu dữ liệu như Object, Array, function
*/

let a3 = a2;
a3 = 2;
console.log(a2); // 1
/*
* Vì a2 được copy giá trị sang a3 nên giá trị thay đổi trên a3 không liên quan đến a2
*/

let obj3 = obj2;
obj3.a = 1;
console.log(obj2); // {a: 1}
/*
* Vì khi gán một biến bằng một obj, arr, ref. type... thực chất là gán địa chỉ/số nhà/tham chiếu đến obj đó
* Nên khi thay đổi giá trị là thay đổi cùng một obj
*/


let a4 = a2;
console.log(a4 === a2); // true
a4 = 2;
console.log(a4 === a2); // false

let obj4 = obj2;
console.log(obj4 === obj2); // true
obj4.a = 1;
console.log(obj4 === obj2); // true


/*
* NGUY HIỂM: Ref type sẽ bị thay đổi trong hàm
* => Tránh thay đổi giá trị trong hàm
*/
function log(x) {
	x.b = 5;
	// console.log(x);
}
log(obj1);
console.log(obj1);