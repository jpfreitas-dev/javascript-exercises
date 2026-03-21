console.log(!!"Hello"); // true (Truthy)
console.log(!!0); // false (Falsy)
console.log(!!undefined); // false (Falsy)
console.log(!!{}); // true (Truthy)

// `!!` is a common pattern used to convert a value to its boolean equivalent. For example, `!!"Hello"` returns `true` because non-empty strings are truthy, while `!!0` returns `false` because zero is falsy.