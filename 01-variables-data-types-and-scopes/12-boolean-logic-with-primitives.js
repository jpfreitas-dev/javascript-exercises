var number = 10;
var string = "Hello";
var boolean = true;
var nullValue = null;
var undefinedValue;
var symbol = Symbol("unique");
var object = {};

const variables = {number,string,boolean,nullValue,undefinedValue,symbol,object}

for (const property in variables) {
  let boolean = "falsy";
  property === false ? boolean = "falsy" : boolean = "truthy";
   
  console.log(`\n The property ${property} is ${boolean}.`);
}

