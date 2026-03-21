// Object.is() vs strict equality (===)

console.log(Object.is(NaN, NaN)); // true
console.log(NaN === NaN); // false
console.log(Object.is(0, -0)); // false
console.log(0 === -0); // true

// Object.is() is a method that determines whether two values are the same value. It is similar to the strict equality operator (===) but with some differences. The main differences are that Object.is() considers NaN to be equal to itself, while === does not, and that Object.is() distinguishes between +0 and -0, while === does not.

// Its happens because NaN is not equal to anything, including itself, in JacaScript. This is a special case in the Language, and it is designed this way to allow for the detection of invalid number operations. On the other hand, Object.is() is designed to provide a more accurate comparison of values, including special cases like NaN and +0/-0. For most of the time, the strict equality operator (===) is sufficient and more commonly used.

// The real situations that may involves NaN include mathematical operations that result in undefined or unrepresentable values, such as dividing zero by zero, taking the square root of a negative number, or performing certain operations on non-numeric data. In these cases, using Object.is() can help you accurately detect and handle NaN values in your code.