export const caesarCipher = (input, factor) => {
	const ALFABET = "abcdefghijklmnopqrstuvwxyz";
	let result = "";

	for (let i = 0; i < input.length; i++) {
		let nextChar = input[i];

		if (/[a-z]/i.test(nextChar)) {
			let isUpper = nextChar === nextChar.toUpperCase();
			let index = ALFABET.indexOf(nextChar.toLowerCase());

			let newIndex = (index + factor) % 26;
			if (newIndex < 0) newIndex += 26;

			let newChar = ALFABET[newIndex];
			result += isUpper ? newChar.toUpperCase() : newChar;
		} else {
			result += nextChar;
		}
	}
	return result;
};
