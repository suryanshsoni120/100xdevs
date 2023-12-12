// Async/await is a syntactic sugar built on top of promises, making asynchronous code appear more like synchronous code.
// It allows developers to avoid callback hell and write asynchronous code in a more sequential and intuitive manner, resulting in cleaner and easiy to understand code.

// Example: Using setTimeout() function in the code to see the asynchronous nature.

// Method 1: Using callbacks

// This function takes a callback function as a parameter. This is not an asynchronous function.
function sonisAsyncFunction1(callback) {
  // Using the setTimeout() function with a delay of 2s to perform asynchronous operation.
  setTimeout(() => {
    console.log("Running callback setTimeout()");
  }, 2000);
  // While setTimeout() function will do operations, the JS thread will execute the callback function.
  callback("Using callback function");
}

// This is an asynchronous method created using async keyword.
async function main1() {
  // Calling the sonisAsyncFunction1() function with an anonymous callback function as parameter and print value.
  sonisAsyncFunction1(function (value) {
    console.log(value);
  });
}

// Calling the main1() function to start the program.
main1();

// Method 2 - Using Promises

// This function takes no parameters. This is not an asynchronous function.
function sonisAsyncFunction2() {
  // Create a promise with a parameter as a function. This function has a parameter of resolve which is also a function.
  return new Promise((resolve) => {
    // Using the setTimeout() function with a delay of 2s to perform asynchronous operation.
    setTimeout(() => {
      console.log("Running promises setTimeout()");
    }, 2000);
    // If the asynchronous operation is successful, only then execute the resolve function.
    resolve("Using promises");
  });
}

// This is an asynchronous method created using async keyword.
async function main2() {
  // Calling the sonisAsyncFunction2() function which returns a promise.
  // If the promise is resolved, use .then() method with an anonymous callback function as parameter and print the value.
  sonisAsyncFunction2().then(function (value) {
    console.log(value);
  });
}

// Calling the main() function to start the program.
main2();

// Method 3 - Using asyns/await

// This function takes no parameters. This is not an asynchronous function.
function sonisAsyncFunction3() {
  // Create a promise with a parameter as a function. This function has a parameter of resolve which is also a function.
  return new Promise((resolve) => {
    // Using the setTimeout() function with a delay of 2s to perform asynchronous operation.
    setTimeout(() => {
      console.log("Running async/await setTimeout()");
    }, 2000);
    // If the asynchronous operation is successful, only then execute the resolve function.
    resolve("Using async/await");
  });
}

// This is an asynchronous method created using async keyword.
async function main3() {
  // Calling the sonisAsyncFunction3() function which returns a promise.
  // Wait till the promise gets resolved and the data is stored in the variable and then print the value.
  const value = await sonisAsyncFunction3();
  console.log(value);
}

// Calling the main() function to start the program.
main3();

// Async/await performs exactly the same operation like promise.then()/.catch() methods.
// The difference is only in syntax. Rest the backend work is same for both.
