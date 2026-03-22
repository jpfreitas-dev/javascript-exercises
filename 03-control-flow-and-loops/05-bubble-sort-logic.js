// Given an array of 10 unsorted numbers, use nested `for` loops to sort them in ascending order manually. You are NOT allowed to use `.sort()`. You must swap values using a temporary variable.

const numbers = [64, 34, 25, 12, 22, 11, 90, 88, 45, 50];

console.log(`Original array: ${numbers.join(', ')}`);

// Bubble sort implementation
for (let i = 0; i < numbers.length; i++) {
  for (let j = 0; j < numbers.length - 1 - i; j++) {
    if (numbers[j] > numbers[j + 1]) {

      let temp = numbers[j];
      numbers[j] = numbers[j + 1];
      numbers[j + 1] = temp;
    }
  }
}

console.log(`Sorted array: ${numbers.join(', ')}`);


