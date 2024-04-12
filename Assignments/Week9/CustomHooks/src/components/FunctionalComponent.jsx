import React, { useState, useEffect } from "react";

// This is a basic counter app created using the functional components provided by React.
// We have used the useState hook provided by React for the state management of the count value.

function FunctionalComponent() {
  // The count value won't be same everytime. So, we need to maintain the state of them and reflect them on UI too.
  // For this, we take help of useState hook provided by React. Initially, the count value is 0.
  const [count, setCount] = useState(0);

  useEffect(() => {
    // Code to run on component mount
    console.log("Component mounted");

    return () => {
      // Code to run on component unmount
      console.log("Component unmounted");
    };
  }, []); // Empty dependency array for mounting behavior

  // This function increments the count value and the component re-renders with the updated count value.
  const incrementCount = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <h1>Counter App using Functional Component</h1>
      {/* Add event listener to increase the count value. */}
      <button onClick={incrementCount}>Increment</button>
      <p>The count is: {count}</p>
    </div>
  );
}

export default FunctionalComponent;
