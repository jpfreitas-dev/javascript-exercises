// Create a string. Use a `for` loop to check if it is a palindrome (reads the same backward) without using `.reverse()` or `.split()`. Compare characters from both ends moving towards the center.

const str = "racecar";

console.log(`String: "${str}"`);

let isPalindrome = true;

for (let i = 0; i < Math.floor(str.length / 2); i++) {
  if (str[i] !== str[str.length - 1 - i]) {
    isPalindrome = false;
    break;
  }
}

if (isPalindrome) {
  console.log(`"${str}" is a palindrome.`);
} else {
  console.log(`"${str}" is not a palindrome.`);
}
