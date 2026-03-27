import { analizeArray } from "./analyzeArray";

describe("Analyze an array and display its properties", () => {
	test("An empty array returns an object with properties with a value of 0", () => {
		expect(analizeArray([])).toEqual({
			average: 0,
			min: 0,
			max: 0,
			length: 0,
		});
	});
	test("An array with a single value returns an object correctly", () => {
		expect(analizeArray([1])).toEqual({
			average: 1,
			min: 1,
			max: 1,
			length: 1,
		});
	});
	test("normal case: an array of numbers returns an object with its properties", () => {
		expect(analizeArray([1, 8, 3, 4, 2, 6])).toEqual({
			average: 4,
			min: 1,
			max: 8,
			length: 6,
		});
	});
});
