import { useState } from "react";
import Todo from "./components/Todo";
import "./App.css";

// Here we have created a basic todo application using React.
// Each todo should have a title and description.
// There should be a button to add a new todo.

// Once we traverse the todos array to show each todo to the user, the todo is visible and the code seems to be correct.
// The problem is that React won't be able to identify which items are added, removed, or modified when the array changes.
// So, it is important to assign a unique and stable identifier to each array element.
// This is where the key prop comes into picture.
// The key should be a unique identifier for each array element.

// The key prop helps React in efficiently updating the DOM by identifying which items have changed, added, or removed.
// It also optimizes the rendering process else React might have to re-render the entire array even if only one element changes.

// Defining the variable
let counter = 4;

function App() {
  // Defining the initial todos array with some values.
  const [todos, setTodos] = useState([
    {
      id: 1,
      title: "go to gym",
      description: "go to gym today",
    },
    {
      id: 2,
      title: "eat food",
      description: "eat food today",
    },
    {
      id: 3,
      title: "go to class",
      description: "go to class today",
    },
  ]);

  // Function to add a new todo and update the todos array.
  const addTodo = () => {
    setTodos([
      ...todos,
      {
        id: counter,
        title: `this is ${counter}th todo's title`,
        description: `this is ${counter}th todo's description`,
      },
    ]);
    counter++;
  };

  return (
    <>
      <h1>Todo Application</h1>
      <button onClick={addTodo}>Add Todo</button>
      <div className="card">
        {todos.map((todo) => (
          // Inefficient way by not including key prop
          // <Todo title={todo.title} description={todo.description} />

          // Efficient way by including key prop
          <Todo
            key={todo.id}
            title={todo.title}
            description={todo.description}
          />
        ))}
      </div>
    </>
  );
}

export default App;
