import { useState, useCallback } from "react";
import Button from "./components/Button";
import "./App.css";

// In JS, comparison of 2 variables is done on the basis of their values.
// So we can use === or == to compare them.
// But the same is not for functions. Even if both functions are exactly same, still JS returns false.
// This is because functions are compared on the basis of their references.
// If both functions reference the same memory address, they are considered the same function.

// In this React app, we have a normal counter along with a button component.
// A function buttonClick is defined which is then passed as a prop to the button component.
// We have memoized the button component using memo. So, it will only re-render if its props change.
// Thus, when the app starts, only then the console should show 'new render' until the buttonClick function is changed.
// If the user clicks the button components, then the console should also show 'button clicked'.
// But the app doesen't shows behaves the way as expected above.

// Whenever the counter button is clicked, the app re-renders and displays 'new render' in console.
// The button component gets re-rendered and keeps showing 'new render' in console.
// This shouldn't happen as only the counter value is changing so only the counter button should get re-render.
// The buttonClick function passed as prop to the button component is static so no re-rendering should had happened.
// As a result, 'new render' should have come only once in console.

// The problem is that the buttonClick function is re-created on each render because it is defined within the functional component body.
// On each render, the buttonClick function is created at a new memory address. So, it has a new reference on each render.
// The button component, being memoized using memo, compares the new buttonClick prop reference with the previous one.
// Since buttonClick is a new reference on each render, the button component recognizes a prop change and re-renders.
// To prevent re-rendering of the button component when the app re-renders, wrap the buttonClick function inside useCallback hook to memoize.
// The dependency should be empty because the reference of the buttonClick function has to be same.

// The only difference between useMemo and useCallback is that useCallback is used to memoize functions.
// useMemo is used to memoize the result of a computation.

function App() {
  const [count, setCount] = useState(0);

  // Without useCallback hook
  function buttonClick() {
    console.log("button clicked");
  }

  // With useCallback hook
  const result = useCallback(() => {
    console.log("button clicked");
  }, []);

  return (
    <>
      <h1>Vite + React</h1>
      <Button buttonClick={buttonClick} />
      <Button buttonClick={result} />
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div>
    </>
  );
}

export default App;
