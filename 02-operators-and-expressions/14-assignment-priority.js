// - **15. Assignment Priority**: Create a complex expression like `a = b = c = 5 + 5`. Explain the order of execution (associativity) and what value each variable holds at the end.

let a, b, c;
a = b = c = 5 + 5;
console.log(a, b, c); // Output: 10 10 10

// In the expression `a = b = c = 5 + 5`, the assignment operator `=` is right-associative, meaning that the operations are evaluated from right to left.