const apple = "apple";
const banana = "banana";

console.log("apple" > "banana");
console.log("apple" < "banana");

// In JavaScript, strings are compared based on their Unicode code point values. The comparison is done character by character from left to right.

// The Unicode code point for 'a' is 97, and for 'b' is 98. Since 'a' comes before 'b' in the Unicode character set, "apple" is considered less than "banana". Therefore, "apple" < "banana" evaluates to true, and "apple" > "banana" evaluates to false.

console.log(apple > banana);
console.log(apple < banana);
