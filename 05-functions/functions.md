# JavaScript Functions

## Functions Parameters
The parameter is the name given to the variable declared inside the definition of a function. There are two special kinds of syntax: default and rest parameters

- ### Default Params
  -  Default function parameters allow named parameters to be initialized with default value if no value or `undefined` is passed
  - The function`.length` data property of a `Function` instance indicates the number of parameters expected by the function
- By contrast, `arguments.length` is local to a function and provides the number of arguments actually passed to the function.


- ### Rest
  - The rest parameter syntax allows a function to accept an indefinite number of arguments as an array, provinding a way to represent variadic function in JavaScript
  - There are some additional syntax restrictions:
    - A function definition can only have one rest parameter.
    - The rest parameter must be the last parameter in the function definition.
    - Trailing commas are not allowed after the rest parameter.
    - The rest parameter cannot have a default value.

## Arrow Functions
```
(param1, paramN) => {
  statements
}
```
Arrow Function is a new way of creating functions with the '=>' operator with a shorter syntax.
- Some semantic differences and limitations:
  - Don't have their own bindings to `this`
  - Don't have arguments
  - Don't have super
  - Shoud not be used as methods
  - Cannot be used as constructors. Calling them with new throws a typeError
  - Don't have acess to `new.target`
  - Cannot use `yield`


## IIFE (Immediately Invoked Function Expression)
```
// An Async IIFE
( async() => {
    
    const x = 1;
    const y = 9;

    console.log(`Hello, The Answer is ${x+y}`);

})();
```
It is a function that is executed immediately after it is created
- It contains two major parts:
  1. A function expressioon. This usually need to be enclosed in parantheses in order to be parsed correctly
  2. Immediatly calling the function expression. Arguments may be provided, though IIFE without arguments are more common
- It used to execute arvitrarily many statements in their own scope, in a location that requires a single expression. They are similar to, but much more powerful than, the comma operator, which can only execute multiple expressions and, therefore, does not provide a way to use local variables or control flow statements
- Use cases of IIFEs include:
  - Avoiding polluting the global namespace by creating a new scope.
  - Creating a new async context to use await in a non-async context.
  - Computing values with complex logic, such as using multiple statements as a single expression.

Now, IIFEs are used less because we already have let/const and modules (import/export). However, they are still common in older code, libraries, and specific cases where code isolation is needed.

## Scope
A space or environment in which a particular variable or function can be accessed or used. Accessibility of this variable or function depends on where it is defined.
- Global scope: The default scope for all code running in script mode.
- Module scope: The scope for code running in module mode.
- Function scope: The scope created with a function.
- Block scope: The scope created with a pair of curly braces (a block).

## Built-in Functions
JavaScript offers a variety of built-in functions that simplify common tasks, available globally or within specific objects without requiring explicit definition. Functions like parseInt(), setTimeout(), and Math.random() can be used directly, while objects like Array, String, and Date include built-in methods for efficient data manipulation. Understanding these functions enhances development by leveraging JavaScript’s core features without reinventing the wheel.

## Function Stack (Call Stack)
A call stack is a mechanism for an interpreter (like the JavaScript interpreter in a web browser) to keep track of its place in a script that calls multiple functions — what function is currently being run and what functions are called from within that function, etc.

- When a script calls a function, the interpreter adds it to the call stack and then starts carrying out the function.
- Any functions that are called by that function are added to the call stack further up, and run where their calls are reached.
- When the current function is finished, the interpreter takes it off the stack and resumes execution where it left off in the last code listing.
- If the stack takes up more space than it was assigned, a "stack overflow" error is thrown.

We start with an empty Call Stack. Whenever we invoke a function, it is automatically added to the Call Stack. Once the function has executed all of its code, it is automatically removed from the Call Stack. Ultimately, the Stack is empty again.

### Recursion
It is when a function invoked itself. The underlying code of the recursice function gets executed again and again until a terminating condition, called the `base case`

- The maximal number of nested calls is called recursion depth. It is limited by the JavaScript engine. If the limit is exceeded, a `RangeError` is thrown. The exact limit varies between implementations, but is typically around 10,000.

  #### Tail Call Optimization
  Tail call optimization is a technique used by some programming languages to optimize recursive function calls. It allows a function to call itself without consuming additional stack space, which can prevent stack overflow errors in cases of deep recursion. In JavaScript, tail call optimization is not widely supported and is only available in strict mode in some engines. Therefore, it is generally recommended to avoid relying on tail call optimization in JavaScript and to use iterative approaches or other techniques for handling deep recursion when necessary.

  #### The execution context and stack
  - The execution context is an internal data structure that contains details about the execution of a function: where the control flow is now, the current variables, the value of `this`(we don't use it here) and so on.
  - One function call has exactly one execution context associated with it. When a function makes a  nested call, the following happens:
    1. The current function is paused
    2. The execution context associated with it is remembered in a special data structure called execution context stack.
    3. The nested call executes.
    4. After it ends, the old execution context is retrieved from the stack and the outer function is resumed from when it stopped.

  #### Any recursion can be rewritten as a loop. The loop variant usually can be made more effective...
  - But sometimes the rewrite is non-trivial, especially when a function uses different recursice subcalls depending on conditions and merges their results or when the branching is more intricate. 
  - Recursion can give a shorter code, easier to understand and support. Optimizations are not required in every place, mostly we need a good code, that's why it's used so widely. 
  - In some cases, recursion is the only way to solve a problem. In general, it's important to consider the specific problem you're trying to solve and choose the approach that best fits your needs.


### Lexical Scoping
Lexical scoping is a convention used with programming languages that sets the scope of a variable so that it may only be accessed within the region it is defined. In JavaScript, lexical scoping means that the accessibility of variables is determined by their physical location in the source code. This allows for the creation of closures.

### Closures
A closure is a function that has access to its own scope, the outer function's scope, and the global scope. This means that a closure can access variables and parameters of its outer function, even after the outer function has returned. Closures are often used to create private variables and functions, as well as to implement data encapsulation and maintain state in asynchronous programming. They are a powerful feature of JavaScript that allows for more flexible and modular code.

- For instance:
``` JavaScript
function createBankAccount() {
  let balance = 0;

  return {
    deposit(value) {
      if (value > 0) {
        balance += value;
      }
    },
    getBalance() {
      return balance;
    }
  };
}
```

In this example, the `createBankAccount` function creates a closure that allows the `deposit` and `getBalance` methods to access the `balance` variable, even after the `createBankAccount` function has returned. This allows us to create multiple bank accounts with their own private balances.