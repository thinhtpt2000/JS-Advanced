// Arrow function
// Fat arrow

/*
* function sum(a, b) {
*	return a + b;
* }
* sum(1, 2);
*
* var sum2 = function(a, b) {
*	return a + b;
* }
* sum2(3, 2);
*/

var sum = (a, b) => {
	return a + b;
}
sum(5, 3);


var sum2 = (a, b) => a + b;
sum(9, 4);

var square = (x) => x * x;
square(5);


var doSomething = () => Date.now();
doSomething();

var arr = [1, 2, 3];
arr.map((x) => x*x);