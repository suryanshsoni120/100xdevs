// In JS, it's not necessary that only variables can be passed as parameters in the functions.
// We can also pass a function as a parameter in another function.
// This function passed a parameter is called as a callback function.

// Example: Calculate sum of the squares and the cubes of 2 given numbers.

// First, we have defined the functions to find square and cube of a given number.
function square(a) {
  return a * a;
}

function cube(a) {
  return a * a * a;
}

// Method 1: Without using Callback
// We define the functions by passing the numbers as parameters to find the sum of squares and cubes.
function sumOfSquares(a, b) {
  const val1 = square(a);
  const val2 = square(b);
  return val1 + val2;
}

function sumOfCubes(a, b) {
  const val1 = cube(a);
  const val2 = cube(b);
  return val1 + val2;
}

console.log(sumOfSquares(4, 4));
console.log(sumOfCubes(4, 4));

// While the above approach is correct for the given problem statement, it is not a professional manner.
// There is quite repetition in the last 2 functions, i.e, apply the operation and then calculate the sum.
// Instead, we can define a single function with some modification that would return the sum of squares or cubes.
// This is where we can use the callback function.

// Method 2: Using Callback
// We define a single function but this time, we pass an extra parameter along with the numbers.
// The third parameter will be a function which defines the operation to be applied.
// This third parameter is called the callback function.

// Here, the third parameter is a function named operation which can be either square or cube.
// To find sum of squares, pass the third parameter with value square.
// To find sum of cubes, pass the third parameter with value cube.
// The operation function is called the callback function.
// Using callback, we reduced the repetition and improved code quality.
function findSum(a, b, operation) {
  const val1 = operation(a);
  const val2 = operation(b);
  return val1 + val2;
}

console.log(findSum(4, 4, square));
console.log(findSum(4, 4, cube));

// There are 2 problems that occur when using callbacks: Callback hell and inversion of control.
// Callback hell happens when multiple nested callbacks are used in the code.
// This makes the code difficult to read, maintain, and understand.
// Inversion of control means losing the control of code.
// In asynchronous programming with callbacks, the control is often passed to the callback function, leading to a form of inversion.

// These problems are resolved using Promises and Async/Await.
