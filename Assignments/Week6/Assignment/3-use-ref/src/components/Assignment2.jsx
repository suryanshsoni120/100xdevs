import { useState, useRef } from "react";

// Create a component that tracks and displays the number of times it has been rendered. Use useRef to create a variable that persists across renders without causing additional renders when it changes.

// Basic approach - Using global variable. But it is not a recommended method.
let totalRenders = 0;
export function Assignment2() {
  // Better approach - Using State variable to keep track of the re-renders.
  // But if there are multiple state variables, it won't work as updating a state variable value itself results in a re-render.
  // So there will be miscalculations.
  const [renders, setRenders] = useState(0);

  // Best approach - Using useRef hook to create a persistent variable that does not trigger re-renders when its value changes.
  const renderCount = useRef(0);

  const handleReRender = () => {
    // Update state variable.
    setRenders(renders + 1);
  };

  // Update ref to persist the count across re-renders.
  renderCount.current += 1;

  // Increment the global variable value on each re-render.
  totalRenders += 1;

  // The global variable approach and the useRef approach will increment by 2 because of React.StrictMode

  return (
    <div>
      {/* <p>This component has rendered {totalRenders} times.</p> */}
      {/* <p>This component has rendered {renders} times.</p> */}
      <p>This component has rendered {renderCount.current} times.</p>
      <button onClick={handleReRender}>Force Re-render</button>
    </div>
  );
}
