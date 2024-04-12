import ClassComponent from "./components/ClassComponent";
import FunctionalComponent from "./components/FunctionalComponent";
import DataFetchingHook from "./components/DataFetchingHook";
import BrowserFunctionHook from "./components/BrowserFunctionHook";
import TimerHook from "./components/TimerHook";
import "./App.css";

// The functional components and the hooks were introduced in React 16.8.
// Before that, class components were the primary way of creating components. However, they required more boilerplate code.
// After React 16.8, the functional components have been used more instead of the class components.
// Many popular libraries and frameworks also encourage the use of functional components.
// Functional components provide better performance, readability and a simpler way for state management.

// To understand the differences better, we have a counter app made using the functional component as well the class component.
// FunctionalComponent - Counter app made using the functional component.
// ClassComponent - Counter app made using the class component.

// While React provides many hooks to make our life easy, we still can create our own custom hooks.
// Custom hooks help to encapsulate and reuse logic, leading to cleaner, more maintainable, and more testable code.
// They help to promote best practices such as separation of concerns, code reusability, and modularity.

// A custom hook is effectively a function, but with the following properties -
// Uses another hook internally (useState, useEffect, another custom hook).
// Starts with use.
// If necessary, returns values.

function App() {
  return (
    <>
      {/* <FunctionalComponent />
      <ClassComponent /> */}
      {/* <DataFetchingHook /> */}
      {/* <BrowserFunctionHook /> */}
      <TimerHook />
    </>
  );
}

export default App;
