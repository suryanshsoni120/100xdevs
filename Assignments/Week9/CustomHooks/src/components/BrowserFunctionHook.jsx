import React, { useEffect, useState } from "react";

// Now lets create some hooks that would provide browser functionality.
// We will make 3 custom hooks. First hook tells if the user is online or not.
// Second hook tells the position of the mouse cursor. Third hook tells the dimensions of the window.

// For first hook, we take help of the window object.
// window.navigator.onLine returns true or false based on weather the user is online or not.
// Then, set up the event listeners for online status and offline status with the help of useEffect.
// When the online event fires, it sets isOnline state to true, and when the offline event fires, it sets isOnline state to false.
// Finally, return the isOnline state variable, which indicates whether the browser is currently online or offline.

function useIsOnline() {
  // Creating state for the online status of the browser.
  const [isOnline, setIsOnline] = useState(window.navigator.onLine);

  useEffect(() => {
    // Attaching event listeners for online status.
    window.addEventListener("online", () => setIsOnline(true));
    // Attaching event listeners for offline status.
    window.addEventListener("offline", () => setIsOnline(false));
    // Empty dependency array means it runs only once.
  }, []);
  // Return the online status.
  return isOnline;
}

// For second hook, create a state variable position to store the x and y coordinates of the mouse pointer.
// Then, set up the event listeners for the mousemove event with the help of useEffect.
// Whenever the mouse moves, the updateMousePosition function updates the position state with the current mouse coordinates obtained from the event object.
// Finally, return the position state variable, allowing components to access the current mouse pointer position.

function useMousePosition() {
  // Creating state for the x and y coordinates of the mouse pointer.
  const [position, setPosition] = useState({ x: 0, y: 0 });
  // Function to update the position state with the current mouse coordinates obtained from the event object.
  const updateMousePosition = (e) => {
    setPosition({ x: e.clientX, y: e.clientY });
  };

  useEffect(() => {
    // Add event listener for mousemove event.
    window.addEventListener("mousemove", updateMousePosition);
    // Cleanup function to remove event listener when component unmounts.
    return () => {
      window.removeEventListener("mousemove", updateMousePosition);
    };
    // Empty dependency array means it runs only once.
  }, []);
  // Return the position state variable.
  return position;
}

// For third hook, create a state variable dimensions to store the width and height of the window.
// Then, set up the event listeners for the resize event with the help of useEffect.
// Whenever the window is resized, the updateDimensions function updates the dimensions state with the current width and height obtained from window.innerWidth and window.innerHeight respectively.
// Finally, return the dimensions state variable, allowing components to access the current dimensions of the window.

function useDimensions() {
  // Creating state for the width and height of the window.
  const [dimensions, setDimensions] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });
  // Function to update the dimensions state with the with the current width and height obtained from the event object.
  const updateDimensions = () => {
    setDimensions({
      width: window.innerWidth,
      height: window.innerHeight,
    });
  };

  useEffect(() => {
    // Add event listener for window resize event.
    window.addEventListener("resize", updateDimensions);
    // Cleanup function to remove event listener when component unmounts.
    return () => {
      window.removeEventListener("resize", updateDimensions);
    };
    // Empty dependency array means it runs only once.
  }, []);
  // Return the dimensions state variable.
  return dimensions;
}

function BrowserFunctionHook() {
  const isOnline = useIsOnline();
  const mousePosition = useMousePosition();
  const dimensions = useDimensions();

  return (
    <>
      {isOnline ? <h1>You are online yay!</h1> : <h1>You are not online!</h1>}
      Your mouse position is {mousePosition.x} {mousePosition.y}
      <h2>Window Dimensions</h2>
      <p>
        Width: {dimensions.width}px, Height: {dimensions.height}px
      </p>
    </>
  );
}

export default BrowserFunctionHook;
