/* File cleaner

Read a file, remove all the extra spaces and write it back to the same file.
For example, if the file input was:
"hello     world    my    name   is       raman"

After the program runs, the output should be:
"hello world my name is raman"
*/

// Import the NodeJS module called filesystem to handle file operations.
const fs = require("fs");

// This module has a function readFile() that take some parameters to read a file.
// The first parameter is the path of file location. If the file is in same folder, just mention the name.
// The second parameter is the encoding of file.
// The third parameter is a anonymous callback function that will be called once the file has been completely read or an error occurs.
// The callback function takes two parameters: First is an error object to handle invalid cases and second is the file content.
fs.readFile("a.txt", "utf8", (err, data) => {
  console.log("Before editing the file.");
  // Remove extra spaces using regular expression
  data = data.replace(/\s+/g, " ");
  // Next, we write the updated data to the same file.
  // The fs module has a function writeFile() that take some parameters to write to a file.
  // The first parameter is the path of file location. If the file is in same folder, just mention the name.
  // The second parameter is the text that needs to be written to the file.
  // The third parameter is a anonymous callback function that will be called once the file has been completely read or an error occurs.
  // The callback function takes two parameters: First is an error object to handle invalid cases and second is the file content.
  fs.writeFile("a.txt", data, (err) => {
    console.log("After editing the file.");
    console.log(data);
  });
});
