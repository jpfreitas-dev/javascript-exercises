const error = "Error: [Secret: 998877]";

//without using regex, extract the token from the error message and return it as a string.
function extractToken(error){
  return error.slice(error.indexOf("[Secret: ") + 9, error.indexOf("]"));
}

console.log(`Extracted token: ${extractToken(error)}`);
