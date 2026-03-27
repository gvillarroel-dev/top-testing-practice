export const analizeArray = (input) => {
	if (input.length === 0) {
		return {
			average: 0,
			min: 0,
			max: 0,
			length: 0,
		};
	}

	let average = input.reduce((sum, num) => (sum += num), 0) / input.length;
	let min = Math.min(...input);
	let max = Math.max(...input);

	return {
		average,
		min,
		max,
		length: input.length,
	};
};
