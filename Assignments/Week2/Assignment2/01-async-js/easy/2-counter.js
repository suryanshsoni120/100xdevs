/* Counter without setInterval

Without using setInterval, try to code a counter in Javascript. There is a hint at the bottom of the file if you get stuck.

(Hint: setTimeout)
*/

// Initialize the counter to start from 0.
let counter = 0;

function incrementCounter() {
  console.log("Current Value:", counter);
  counter++;

  // The counter will keep increasing to infinte. So maintain an endpoint to finish execution.
  if (counter <= 10) {
    // Use the setTimeout() function for the next second.
    setTimeout(incrementCounter, 1000);
  }
}

// Start the initial timeout.
incrementCounter();
