/*
 * Write 3 different functions that return promises that resolve after t1, t2, and t3 seconds respectively.
 * Write a function that uses the 3 functions to wait for all 3 promises to resolve using Promise.all,
 * Return a promise.all which return the time in milliseconds it takes to complete the entire operation.
 */

// This function will return first promise.
function wait1(t) {
  // Creating promise using the constructor.
  return new Promise((resolve) => {
    // Using setTimeout() function to create delay.
    setTimeout(() => {
      // After the delay is completed, the promise gets resolved.
      resolve("First Promise resolved");
      // Setting the timer in milliseconds.
    }, t * 1000);
  });
}

// This function will return second promise.
function wait2(t) {
  // Creating promise using the constructor.
  return new Promise((resolve) => {
    // Using setTimeout() function to create delay.
    setTimeout(() => {
      // After the delay is completed, the promise gets resolved.
      resolve("Second Promise resolved");
      // Setting the timer in milliseconds.
    }, t * 1000);
  });
}

// This function will return third promise.
function wait3(t) {
  // Creating promise using the constructor.
  return new Promise((resolve) => {
    // Using setTimeout() function to create delay.
    setTimeout(() => {
      // After the delay is completed, the promise gets resolved.
      resolve("Third Promise resolved");
      // Setting the timer in milliseconds.
    }, t * 1000);
  });
}

function calculateTime(t1, t2, t3) {
  // Record the start time of the complete operation.
  const start = Date.now();
  // Calling the 3 funtions to get the promises.
  const p1 = wait1(t1);
  const p2 = wait2(t2);
  const p3 = wait3(t3);
  // Using the promise.all() api to wait for them to get resolved.
  // It takes an array of the 3 promises as parameter.
  // It returns a promise containing the results of all 3 promises in the form of an array.
  return Promise.all([p1, p2, p3]).then(() => {
    // Record the end time of the complete operation.
    const end = Date.now();
    // Find the time difference and return it.
    const difference = end - start;
    return difference;
  });
}

module.exports = calculateTime;
