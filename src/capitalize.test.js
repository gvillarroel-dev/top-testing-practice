import { capitalize } from "./capitalize";

describe("Capitalize the strings", () => {
	test("Empty string", () => {
		expect(() => capitalize("")).toThrow("Empty strings are not allowed");
	});
	test("A string that already starts with a capital letter remains the same", () => {
		expect(capitalize("Hello")).toBe("Hello");
	});
	test("A single-character string capitalizes that character", () => {
		expect(capitalize("h")).toBe("H");
	});
	test("Strings with numbers or symbols at the beginning remain the same", () => {
		expect(capitalize("123abc")).toBe("123abc");
	});
    test("Lowercase string", () => {
        expect(capitalize("hello")).toBe("Hello");
    })
});
