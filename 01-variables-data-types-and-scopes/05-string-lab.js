let String = "João Paulo";

function findLenghtOfString(str) {
  let stringLenght = str.length;
  return stringLenght;
}

function convertToUppercase(str) {
  let stringUppercase = str.toUpperCase();
  return stringUppercase;
}

function extractSliceOfString(str, start, end) {
  let stringSlice = str.slice(start, end);
  return stringSlice;
}


console.log(`Length of the string: ${findLenghtOfString(String)}`);
console.log(`Uppercase string: ${convertToUppercase(String)}`);
console.log(`Extracted slice: ${extractSliceOfString(String, 0, 5)}`);
console.log(`Original string: ${String}`);