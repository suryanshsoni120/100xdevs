// JS provides many powerful methods for doing operatons on arrays.
// One such method is the map() method.
// The map() method is used to transform each element of an array into a new array, based on a provided mapping function.
// It iterates through the original array, applies the mapping function to each element, and returns a new array with the transformed values.

// Example: Given an array, double each element of the array.
const numbers = [1, 2, 3, 4, 5];

// Method 1: Custom map() method

// Provide the transform method that you want to bring in the array elements.
function transform(number) {
  return number * 2;
}
// Custom map() function that take 2 parameters: the given array and the transform function.
function map(arr, transform) {
  // Iterate through the given array and apply transform function on every element.
  for (let i = 0; i < arr.length; i++) {
    arr[i] = transform(arr[i]);
  }
}
// After calling this method, the numbers array will get updated to [2,4,6,8,10].
map(numbers, transform);
console.log(numbers);

// Method 2: Using inbuilt map() provided by JS.

// Provide the transform method that you want to bring in the array elements.
function transform(number) {
  return number * 2;
}
// Use the map() function provided by JS and apply it on the array.
const ans2 = numbers.map(transform);
console.log(ans2);

// Either first define the function first and then pass it as argument.
// Or directly pass an anonymous function as argument.

// Using anonymous function.
const ans3 = numbers.map(function (number) {
  return number * 2;
});
console.log(ans3);
