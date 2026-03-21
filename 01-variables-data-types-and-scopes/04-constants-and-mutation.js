const object = {
  name: 'John',
  age: 30,
};

// We can change the properties of the object, but we cannot reassign the object itself
object.name = 'Jane';
object.age = 25;

console.log(object); // Output: { name: 'Jane', age: 25 }

// This will throw an error because we cannot reassign a constant variable
object = { name: 'Jack', age: 35 }; // Uncaught TypeError: Assignment to constant variable.