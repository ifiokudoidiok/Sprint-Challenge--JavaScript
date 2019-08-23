// ==== Callbacks ====  

/* Step 1: Create a higher-order function that accepts a callback
  * Create a higher-order function named consume that can take 3 parameters.
  * The first two parameters can accept any argument
  * The last parameter accepts a callback 
  * In the body of the function return the callback with the two parameters that you created
*/
function consume (param1, param2, cb){
  return cb(param1,param2);
};

/* Step 2: Create several functions to callback with consume();
  * Create a function named add that returns the sum of two numbers
  * Create a function named multiply that returns the product of two numbers 
  * Create a function named greeting that accepts a first and last name and returns "Hello first-name last-name, nice to meet you!"
*/
function add(param1, param2){
  return param1 + param2;
};

function multiply(param1, param2){
  return param1 * param2;
};

function greeting(firstName,lastName){
  return `Hello ${firstName} ${lastName}, nice to meet you!`
};
console.log(consume(2,2,add));
console.log(consume(10,16,multiply));
console.log(consume("Mary","Poppins", greeting));
/* Step 3: Check your work by un-commenting the following calls to consume(): */
// consume(2,2,add); // 4
// consume(10,16,multiply); // 160
// consume("Mary","Poppins", greeting); // Hello Mary Poppins, nice to meet you!


// ==== Closures ==== 

// Explain in your own words why `nestedfunction()` can access the variable `internal`.

// Explanation: 
/*
Nesdtedfunction() is a child function inside of myFunction(). Now  Nestedfunction() has access to the variables inside of myFunction and also the variables outside of myFunction(). But on the other hand, myFunction() cannot access inside of nestedFunction(). The variable inside of myFunction have a global scope for nestedFunction(), and as such, internal variable is accessed by nestedFucntion(). This is possible as a result of Closures.  closure is the combination of a function bundled together (enclosed) with references to its surrounding state (the lexical environment). In other words, a closure gives you access to an outer function's scope from an inner function.
*/


const external = "I'm outside the function";

function myFunction() {
  console.log(external);
  const internal = "Hello! I'm inside myFunction!";

  function nestedFunction() {
    console.log(internal);
  };
  nestedFunction();
}
myFunction();