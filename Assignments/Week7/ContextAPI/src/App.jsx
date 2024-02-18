import { useState, useContext } from "react";
import CountContext from "./CountContext";
import Count from "./components/Count";
import "./App.css";

// When a parent component needs to pass data to its child components, it does so by passing props to them.
// If those child components further need to pass these props down to their own child components, the process continues.
// This forms a chain of prop passing known as props drilling. It means passing props down through multiple levels of nested components.

// This is a basic counter app where we have made different components just to show prop drilling.
// The hierarchy of components goes like App -> Count -> Buttons.
// The state defined in App.jsx is being sent to all the child components here.
// Here, Count component doesn’t really need the setCount parameter. It’s just taking it to pass it down to another component.
// Count is just being used as a mediator between the App and Buttons component as the state is defined in the top level component.
// This is bad because none of the middle components are using it. They’re just passing it down to the components which need it.

// As the application grows, prop drilling can increase and lead to complex code, especially when dealing with deeply nested components.
// Prop drilling can cause unnecessary re-renders of intermediate components if they receive props that they don't use, leading to performance issues.

// To avoid prop drilling, we use Context API. It helps to create a global state that can be accessed by any component in the component tree.
// This eliminates the need to pass props manually through multiple levels of nesting.
// It involves creating a context provider at a higher level in the component tree. This provider will hold the shared state.
// The Provider component is used to provide the context value to its child components.
// It accepts a value prop, which will be available to all components that consume the CountContext within the subtree of this provider.
// Next, consume the context in any child component that needs access to the shared state.
// To consume the context value in a component, use the useContext hook provided by the Context API.
// If the context value changes, React will automatically re-render any components that consume the context to reflect the updated value.

function App() {
  // Created the state of count.
  const [count, setCount] = useState(0);

  return (
    <>
      <h1>Context API</h1>
      {/* Child component with props passed. */}
      {/* Without Context API */}
      {/* <Count count={count} setCount={setCount} /> */}

      {/* With Context API */}
      <CountContext.Provider value={count}>
        <Count setCount={setCount} />
      </CountContext.Provider>
    </>
  );
}

export default App;
