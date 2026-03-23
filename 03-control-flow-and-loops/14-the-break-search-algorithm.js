// In a list of 100 random numbers, find the first number that is a perfect square (like 16, 25, 36). As soon as you find it, log its square root and terminate the loop immediately.

const numbers = [];

// Generate 100 random numbers between 1 and 200
for (let i = 0; i < 100; i++) {
  numbers.push(Math.floor(Math.random() * 200) + 1);
}

console.log(`Searching for the first perfect square in 100 random numbers...\n`);

let found = false;

for (let i = 0; i < numbers.length; i++) {
  const num = numbers[i];
  const sqrt = Math.sqrt(num); // Math.sqrt returns the square root of the number
  
  // Check if the number is a perfect square
  if (sqrt === Math.floor(sqrt)) {
    console.log(`Found perfect square: ${num}`);
    console.log(`Square root: ${sqrt}`);
    found = true;
    break;
  }
}

if (!found) {
  console.log("No perfect square found in the list.");
}
