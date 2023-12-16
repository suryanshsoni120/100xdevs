/* Write to a file

Using the fs library again, try to write to the contents of a file.
You can use the fs library to as a black box, the goal is to understand async tasks.
*/

// Import the NodeJS module called filesystem to handle file operations.
const fs = require("fs");

// This module has a function writeFile() that take some parameters to write to a file.
// The first parameter is the path of file location. If the file is in same folder, just mention the name.
// The second parameter is the text that needs to be written to the file.
// The third parameter is a anonymous callback function that will be called once the file has been completely read or an error occurs.
// The callback function takes two parameters: First is an error object to handle invalid cases and second is the file content.
let text = "The file was updated using fs.writeFile() function.";
fs.writeFile("a.txt", text, function (err, data) {
  console.log("File written successfully!");
  console.log(fs.readFileSync("a.txt", "utf8"));
});
console.log("With fs.writeFile()");

// The fs.writeFile() function is an asynchronous function. So, it is given to a worker thread and the main JS thread executes the next line of code and prints it.
// If the JS thread has become idle and the worker thread has finished the task of writing to file, the JS thread runs the callback function which prints the output (either content or error).
// If the JS thread is not idle, it will not run the callback function and will continue with its the task. After completion it will run the callback function.
// Hence, "With fs.writeFile()" is printed first and then the file content is printed.
