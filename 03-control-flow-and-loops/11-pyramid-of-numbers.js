// Use nested loops to print a pyramid where each row `i` contains the number `i` repeated `i` times (Row 1: "1", Row 2: "2 2", Row 3: "3 3 3").

console.log("Pyramid of Numbers:");

let amountOfRows = 7;

for (let i = 1; i <= amountOfRows; i++) {
  let row = "";
  let spaces = " ".repeat(amountOfRows - i); // The number of spaces needed to center the pyramid
  
  for (let j = 0; j < i; j++) {
    row += i;
    if (j < i - 1) {
      row += " ";
    }
  }
  
  console.log(spaces + row);
}
