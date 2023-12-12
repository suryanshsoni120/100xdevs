// JS by default is a synchronous, single threaded language.
// This means it executes code one after the other in a sequential order.
// The execution of a code must complete before moving on to the next one, and the program waits for each operation to finish before moving on to the next.
// This is an inefficient process as it will take a very long time for execution of complete code.
// If the application requires to do file system operations or make requests to server, it will take a very long time.

// Example: Calculate sum of the first n natural numbers.

// Synchronous code - Here until the loop gets executed, the JS thread is busy computing the sum.
// It will print the sum only after complete execution of the function.
// If the value of n is very large, it would take a very long time.
function findSum(n) {
  let sum = 0;
  for (let i = 1; i <= n; i++) {
    sum += i;
  }
  return sum;
}
console.log("Without setTimeout()");
console.log(findSum(10));

// For any fullstack application, asynchronous pattern help ensure that it remains responsive and can handle multiple tasks concurrently.
// Asynchronous nature involves executing multiple tasks independently.
// The operations that might take some time to complete, such as fetching data from a server or reading from a file, do not block the execution of the entire program.
// Instead, the program continues to run other tasks while waiting for these time-consuming operations to finish.
// To achieve asynchronous nature, the browser helps us by providing Web APIs.
// Some of the popular Web APIs are setTimeout(), fetch(), fs().

// Let's understand the asynchronous nature through the setTimeout() function.
// It is used to schedule the execution of a task after a specified delay (in ms).
// It helps to delay or schedule tasks to be performed later, without blocking the main execution thread.

// Let's use the setTimeout() function in the code to see the asynchronous nature.

function findSumTill100() {
  console.log(findSum(100));
}

// Calling the findSumTill100() function with a delay of 1s using setTimeout() function.
setTimeout(findSumTill100, 1000);
console.log("With setTimeout()");

// Here, the output will be:
// With setTimeout()
// 5050

// This is because the JS thread does not wait for the findSumTill100() function to finish execution.
// The setTimeout() function sets a timer of 1s. In that 1s, the JS thread executes the next line of code and prints it.
// After the 1s is completed, the JS thread runs the callback function findSumTill100() and then it prints the output.
// Hence, "With setTimeout()" is printed first and then the sum is printed.

// Let's use the fs() function in the code to see the asynchronous nature.

// Import the NodeJS module called filesystem to handle file operations.
const fs = require("fs");

// This module has a function readFile() that take some parameters to read a file.
// The first parameter is the path of file location. If the file is in same folder, just mention the name.
// The second parameter is the encoding of file.
// The third parameter is a anonymous callback function that will be called once the file has been completely read or an error occurs.
// The callback function takes two parameters: First is an error object to handle invalid cases and second is the file content.
fs.readFile("a.txt", "utf-8", function (err, data) {
  console.log(data);
});
console.log("With fs.readFile()");

// Here, the output will be:
// With fs.readFile()
// Reading a file using asynchronous JS.

// This is because the JS thread does not wait for the fs.readFile() function to finish execution.
// The fs.readFile() function is an asynchronous function. So, it is given to a worker thread and the main JS thread executes the next line of code and prints it.
// If the JS thread has become idle and the worker thread has finished the task of reading file, the JS thread runs the callback function which prints the output (either content or error).
// If the JS thread is not idle, it will not run the callback function and will continue with its the task. After completion it will run the callback function.
// Hence, "With fs.readFile()" is printed first and then the file content is printed.

// A brief overview of complete process for any asychronous process:
// The JS thread starts executing code in a call stack in a synchronous order.
// If an asynchronous method comes, it will run by a worker thread and the JS thread will keep continuing its work in call stack.
// Once the worker thread finishes executing, it sends the callback function to a queue. The queue and call stack are different components.
// If there are multiple asynchronous functions in a program, the one which takes shorter time will be sent first to the queue.
// When the JS thread becomes idle, then the callback functions from queue are shifted to the call stack using Event loop.
// Event loop has just one job, i.e., to keep checking queue and if found something, push it to call stack and delete from the queue.

// You can analyze the asynchronous nature of JS at: http://latentflip.com/loupe
