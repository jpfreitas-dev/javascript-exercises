// Create a variable `num` (e.g., 942). Use a `while` loop to sum its digits (9+4+2 = 15), then sum the digits of the result (1+5 = 6) until you reach a single-digit number. Log every step.

let num = 942;

console.log(`Starting number: ${num}`);

while (num >= 10) {
  let digitSum = 0;
  let tempNum = num;
  
  // Sum the digits of current number
  while (tempNum > 0) {
    digitSum += tempNum % 10; 
    tempNum = Math.floor(tempNum / 10);
  }
  
  console.log(`Sum of digits of ${num}: ${digitSum}`);
  num = digitSum;
}

console.log(`Digital root: ${num}`);
