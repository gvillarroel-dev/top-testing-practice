import { caesarCipher } from "./caesarCipher";

describe("caesarCipher shifts each letter by a given number of positions", () => {
	test("Normal case: a common string with offset", () => {
		expect(caesarCipher("abc", 3)).toBe("def");
	});
	test("Letter wrapping", () => {
		expect(caesarCipher("xyz", 3)).toBe("abc");
	});
	test("Preservation of capital letters", () => {
		expect(caesarCipher("HeL8Lo", 5)).toBe("MjQ8Qt");
	});
	test("Punctuation and spacing unchanged", () => {
		expect(caesarCipher("Hello, World!", 3)).toBe("Khoor, Zruog!");
	});
});
