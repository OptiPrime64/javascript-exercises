function add(num1, num2) {
	return num1 + num2;
}

function subtract(num1, num2) {
	return num1 - num2;
}

function sum(array) {
	const totalNum = array.reduce((total, num) => {
		return total + num;
	}, 0);
	return totalNum;
}

function multiply(array) {
	const totalNum = array.reduce((total, num) => {
		return total * num;
	}, 1);
	return totalNum;
}

function power(num1, num2) {
	return num1 ** num2;
}

function factorial(num) {

	if (num === 0 || num === 1) {
		return 1;
	} else {

		let total = num;
		let newNum = num;
		let i;

		for (i = 1; i < num; i++) {
			newNum -= 1;

			total *= newNum;

		}
		return total;
	};
}




module.exports = {
	add,
	subtract,
	sum,
	multiply,
	power,
	factorial
}