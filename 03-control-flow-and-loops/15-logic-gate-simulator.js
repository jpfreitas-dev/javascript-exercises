// Create two arrays of Booleans. Use a single loop to compare them and generate a third array representing the "XOR" logic (True only if the values are different).

const array1 = [true, false, true, false, true, false];
const array2 = [false, false, true, true, false, true];
const xorResult = [];

console.log(`Array 1: [${array1.join(', ')}]`);
console.log(`Array 2: [${array2.join(', ')}]`);

// XOR logic: true only if values are different
for (let i = 0; i < array1.length; i++) {
  const xor = array1[i] !== array2[i];
  xorResult.push(xor);
  
  console.log(`Position ${i}: ${array1[i]} XOR ${array2[i]} = ${xor}`);
}

console.log(`\nXOR Result: [${xorResult.join(', ')}]`);
