import { capitalize } from "./src/capitalize.js";
import { reverseString } from "./src/reverseString.js";
import { caesarCipher } from "./src/caesarCipher.js";
import { analyzeArray } from "./src/analyzeArray.js";
import { Calculator } from "./src/calculator.js";

console.log("============== Capitalize Function test ==============");
const resultCapitalize = capitalize("hello, world!");
console.log(`From "hello world!" to: ${resultCapitalize}`);

console.log("\n============== Reverse String Function test ==============");
const resultReverse = reverseString("hello");
console.log(`From "hello" to: ${resultReverse}`);

console.log("\n============== Caesar Cipher Function test ==============");
const resultCipher = caesarCipher("abc4.xyz1", 3);
console.log(`From "abc4.xyz1" to: ${resultCipher}`);

console.log("\n============== Analyze Array Function test ==============");
const resultAnalyze = analyzeArray([1, 2, 3, 4, 5, 6]);
console.log(`From "[1, 2, 3, 4, 5, 6]" to:`, resultAnalyze);

console.log("\n============== Calculator test ==============");
const resultAdd = Calculator.add(2, 3);
console.log(`Sum 2 + 3 = ${resultAdd}`);

const resultSub = Calculator.subtract(5, 3);
console.log(`Subtract 5 - 3 = ${resultSub}`);

const resultMultiply = Calculator.multiply(5, 5);
console.log(`Multiply 5 * 5 = ${resultMultiply}`);

const resultDivide = Calculator.divide(10, 3);
console.log(`Divide 10 / 3 = ${resultDivide}`);
