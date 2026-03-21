const pairs = [[[], false], [[10], 10], [null, undefined], ["", 0]];

for (const pair of pairs) {
  if (pair[0] === pair[1]) {
    console.log(`${pair[0]} is strictly equal to ${pair[1]}`);
  } else if (pair[0] == pair[1]) {
    console.log(`${pair[0]} is loosely equal to ${pair[1]}`);
  } else {
    console.log(`${pair[0]} is not equal to ${pair[1]}`);
  }
}

// In JavaScript, the equality operator (==) performs type coercion, which means it converts the operands to a common type before making the comparison. This can lead to some unexpected results, such as an empty array being loosely equal to false, or null being loosely equal to undefined. On the other hand, the strict equality operator (===) does not perform type coercion and will only return true if both operands are of the same type and have the same value.

