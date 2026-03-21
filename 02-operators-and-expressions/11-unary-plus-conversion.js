// Use the unary plus operator (`+`) to convert the strings `"42"`, `"3.14"`, and `"abc"` into numbers. Log the result and the new `typeof` for each.

console.log(+"42"); // 42
console.log(typeof +"42"); // "number"

console.log(+"3.14"); // 3.14
console.log(typeof +"3.14"); // "number"

console.log(+"abc"); // NaN
console.log(typeof +"abc"); // "number"

// The unary plus operator attempts to convert its operand into a number. If the operand is a string that can be successfully parsed as a number, it returns that number. If the string cannot be parsed as a valid number (like "abc"), it returns NaN (Not-a-Number). In all cases, the result of the unary plus operator is of type "number".

// The Number() function is more explicit and can be used when you want to make it clear that you are performing a type conversion. It also provides additional functionality, such as handling different types of input (e.g., boolean values, null, undefined) and allowing for more complex conversions. If you need to convert a value that may not be a simple string or if you want to handle edge cases more gracefully, using Number() might be the better option.