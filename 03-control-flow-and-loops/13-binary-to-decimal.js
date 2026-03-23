// Create a string representing a binary number (e.g., `"1101"`). Use a loop and the powers of 2 to calculate its decimal value manually.

const binaryStr = "1101";
let decimalValue = 0;

console.log(`Binary number: ${binaryStr}`);

for (let i = 0; i < binaryStr.length; i++) {
  const bit = parseInt(binaryStr[i]);
  const power = binaryStr.length - 1 - i;
  const contribution = bit * Math.pow(2, power);
  
  console.log(`Bit ${bit} at position ${power}: ${bit} * 2^${power} = ${contribution}`);
  decimalValue += contribution;
}

console.log(`\nDecimal value: ${decimalValue}`);
