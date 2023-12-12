// Promises are a powerful feature that simplify asynchronous programming and provide a more intuitive way to handle asynchronous operations.
// Promises allow you to work with asynchronous code in a more sequential and readable manner, avoiding callback hell and improving code maintainability.
// A Promise is an object representing the eventual completion or failure of an asynchronous operation.
// Promises have three states: pending, fulfilled, or rejected.
// When a promise is pending, it means the asynchronous operation is still ongoing, and the final result is not yet available.
// When a promise is fulfilled, it means the asynchronous operation has completed successfully and has a value.
// When a promise is rejected, it means the asynchronous operation encountered an error or failure.

// Example: Reading a file.

// Method 1: Using only callbacks

// Import the NodeJS module called filesystem to handle file operations.
const fs = require("fs");

// my own asynchronous function with a callback function as a parameter.
function sonisReadFile1(cb) {
  // Performing asynchronous operation of reading a file by using a callback function.
  fs.readFile("a.txt", "utf-8", function (err, data) {
    // After the first callback funtion finishes execution, here comes the next callback function.
    cb(data);
  });
}

function onDone1(data) {
  console.log(data);
}

sonisReadFile1(onDone1);

// Method 2: Using Promises

// Previously in AsynchronousJS file, we hade used callback function to perform the asynchronous tasks.
// The representaion was a bit ugly there and also there were some issues while using callbacks.
// To avoid those, here we are using promises.

// my own asynchronous function. Here it has no parameters.
function sonisReadFile2() {
  // Return a promise with a parameter as a function. This function has a parameter of resolve which is also a function.
  // The function is performing an asynchronous operation of file reading.
  return new Promise(function (resolve) {
    fs.readFile("a.txt", "utf-8", function (err, data) {
      // If the asynchronous operation is successful, only then execute the resolve function.
      resolve(data);
    });
  });
}

// callback function to call if the promise is resolved.
function onDone2(data) {
  console.log(data);
}

// Here first we get a promise from the sonisReadFile2() function.
// If the asynchronous operation was successful, we can get the file data using .then() function.
// The .then() function requires a callback function to which we send onDone2() function as parameter.
sonisReadFile2().then(onDone2);
