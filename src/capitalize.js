export const capitalize = (input) => {
	if (input.length === 0) {
		throw new Error("Empty strings are not allowed");
	}

	let firstLetter = input[0].toUpperCase();
	return firstLetter + input.slice(1);
};
