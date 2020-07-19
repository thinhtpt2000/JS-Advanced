// Template string

function greeting(name) {
	return 'Hi, ' + name + '!';
}
var result = greeting('Thinh');
console.log(result);

function greetingAd(name) {
	return `Hi, 

	${name}!`; // có thể viết xuống dòng, trong ${} có thể chèn biểu thức, gọi func,...
}
var resultAd = greetingAd('ThinhAD');
console.log(resultAd);