// Inheritance
class Animal {
	constructor(name) {
		this.name = name;
	}

	eat() {
		console.log('Eating...');
	}
}


class Bird extends Animal {
	fly() {
		console.log('Flying...');
	}
}

class Parrot extends Bird {
	speak() {
		console.log('Speaking...');
	}
}

const bird = new Parrot('Thinh');
bird.speak();


function Rectangle(width, height) {
	this.width = width;
	this.height = height;
}
Rectangle.prototype.showPermeter = function() {
	console.log(2*(this.width + this.height));
};

function Square() {
	Rectangle.apply(this, arguments);
}
Square.prototype = new Rectangle();

var square = new Square(5, 5);
square.showPermeter();