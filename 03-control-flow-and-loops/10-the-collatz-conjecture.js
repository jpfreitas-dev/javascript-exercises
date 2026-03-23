// Start with a number `n`. While `n > 1`: if `n` is even, divide by 2. If `n` is odd, multiply by 3 and add 1. Print the entire sequence until it hits 1. Count how many steps it took.

let n = 7;
const sequence = [];

console.log(`Starting number: ${n}`);

while (n > 1){
  if (n % 2 === 0) {
    n /= 2;
  } else {
    n = (n * 3) + 1;
  }
  console.log(`Current number: ${n}`);
  sequence.push(n);
}

console.log(`The sequence until the number hits 1 is: ${sequence}. \nNumber of steps: ${sequence.length - 1}`);
