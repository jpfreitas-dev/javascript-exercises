// An Armstrong number (like 153) is a number that is the sum of its own digits each raised to the power of the number of digits (1^3 + 5^3 + 3^3 = 153). Write a script to check if a 3-digit number is an Armstrong number. 

const num = 153;
let tempNum = num;
let sumOfPowers = 0;

const numDigits = [];
for (let temp = num; temp > 0; temp = Math.floor(temp / 10)) {
  numDigits.unshift(temp % 10); // Add digits to the front of the array to maintain order
}

numDigits.forEach(digit => {
  sumOfPowers += Math.pow(digit, numDigits.length); // Math.pow raises the digit to the power if the number of digits
})

console.log(`Number: ${num}`);
console.log(`Digits: ${numDigits.join(", ")}`);
console.log(`Sum of digits raised to the power of ${numDigits.length}: ${sumOfPowers}`);
