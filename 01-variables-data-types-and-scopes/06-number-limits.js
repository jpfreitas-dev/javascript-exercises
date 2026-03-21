

const maxSafeInteger = Number.MAX_SAFE_INTEGER; 

const result1 = maxSafeInteger + 1; // This will be 9007199254740992, which is still within the safe integer range.

const result2 = maxSafeInteger + 2; // This will also be 9007199254740992, which is incorrect due to precision issues.

console.log("Using Number:");
console.log("Max Safe Integer:", maxSafeInteger);
console.log("Max Safe Integer + 1:", result1);
console.log("Max Safe Integer + 2:", result2);

const maxSafeIntegerBigInt = BigInt(Number.MAX_SAFE_INTEGER); 
const result1BigInt = maxSafeIntegerBigInt + 1n; 
const result2BigInt = maxSafeIntegerBigInt + 2n; 

console.log("Using BigInt:");
console.log("Max Safe Integer:", maxSafeIntegerBigInt);
console.log("Max Safe Integer + 1:", result1BigInt);
console.log("Max Safe Integer + 2:", result2BigInt);

// explain: In JavaScript, `Number.MAX_SAFE_INTEGER` is the largest integer that can be safely represented without losing precision. When you add `1` or `2` to this value using regular numbers, it results in the same value due to precision issues. However, when using `BigInt`, which can represent arbitrarily large integers, adding `1n` or `2n` gives the correct results without any loss of precision.