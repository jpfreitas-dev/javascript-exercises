let a = 1, b = 2, c = 3;
console.log(a, b, c); // Output: 1 2 3

// Using the comma operator to evaluate multiple expressions
let result = (a += 1, b *= 2, c -= 1, a + b + c); 
console.log(result); // Output: 8