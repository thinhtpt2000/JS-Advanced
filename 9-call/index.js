// Call
// func.call(this, param1, param2, ...);
function greeting() {
	console.log(`Hi, ${this.name}! I am ${this.age}.`);
}
var user = {
	name: 'Thinh',
	age: 20
}
greeting.call(user);

/*
* Khác với bind một tí, bind sẽ trả về một hàm và hàm đấy phải thêm () để chạy (xem lại bài 3)
* Call thì gọi hàm đấy và trả về giá trị mà hàm trả về
*/