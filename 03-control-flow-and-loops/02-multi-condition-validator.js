// Write a script that checks a `password`. It must have at least 8 characters, at least one number, and at least one special character (check this using a loop and string comparisons). Print specific errors for each missing requirement using a `switch(true)`. Dont use regular expressions for this task.

const password = "P@ssw0rd";

function hasNumber(str) {
  for (let i = 0; i < str.length; i++) {
    if (!isNaN(str[i]) && str[i] !== " ") {
      return true;
    }  }
  return false;
}

function hasSpecialCharacter(str) {
  const specialCharacters = "!@#$%^&*()-+";
  for (let i = 0; i < str.length; i++) {
    if (specialCharacters.includes(str[i])) {
      return true;
    }
  }
  return false;
}

switch (true) {
  case password.length < 8:
    console.log("Password must be at least 8 characters long.");
    break;
  case !hasNumber(password):
    console.log("Password must contain at least one number.");
    break;
  case !hasSpecialCharacter(password):
    console.log("Password must contain at least one special character.");
    break;
  default:
    console.log("Password is valid.");
}