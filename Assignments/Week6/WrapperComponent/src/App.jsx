import CardWrapper from "./components/CardWrapper";
import Card from "./components/Card";
import TextComponent from "./components/TextComponent";
import "./App.css";

// Let's understand the concept of wrapper component through the code.
// Wrapper component refers to a component that wraps another component to provide additional functionality or behavior.
// It is like a special box that you put around another component to add some extra features or make it look different.
// So, a wrapper component is like a decorator for another component, allowing you to enhance or customize its behavior, appearance, or functionality.
// Wrapper components help in code organization, reusability, and adding certain features or behaviors to multiple components.

// Here, we have defined 2 wrapper components - Card and CardWrapper.
// In both components we have used a prop. The usage of this prop is different in these components.
// In Card component, the prop used is innerComponent while in CardWrapper component it is children prop.
// Somewhere we have passed the prop while somewhere we haven't.

// The innerComponent prop is a normal prop used in React components. It passes the data from parent component to child component.
// children is a special prop in React which represents the content between the opening and closing tags of a component.
// Components can use children to render the content provided between their tags.

// children is automatically provided by React based on the content between the tags.
// props need to be explicitly passed when using a component.

// children is typically used for passing and rendering content.
// props are used for passing data and configuring component behavior.

function App() {
  return (
    <>
      <h1>Vite + React</h1>
      <div className="card">
        {/* Passing plain text as children prop in CardWrapper component. */}
        <CardWrapper>hi there</CardWrapper>
        {/* Prop not passed in Card component. */}
        <Card />
        {/* Prop passed in Card component. */}
        <Card innerComponent={<TextComponent />} />
        {/* Prop passed in CardWrapper component but not passed in Card component. */}
        {/* The prop passed is called the children prop. */}
        <CardWrapper>{<Card />}</CardWrapper>
        {/* Prop passed in CardWrapper component as well as in Card component. */}
        <CardWrapper>{<Card innerComponent={<TextComponent />} />}</CardWrapper>
      </div>
    </>
  );
}

export default App;
