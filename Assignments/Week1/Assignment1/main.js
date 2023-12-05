// Q1-  Create a counter in Javascript (counts down from 30 to 0)
for (let i = 30; i >= 0; i--) {
  console.log(i);
}

// Q2- Calculate the time it takes between a setTimeout call and the inner function actually running
// Find the start time right before calling setTimeout() using Date.now(), which returns the current timestamp in milliseconds.
// Inside the callback function passed to setTimeout(), find the end time with Date.now() again.
// Subtract the start time from the end time to get the number of milliseconds between when setTimeout() was called and when the callback actually ran.
// This measures how long the delay of setTimeout() actually was.

const start = Date.now();
setTimeout(() => {
  const end = Date.now();
  const timeTaken = end - start;
  console.log(`Time taken: ${timeTaken}ms`);
}, 1000);

// Q3- Create a terminal clock (HH:MM:SS)
// We are using setInterval() here instead of setTimeout() to repeatedly call
// the displayClock() function at an interval of 1 second, not just once after 1 second.

// Call the displayClock() function every 1 second to show live time.
const interval = setInterval(displayClock, 1000);
function displayClock() {
  // Get the current date and time using the Date() object.
  const currTime = new Date();
  // Extract the hours, minutes and seconds using the getHours(), getMinutes() and getSeconds() methods.
  const hours = currTime.getHours();
  const minutes = currTime.getMinutes();
  const seconds = currTime.getSeconds();
  // Clear the console.
  console.clear();
  // Display live clock that updates every second, showing the current hours, minutes and seconds.
  console.log(hours + ":" + minutes + ":" + seconds);
}
