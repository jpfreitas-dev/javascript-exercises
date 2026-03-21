const user = {
  name: 'John',
  age: 19,
  numberOfFriends: 0
};

var numberOfFriends = user.numberOfFriends ?? 5;
console.log(numberOfFriends); // Output: 0
numberOfFriends = user.numberOfFriends || 5;
console.log(numberOfFriends); // Output: 5

// The nullish coalescing operator (??) returns the right-hand side operand when the left-hand side operand is null or undefined. In this case, since user.numberOfFriends is 0 (which is not null or undefined), it returns 0.

// The logical OR operator (||) returns the right-hand side operand when the left-hand side operand is falsy (which includes 0). Therefore, it returns 5 in this case.


