// Generics in TypeScript provide a way to create reusable, type-safe components or functions that can work with any data type.
// Example, a function that needs to return the first element of an array. Array can be of type either string or integer.
// Method 1: Defining the type of array to be either number or string.
// type Input = string | number;
// function getFirstElement(arr: Input[]) {
//   return arr[0];
// }

// Problems in above approach:
// User can send different types of values in inputs, without any type errors.
// function getFirstElement(arr: (string | number)[]) {
//     return arr[0];
// }

// const el = getFirstElement([1, 2, '3']);

// Typescript isn’t able to infer the right type of the return type.
// function getFirstElement(arr: (string | number)[]) {
//   return arr[0];
// }

// const el = getFirstElement(["user1", "user2"]);
// console.log(el.toLowerCase()); // Shows error.

// Method 2: Using generics.
// Generics help to create components that work with any data type while still providing compile-time type safety.
// Generics are defined using angle brackets <T>, where T is a placeholder for a specific type.
function identity<T>(arg: T): T {
  return arg;
}
// Generic functions can work with any data type. When calling a generic function, specify the type explicitly or let TypeScript infer it from the provided arguments.
// Calling a generic function with explicit type.
let output1 = identity<string>("myString");
let output2 = identity<number>(100);

// Solution of the problem using generics.
function getFirstElement<T>(arr: T[]) {
  return arr[0];
}

const element1 = getFirstElement(["user1", "user2"]);
const element2 = getFirstElement([1, 2]);
const element3 = getFirstElement([true, false]);
console.log(element1.toUpperCase());
console.log(element2);
console.log(element3);
