import { useState, useEffect, useMemo } from "react";
import "./App.css";

// This is a counter + sum app. There is an input field expecting a number by the user.
// The app returns the sum from 1 to that number and a counter component.
// The sum is calculated dynamically based on the user's input, and the count can be incremented with the button click.

// The counter and the sum are 2 different independent components of the app.
// Calculating sum can be a heavy operation if user enters large value.
// On the other hand, counter is light operation.
// The problem is when the counter is increased on clicking button, entire app re-renders, including the sum component as well.
// Performing the heavy operation of calculating sum on each re-render is not an optimized way.

// A better approach is to wrap the sum operation in useEffect having dependency only on the input value.
// Whenever the input value changes, the useEffect hook will compute the sum and render it.
// Declare a state variable for the sum. After the useEffect will find sum, update the state variable value.

// Best approach would be if the sum value can be remembered so that re-computation isn't required during counter operation.
// In previous approach, we had to use a state variable which when updated would trigger a re-render.
// In this approach, we will use the useMemo hook. It is quite similar to the useEffect hook.
// The difference is that useMemo doesen't requires any state variable.
// It returns the calculated sum without directly updating state. So there is no re-render.
// useMemo caches the result of finding sum and only recomputes it when the input value changes.
// It does not trigger re-renders. The memoized value is only recomputed when necessary.

function App() {
  // State variable to keep track of the counter value.
  const [count, setCount] = useState(0);
  // State variable to keep track of the user input value.
  const [inputValue, setInputValue] = useState(1);
  // State variable to keep track of the final sum value.
  const [finalValue, setFinalValue] = useState(0);

  // Best approach - useMemo
  let finalSum = useMemo(() => {
    // Sum calculation from 1 to the user input value.
    let sum = 0;
    for (let i = 1; i <= inputValue; i++) {
      sum += i;
    }
    return sum;
  }, [inputValue]);

  // Better approach - useEffect
  useEffect(() => {
    // Sum calculation from 1 to the user input value.
    let sum = 0;
    for (let i = 1; i <= inputValue; i++) {
      sum += i;
    }
    setFinalValue(sum);
  }, [inputValue]);

  // Brute force approach
  // Sum calculation from 1 to the user input value.
  let sum = 0;
  for (let i = 1; i <= inputValue; i++) {
    sum += i;
  }

  return (
    <>
      <h1>Counter + Sum</h1>
      {/* Input field for entering a numeric value */}
      <input
        onChange={(e) => {
          setInputValue(e.target.value);
        }}
        type="number"
        name=""
        id=""
      />
      {/* Display the sum of numbers up to inputValue */}
      <p>
        Brute force: Sum from 1 to {inputValue} is {sum}
      </p>
      {/* Display the sum of numbers up to inputValue */}
      <p>
        useEffect: Sum from 1 to {inputValue} is {finalValue}
      </p>
      {/* Display the sum of numbers up to inputValue */}
      <p>
        useMemo: Sum from 1 to {inputValue} is {finalSum}
      </p>
      {/* Counter */}
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div>
    </>
  );
}

export default App;
