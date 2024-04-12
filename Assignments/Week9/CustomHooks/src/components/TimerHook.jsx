import React, { useEffect, useState } from "react";

// Now lets create some time based hooks.
// We will make 2 custom hooks. First hook runs a certain callback function every n seconds.
// Second hook debounces a given value.

// For first hook, we take two paramenters as input.
// First parameter is the function to be executed at the specified interval.
// Second parameter is the delay, which is the interval duration in milliseconds.
// Next, set up and clean up the interval with the help of useEffect.
// The effect runs once when the component mounts, and it also re-runs if the callback or delay changes.
// When the effect runs, it sets up the interval using setInterval, passing the callback function and the specified delay.
// Finally, clean the interval using clearInterval when the component unmounts or when the callback or delay changes.

function useInterval(callback, delay) {
  useEffect(() => {
    // Set up the interval.
    const interval = setInterval(callback, delay);
    // Clean up the interval.
    return () => clearInterval(interval);
    // Re-run effect if callback or delay changes.
  }, [callback, delay]);
}

function useDebounce(value, delay) {
  // Creating state to store the debounced value.
  const [debounceValue, setDebounceValue] = useState(value);
  // Set a timer to update the debounced value after the specified delay.
  useEffect(() => {
    const timeout = setTimeout(() => {
      setDebounceValue(value);
    }, delay);
    // Cleanup function to clear the timer when the value or delay changes.
    return () => {
      clearTimeout(timeout);
    };
    // Re-run effect if value or delay changes.
  }, [value, delay]);
  // Return the debounced value.
  return debounceValue;
}

function TimerHook() {
  // Creating state for the count.
  const [count, setCount] = useState(0);
  // Creating state for the debounce input value.
  const [inputValue, setInputValue] = useState("");
  // 500 milliseconds debounce delay.
  const debouncedValue = useDebounce(inputValue, 500);

  // Call the useInterval hook with a callback function to update the count and a delay of 1s.
  useInterval(() => {
    // Increment the count by 1 every second.
    setCount((c) => c + 1);
  }, 1000);
  return (
    <>
      <h1>Timer is at {count}</h1>
      <div>
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder="Type something..."
        />
        <p>Debounced value: {debouncedValue}</p>
      </div>
    </>
  );
}

export default TimerHook;
