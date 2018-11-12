const input = [1, [2, 3, -1],	[ [2, 5], [	[8], 9]	], -3, 100];
var max = -Infinity;
var elementOfMax = 0;

function calc(input, level = -1) {
	if (Array.isArray(input)) {
		for (var i = 0; i < input.length; i++) {
			calc(input[i], level + 1);
		}
	} else {
		console.log(input, level);
	}
	if (input > max) {
		max = input;
		elementOfMax = level;
	}
}
calc(input);
console.log('Max element = ' + max, 'level of elemet = ' + elementOfMax);