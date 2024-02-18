import { RecoilRoot } from "recoil";
import Count from "./components/Count";
import "./App.css";

// We had used Context API to get rid of prop drilling and make the code look cleaner and better.
// But there's a flaw in using Context API. The components that don't use the context value are re-rendered unnecessarily.
// Context providers cause re-renders in all consumers within their subtree whenever the context value changes.
// This can lead to performance issues, especially if many components are unnecessarily re-rendered due to changes in context values.

// To overcome these unnecessary re-renders, we have a state management library named Recoil.
// To track state in Recoil, we have Atoms. These can be used in place of React local component state.
// Atoms provide a simple and flexible way to define and interact with state, allowing components to access and update state easily.

// This is a basic counter app where we have made different components just to show use of Recoil.
// A text is also displayed if the counter is even or not.
// The hierarchy of components goes like App -> Count -> CountRenderer -> Buttons.
// Atoms represent units of state in application. Each atom has a unique key and an initial value.
// To read and update the value of state atoms, Recoil provides hooks such as useRecoilValue, useRecoilState and useSetRecoilState.
// These hooks enable components to access state without passing props down through the component tree.
// To display text if the counter is even or not, we can use selector.
// Selectors are functions that compute derived state based on the current state of one or more atoms.
// Each selector has a unique key and a get function.
// Inside the get function, we access the current value of an atom using the get function provided as an argument.

// The useRecoilState hook is like the useState hook containing the current value of a state atom and a setter function to update the value of the atom.
// The useRecoilValue hook returns the current value of a state atom. It is used to read the value of state without updating it.
// The useSetRecoilState hook returns a setter function to update the value of a state atom.
// It is used when you only need to update the value of an atom without reading its current value.

// For our application, define an atom for the count with initial value 0.
// The value will change when the user clicks the buttons. So, define a state for countAtom in Buttons component.
// Use the useRecoilState hook to define the state and update the state value using the setter function of the hook.
// We can also use the useSetRecoilState hook because the Button component's task is to only update the state.
// This prevents re-rendering of the Button component and optimizes the performance.
// The updated value should be shown in the CountRenderer component. Use the useRecoilValue hook to get the value.
// For the text displaying odd or even, we can either use conditionals or use selectors provided by Recoil.
// Using selectors provide a reusable approach to computing derived state, leading to cleaner and more maintainable code.
// Now, as there is no dependency in the Count component, it never re-renders.
// Next, to enable Recoil to manage and synchronize state across our application, use the RecoilRoot component.
// Wrap the Count component with RecoilRoot. Always place the RecoilRoot at the top level of your component tree.
// By doing so, Recoil ensures that all components within the tree have access to the Recoil state.

// Through this approach, Recoil automatically tracks dependencies between state atoms and components.
// If the atom's value changes, Recoil triggers a re-render of the component.
// Components re-render only when their underlying state or dependencies change, resulting in a more responsive and optimized user interface.

function App() {
  return (
    <>
      <RecoilRoot>
        <h1>Counter App using Recoil</h1>
        <Count />
      </RecoilRoot>
    </>
  );
}

export default App;
