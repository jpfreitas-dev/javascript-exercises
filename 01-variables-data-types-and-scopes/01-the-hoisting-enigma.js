function hoistingEnigma() {
  console.log(hoistedVar);
  console.log(hoistedLet);
  console.log(hoistedConst);
}

hoistingEnigma(); // This will log "undefined" for hoistedVar, but will throw a ReferenceError for hoistedLet and hoistedConst because they are in the temporal dead zone until their declarations are evaluated.

var hoistedVar = "I am hoisted!"; // The variable declaration is hoisted to the top, but the assignment happens at the original line.
let hoistedLet = "I am also hoisted!"; // The variable declaration is hoisted to the top, but the assignment happens at the original line.
const hoistedConst = "I am const and hoisted!"; // The variable declaration is hoisted to the top, but the assignment happens at the original line.