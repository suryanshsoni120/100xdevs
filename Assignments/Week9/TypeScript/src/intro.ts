// TypeScript Practice Qs

// Q1 - Write a function that greets a user given their first name.
function greet(firstName: string) {
  console.log("Hello " + firstName);
}

greet("Suri");

// Q2 - Write a function that calculates the sum of two numbers.
function sum(a: number, b: number): number {
  return a + b;
}

console.log(sum(2, 3));

// Q3 - Write a function to check if a user is 18+ or not.
function isLegal(age: number) {
  if (age > 18) {
    return true;
  } else {
    return false;
  }
}

console.log(isLegal(12));

// Q4 - Write a function that takes another function as input, and runs it after 1 second.
function delayedCall(fn: () => void) {
  setTimeout(fn, 1000);
}

delayedCall(function () {
  console.log("hi there");
});
