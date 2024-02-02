import { useEffect, useRef } from "react";

// Create a component with a text input field and a button. When the component mounts or the button is clicked, automatically focus the text input field using useRef.

export function Assignment1() {
  const inputRef = useRef(null);

  useEffect(() => {
    // Focus on the input when the component mounts.
    inputRef.current.focus();
  }, []); // Empty dependency array ensures this effect runs only once when the component mounts.

  const handleButtonClick = () => {
    // Focus on the input when the button is clicked.
    inputRef.current.focus();
  };

  return (
    <div>
      <input type="text" placeholder="Enter text here" ref={inputRef} />
      <button onClick={handleButtonClick}>Focus Input</button>
    </div>
  );
}
