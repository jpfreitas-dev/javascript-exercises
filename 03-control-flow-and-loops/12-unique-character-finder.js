// Given a string `"abracadabra"`, use a loop to print only the characters that appear only once in the entire string.

const str = "abracadabra";
const uniqueChars = [];

console.log(`String: "${str}"`);

for (let i = 0; i < str.length; i++) {
  const char = str[i];
  let count = 0;
  
  // Count occurrences of current character
  for (let j = 0; j < str.length; j++) {
    if (str[j] === char) {
      count++;
    }
  }
  
  // If character appears only once and not already in uniqueChars, add it
  if (count === 1 && !uniqueChars.includes(char)) {
    uniqueChars.push(char);
  }
}

console.log(`Unique characters (appearing only once): ${uniqueChars.join(', ')}`);
