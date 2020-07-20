// Default parameters 	
function greeting(name = 'friend' , language = 'en') { // nếu không truyền tham số, mặc định sẽ là giá trị ở đây
	if (language === 'en') {
		return `Hi, ${name}`;
	}

	if (language === 'ja') {
		return `こんにちは, ${name}`;
	}

	if (language === 'vi') {
		return `Xin chào, ${name}`;	
	}
}
var result = greeting('Thinh', 'vi');
console.log(result);