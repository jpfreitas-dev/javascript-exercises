// Use nested loops to "multiply" two 3x3 grids (represented by logical patterns). For each coordinate `(i, j)`, print the result of `i * j` only if the sum of coordinates is even. // Tradução: 

console.log("Matrix Multiplication Simulation (3x3 grid):");

for (let i = 0; i < 3; i++) {
  for (let j = 0; j < 3; j++) {
    const sum = i + j;

    if (sum % 2 === 0) {
      const product = i * j;
      console.log(`Coordinates (i: ${i}, j: ${j}) -> Sum: ${sum} (even) -> Product: ${product}`);
    }
  }
}
