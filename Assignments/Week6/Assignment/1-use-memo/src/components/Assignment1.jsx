import { useState, useMemo } from "react";

// In this assignment, your task is to create a component that performs an expensive calculation (finding the factorial) based on a user input.
// Use useMemo to ensure that the calculation is only recomputed when the input changes, not on every render.

export function Assignment1() {
  const [input, setInput] = useState();
  // Your solution starts here
  // Use the useMemo hook and inside it pass the function which calculates the factorial.
  // There won't be any state variable required as useMemo returns the new calculated value if input changes.
  // So, input value is the only dependency for the useMemo to re-compute the factorial.
  // There isn't any re-rendering as useMemo caches the result.
  const expensiveValue = useMemo(() => {
    let fact = 1;
    for (let i = 1; i <= input; i++) {
      fact *= i;
    }
    return fact;
  }, [input]);
  // Your solution ends here

  return (
    <div>
      <input
        type="number"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <p>Calculated Value: {expensiveValue}</p>
    </div>
  );
}
