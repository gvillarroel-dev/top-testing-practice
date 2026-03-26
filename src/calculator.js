export const Calculator = {
	add(adding1, adding2) {
		return adding1 + adding2;
	},

	subtract(minuend, subtracted) {
		return minuend - subtracted;
	},

	multiply(multiplying, multiplier) {
		return multiplying * multiplier;
	},

	divide(dividend, divisor) {
		if (divisor === 0) {
			throw new Error("Division by zero error");
		}
		return dividend / divisor;
	},
};
