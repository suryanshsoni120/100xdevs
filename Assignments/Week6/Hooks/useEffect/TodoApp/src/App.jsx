import { useEffect, useState } from "react";
import Todo from "./components/Todo";

// This app polls the sum server, gets the current set of TODOs and renders it on screen.
// We have used useState hook to keep track of the todos that we will receive from server.
// We have used useEffect hook to handle side effects in our App.
// These side effects can include data fetching, subscriptions, manual DOM manipulations, and more.
// Here it is to fetch data from server when the component mounts.
// It helps in managing asynchronous operations without blocking the rendering of the UI.
// It accepts a function as its first argument, which will be executed after the component renders.
// The second argument is an array of dependencies. It determines when the effect should run.
// When the dependencies array is an empty array, the effect runs only after the initial render and not in subsequent renders.
// When the dependencies array contains variables or state values, the effect runs after the initial render and whenever any of the dependencies change.

function App() {
  // Creating state to update the todos.
  const [todos, setTodos] = useState([]);
  // Fetching the server to get the todos.
  useEffect(() => {
    fetch("https://sum-server.100xdevs.com/todos").then(async (res) => {
      // Get the todos as response from the server.
      const json = await res.json();
      // Update the todos.
      setTodos(json.todos);
    });
    // Empty dependency array means this effect runs only once after the initial render.
  }, []);

  return (
    <div>
      {/* Iterate the todos array to get each todo. */}
      {todos.map((todo) => (
        // Show the todo component with the provided title and description.
        <Todo key={todo.id} title={todo.title} description={todo.description} />
      ))}
    </div>
  );
}

export default App;
