var a = 0.1;
var b = 0.2;
var sum = a + b;
console.log(sum); // 0.30000000000000004

var c = (0.1 * 10 + 0.2 * 10) / 10;
console.log(c); // 0.3

// Binary floating-point representation means that numbers are stored in a format that can only represent certain decimal values exactly. When you try to represent 0.1 or 0.2, the binary representation is an approximation, which leads to the precision error when performing arithmetic operations.
// Note: This is a common issue in many programming languages that use binary floating-point representation, not just JavaScript.