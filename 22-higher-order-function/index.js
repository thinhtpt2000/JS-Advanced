// Higher order function
function debug(name) {
	return function(str) {
		console.log(`[${name}] ${str}`);
	}
}
const log = debug('Mouse');
log('Error happen'); // [Mouse] Error happen

function waitAndRun(ms, func) {
	setTimeout(func, ms);
}
function run() {
	console.log('Run');
}
waitAndRun(2000, run);