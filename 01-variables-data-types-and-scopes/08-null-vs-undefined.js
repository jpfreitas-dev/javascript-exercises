var undefinedVariable;
var nullVariable = null;


console.log("Comparison (undefined == null):", undefinedVariable == nullVariable); // This will be `true`.

console.log("Comparison (undefined === null):", undefinedVariable === nullVariable); // This will be `false` because they are of different types.

console.log("Type of undefinedVariable:", typeof undefinedVariable); // This will be "undefined".
console.log("Type of nullVariable:", typeof nullVariable); // This will be "object", which is a known quirk in JavaScript.




