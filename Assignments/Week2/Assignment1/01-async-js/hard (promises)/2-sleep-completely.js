/*
 * Write a function that halts the JS thread (make it busy wait) for a given number of milliseconds.
 * During this time the thread should not be able to do anything else.
 * the function should return a promise just like before
 */

function sleep(milliseconds) {
  // Creating promise using the constructor.
  return new Promise((resolve, reject) => {
    // Using setTimeout() function to create delay.
    setTimeout(() => {
      // After the delay is completed, the promise gets resolved.
      resolve();
      // Setting the timer in milliseconds.
    }, milliseconds);
  });
}

module.exports = sleep;
