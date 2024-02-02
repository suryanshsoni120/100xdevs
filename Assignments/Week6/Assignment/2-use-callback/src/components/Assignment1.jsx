import { memo, useState, useCallback } from "react";

// Create a counter component with increment and decrement functions. Pass these functions to a child component which has buttons to perform the increment and decrement actions. Use useCallback to ensure that these functions are not recreated on every render.

export function Assignment1() {
  const [count, setCount] = useState(0);

  // Your code starts here
  // Memoize increment and decrement functions using useCallback.
  const handleIncrement = useCallback(() => {
    setCount((prevCount) => {
      return prevCount + 1;
    });
  }, []);

  const handleDecrement = useCallback(() => {
    setCount((prevCount) => {
      return prevCount - 1;
    });
  }, []);
  // Your code ends here

  return (
    <div>
      <p>Count: {count}</p>
      <CounterButtons
        onIncrement={handleIncrement}
        onDecrement={handleDecrement}
      />
    </div>
  );
}

// Wrapping with memo to optimize the rendering performance of this component.
// It will re-render only if its props (onIncrement, onDecrement) change.
const CounterButtons = memo(({ onIncrement, onDecrement }) => (
  <div>
    <button onClick={onIncrement}>Increment</button>
    <button onClick={onDecrement}>Decrement</button>
  </div>
));
