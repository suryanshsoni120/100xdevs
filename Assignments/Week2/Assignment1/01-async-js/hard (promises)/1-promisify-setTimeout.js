/*
    Write a function that returns a promise that resolves after n seconds have passed, where n is passed as an argument to the function.
*/

function wait(n) {
  // Creating promise using the constructor.
  return new Promise((resolve, reject) => {
    // Using setTimeout() function to create delay.
    setTimeout(() => {
      // After the delay is completed, the promise gets resolved.
      resolve();
      // Setting the timer in milliseconds.
    }, n * 1000);
  });
}

module.exports = wait;
