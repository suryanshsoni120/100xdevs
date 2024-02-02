import { useState, useEffect, useRef } from "react";
import "./App.css";

// In this React app, let's understand the useRef hook.
// useRef hooks helps to interact with the DOM elements. It helps to access and modify the DOM elements directly.
// It also helps to persist the values without causing re-renders. This prevents usage of state variables.
// It also helps create a persistent variable that does not trigger re-renders when its value changes.

function App() {
  const [count, setCount] = useState(0);
  const inputRef = useRef(null);
  const valueRef = useRef(0);

  useEffect(() => {
    // Access the DOM element.
    console.log(inputRef.current);
    // Modify the DOM element (focus on the input).
    inputRef.current.focus();
  }, []);

  const handleCount = () => {
    // Modify the valueRef without causing re-renders.
    valueRef.current += 1;
    console.log("valueRef updated");
  };

  // The valueRef will keep getting updated but on UI it won't be shown. It can be seen on console.
  // When the countRef.current value is updated, it doesn't trigger a re-render of the component because useRef doesn't cause re-renders.
  // To reflect the updated count on UI, the app needs to re-render which is done by the useState count component.

  return (
    <>
      <h1>Vite + React</h1>
      <input type="text" ref={inputRef} />
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div>
      <button onClick={handleCount}>
        ValueRef count is {valueRef.current}
      </button>
    </>
  );
}

export default App;
