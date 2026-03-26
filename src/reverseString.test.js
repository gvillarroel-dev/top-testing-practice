import { reverseString } from "./reverseString";

describe("Reverse the string", () => {
	test("Empty string returns empty", () => {
		expect(reverseString("")).toBe("");
	});
	test("Single-character string returns the character", () => {
		expect(reverseString("H")).toBe("H");
	});
	test("A string with spaces returns the entire word reversed", () => {
		expect(reverseString("hello world")).toBe("dlrow olleh");
	});
	test("A string that is a palindrome returns the same string", () => {
		expect(reverseString("racecar")).toBe("racecar");
	});
	test("Normal case: a regular string returns its reversed string", () => {
		expect(reverseString("response")).toBe("esnopser");
	});
});
