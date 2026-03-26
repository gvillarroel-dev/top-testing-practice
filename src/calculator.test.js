import { Calculator } from "./calculator";

describe("Performs a mathematical operation with two numbers and returns the result", () => {
	test("Adds two numbers and returns the result", () => {
		expect(Calculator.add(2, 2)).toBe(4);
	});
	test("Subtracts two numbers and returns the result", () => {
		expect(Calculator.subtract(5, 3)).toBe(2);
	});
	test("Multiply two numbers and return the result", () => {
		expect(Calculator.multiply(2, 6)).toBe(12);
	});
	test("Divide the first number by the second and return the result", () => {
		expect(Calculator.divide(10, 5)).toBe(2);
	});
	test("Division by zero throws an error", () => {
		expect(() => Calculator.divide(2, 0)).toThrow("Division by zero error");
	});
});
