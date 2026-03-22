// Use a `while` loop to generate the first 20 numbers of the Fibonacci sequence (0, 1, 1, 2, 3, 5...). You must manage three variables to shift the values in each iteration.

let first = 0;
let second = 1;
let count = 0;
const fibSequence = [];

while (count < 20) {
  fibSequence.push(first);
  let temp = first + second;
  first = second;
  second = temp;
  count++;
}

console.log(`Fibonacci sequence (first 20 numbers): ${fibSequence.join(', ')}`);
