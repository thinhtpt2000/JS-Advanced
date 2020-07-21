// Method overriding
class CoffeeMachine {
	makeCoffee() {
		console.log('Making coffee...');
	}
}

class SpeicalCoffeeMachine extends CoffeeMachine {
	makeCoffee(callback) {
		console.log('Making coffee and do something...');
		callback();
	}
}

const coffeeMachine = new SpeicalCoffeeMachine();
coffeeMachine.makeCoffee(function() {
	console.log('Call the boss');
});