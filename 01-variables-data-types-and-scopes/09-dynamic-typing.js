var data;

data = 42;
console.log("Type of data (after assigning a Number):", typeof data); // "number"

data = "Hello, World!";
console.log("Type of data (after assigning a String):", typeof data); // "string"

data = true;
console.log("Type of data (after assigning a Boolean):", typeof data); // "boolean"

data = null;
console.log("Type of data (after assigning null):", typeof data); // "object"

data = undefined;
console.log("Type of data (after assigning undefined):", typeof data); // "undefined"

data = {};
console.log("Type of data (after assigning an object):", typeof data); // "object"

data = Symbol('foo');
console.log("Type of data (after assigning a symbol):", typeof data); // "symbol"

data = 123n;
console.log("Type of data (after assigning a bigint):", typeof data); // "bigint"

