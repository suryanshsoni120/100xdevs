// Array handbook

// Array:   push(), pop(), shift(), unshift(), splice(), slice(),
// concat(), forEach(), map(), filter(), reduce(), find(), sort()

// Run each function to see the output, play and learn by doing.

// push() - Insert element at end of array.
function pushExample(arr, element) {
  console.log("Original Array:", arr);

  arr.push(element);
  console.log("After push:", arr);
}
pushExample([1, 2, 3], 4);

// pop() - Remove element at end of array.
function popExample(arr) {
  console.log("Original Array:", arr);

  arr.pop();
  console.log("After pop:", arr);
}
popExample([1, 2, 3]);

// shift() - Remove element at start of array.
function shiftExample(arr) {
  console.log("Original Array:", arr);

  arr.shift();
  console.log("After shift:", arr);
}
shiftExample([1, 2, 3]);

// unshift() - Insert element at start of array.
function unshiftExample(arr, element) {
  console.log("Original Array:", arr);

  arr.unshift(element);
  console.log("After unshift:", arr);
}
unshiftExample([1, 2, 3], 0);

// concat() - Combine multiple arrays into a single array.
function concatExample(arr1, arr2) {
  console.log("Original Arrays:", arr1, arr2);

  let arr3 = arr1.concat(arr2);
  console.log("After concat:", arr3);
}
concatExample([1, 2, 3], [4, 5, 6]);

// forEach() - Print the array numbers with the index.
function forEachExample(arr) {
  console.log("Original Array:", arr);

  arr.forEach(function (item, index) {
    console.log(item, index);
  });
}
forEachExample([1, 2, 3]);

// map() - Used to transform each element of the array.
// Return a new array with the transformed values.
function mapExample(arr) {
  console.log("Original Array:", arr);

  let newArr = arr.map(function (item) {
    return item * 2;
  });
  console.log("After map:", newArr);
}
mapExample([1, 2, 3]);

// filter() - Used to filter out elements from the array.
// Iterate through the array, apply the filtering function to each element, and return a new array.
function filterExample(arr) {
  console.log("Original Array:", arr);

  let newArr = arr.filter(function (item) {
    return item > 3;
  });
  console.log("After filter:", newArr);
}
filterExample([1, 2, 3, 4, 5]);

// find() - Return the first element in the array that satisifies the condition.
function findExample(arr) {
  console.log("Original Array:", arr);

  let found = arr.find(function (item) {
    return item > 3;
  });
  console.log("After find:", found);
}
findExample([1, 2, 3, 4, 5]);

// sort() - Sort the array in ascending order.
// The array itself is modified.
function sortExample(arr) {
  console.log("Original Array:", arr);

  arr.sort(function (a, b) {
    return a - b;
  });
  console.log("After sort:", arr);
}
sortExample([5, 2, 3, 4, 1]);
