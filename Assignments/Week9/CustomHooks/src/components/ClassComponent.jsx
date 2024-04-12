import React, { Component } from "react";

// This is a basic counter app created using the class components provided by React.
// React provides a base class called Component for creating class components and defining class-based components.
// To create a class component in React, we extend the Component class and define our component's functionality within it.
// The Component class provides several methods and properties to manage component state, handle lifecycle events, and render UI.

// Class components can manage their own internal state using the state property.
// Constructor is a special method in a class component that is automatically called when an instance of the component is created.
// It's used for initializing the component's state and binding methods. We can initialize state in the constructor and update it using the setState() method.
// It takes a single parameter props, which represents the props passed to the component.

// Class components have a set of built-in lifecycle methods that are automatically invoked at various points in the component's lifecycle.
// These methods include componentDidMount, componentDidUpdate, and componentWillUnmount.
// componentDidMount method performs actions when a component mounts.
// componentWillUnmount method performs actions when a component unmounts.

class ClassComponent extends Component {
  // Define a constructor method to initialize the component's state.
  // Here, we set the initial state with a property count initialized to 0.
  constructor(props) {
    // Calls the constructor of the parent class (React.Component) with the props parameter.
    // This is required when defining a constructor in a subclass to properly initialize the parent class.
    super(props);

    // Initialize the component's state using this.state.
    this.state = {
      count: 0,
    };
  }

  componentDidMount() {
    // Code to run on component mount
    console.log("Component mounted");
  }

  componentWillUnmount() {
    // Code to run on component unmount
    console.log("Component unmounted");
  }

  // This function increments the count value and the component re-renders with the updated count value.
  incrementCount = () => {
    this.setState({ count: this.state.count + 1 });
  };

  // Class components must implement a render() method, which returns the JSX describing the component's UI.
  // The render() method is where you define what the component should render to the screen.
  render() {
    return (
      <div>
        <h1>Counter App using Class Component</h1>
        {/* Add event listener to increase the count value. */}
        <button onClick={this.incrementCount}>Increment</button>
        <p>The count is: {this.state.count}</p>
      </div>
    );
  }
}

export default ClassComponent;
