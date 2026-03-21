const symbol1 = Symbol("id");
const symbol2 = Symbol("id");

const object = {
  [symbol1]: "This is a symbol key",
  [symbol2]: "This is another symbol key",
};

console.log("Comparing Symbols:");
console.log("Symbol 1:", symbol1);
console.log("Symbol 2:", symbol2);
console.log("Are they equal?", symbol1 === symbol2); // This will be false because each Symbol is unique.

console.log("\nAccessing Symbol Keys:");
console.log("Accessing with symbol1:", object[symbol1]);  // This will return "This is a symbol key".
console.log("Accessing with symbol2:", object[symbol2]);  // This will return "This is another symbol key".
console.log("Accessing with string 'id':", object["id"]); // This will return undefined because "id" is not a key in the object, only the Symbols are.