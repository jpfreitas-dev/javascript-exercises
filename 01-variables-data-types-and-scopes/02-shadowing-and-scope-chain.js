let layer = "global"; // This variable is in the global scope and can be accessed anywhere in the code, including inside the function and block scopes.
console.log(layer);

function varDeclaration() {
  let layer = "function"; // This variable is in the function scope and shadows the global variable "layer". It can only be accessed within the function scope.
  console.log(layer); 

  if (true) {
  let layer = "block";  // This variable is in the block scope and shadows both the function and global variables named "layer". It can only be accessed within this block scope.
  console.log(layer);
}
}

varDeclaration();

console.log(layer); // This will log "global" because the global variable "layer" is not affected by the function or block scope variables.