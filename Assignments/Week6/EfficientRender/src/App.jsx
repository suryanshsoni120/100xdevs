import { useState } from "react";
import Header from "./components/Header";
import UpdatedHeader from "./components/UpdatedHeader";
import MemoHeader from "./components/MemoHeader";
import "./App.css";

// React is like a combination of JS and HTML. The syntax written is called as JSX.
// So, each React component returns a JSX which renders and updates the UI.
// JSX is stricter than HTML. We have to enclose each and every tag in JSX.
// There are self closing tags like <br/>, <img/> and there are wrapping tags like <li><li>, <div></div>.
// JSX is a bit stricter and can display dynamic information. So, it has a few more rules than HTML.
// A React component can’t return multiple JSX tags.
// This is because JSX is transformed into plain JS objects in rendering process.
// We can’t return two objects from a function without wrapping them into an array.
// To return multiple elements from a component, wrap them with a single parent tag(particularly div).
// If you don’t want to add an extra <div> to your markup, you can write <></> instead. These are called Fragments.
// Returning a single JSX makes reconcilation faster.

// Rendering in React refers to the process of updating the user interface based on changes in the application state.
// React uses a virtual DOM to efficiently manage and update the actual DOM, optimizing performance by minimizing unnecessary updates.
// Each React component has a render method that defines the structure and appearance of the component.
// When a component's state or props change, React re-invokes its render method.
// The render method returns a virtual DOM representation of how the component should look based on the updated state or props.
// React compares the new virtual DOM with the previous one to identify the differences. This process is known as reconciliation.
// React uses a diffing algorithm to efficiently determine the minimal set of changes needed to update the actual DOM.
// It identifies what parts of the virtual DOM tree have changed.
// React applies the changes to only the modified portions of the actual DOM.
// This makes updates as efficient as possible by minimizing direct manipulations of the real DOM.
// By using the virtual DOM and a smart diffing algorithm, React ensures that only the necessary parts of the UI are updated, leading to improved performance.

// React's rendering process is a key factor in its ability to create fast and responsive user interfaces.

// An optimal React app will have minimum number of re-renders of its components.
// To minimise the re-renders, either by pushing the state down or by using memoization.

// Pushing the state down
// It is the practice of managing state at the lowest possible level in the component tree.
// This localizes the state to the components that absolutely need it, reducing unnecessary re-renders in higher-level components.
// Local component state in React refers to the state that is specific and local to a particular component.
// It is typically used to store and manage data that is relevant only to that specific component.
// When state is kept at a higher level in the component tree, any changes to that state can trigger re-renders for all child components, even if they don't directly use or depend on that particular piece of state.
// However, by pushing the state down and ensuring that each component only has access to the state it needs, you can minimize the impact of state changes on the overall component tree.

// memo in React
// React normally re-renders a component whenever its parent re-renders.
// Memoization is a technique used to optimize rendering performance by preventing unnecessary re-renders of a component when its props have not changed.
// It is particularly useful for functional components that receive the same props but don't need to re-render every time the parent component renders.
// To memoize a component, wrap it in memo and use the value that it returns in place of your original component.
// The React.memo function takes a functional component as its argument and returns a new memoized component.
// The memoized component will re-render only if the props passed to it have changed else it will reuse the previously rendered result.

function App() {
  // Using state globally
  const [title, setTitle] = useState("This is title");

  function changeTitle() {
    setTitle("Title updated " + Math.random());
  }

  return (
    <>
      <h1>Using the state globally</h1>
      <button onClick={changeTitle}>Change Title</button>
      {/* Only this component has the state changing while others don't. */}
      {/* So, there will be unnecessary re-renders of all components as state is defined globally. */}
      <Header title={title} />
      {/* These components will also re-render. */}
      <Header title="Another title" />
      <Header title="Another title" />
      <h1>Using the state locally</h1>
      {/* SOLUTION1: PUSHING THE STATE DOWN */}
      {/* Using another component with local state so that only the specific component re-renders. */}
      <UpdatedHeader />
      {/* These components will not re-render. */}
      <Header title="Another title" />
      <Header title="Another title" />
      <h1>Using memo</h1>
      {/* SOLUTION: USING MEMOIZATION */}
      {/* Another component created to showcase memoization. */}
      <MemoHeader />
      <Header title="Another title" />
      <Header title="Another title" />
    </>
  );
}

export default App;
