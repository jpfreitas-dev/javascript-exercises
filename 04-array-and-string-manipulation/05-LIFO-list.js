// LIFO (Last In, First Out) List Implementation

const items = [];

// Add an item to the top of the list
function push(item) {
  items.push(item);
}

// Remove and return the top item from the list
function pop() {
  return items.pop();
}

// Return the top item without removing it
function peek() {
  return items[items.length - 1];
}

// Check if the list is empty
function isEmpty() {
  return items.length === 0;
}

// Return the number of items in the list
function size() {
  return items.length;
}