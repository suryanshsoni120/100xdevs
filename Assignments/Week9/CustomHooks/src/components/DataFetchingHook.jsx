import React, { useEffect, useState } from "react";
import axios from "axios";
import Todo from "./Todo";

// This app polls the sum server, gets the current set of TODOs and renders it on screen.
// We have used useState hook to keep track of the todos that we will receive from server.
// We have used useEffect hook to handle side effects in our App.
// These side effects can include data fetching, subscriptions, manual DOM manipulations, and more.
// Here it is to fetch data from server when the component mounts.

function DataFetchingHook() {
  // Without custom hook

  // Creating state to update the todos.
  const [todos, setTodos] = useState([]);
  // Fetching the server to get the todos.
  useEffect(() => {
    // Get the todos as response from the server.
    axios.get("https://sum-server.100xdevs.com/todos").then((res) => {
      // Update the todos.
      setTodos(res.data.todos);
    });
    // Empty dependency array means this effect runs only once after the initial render.
  }, []);

  // With custom hook

  // Get the updated todos and the loading status from the custom hook.
  const { customTodos, loadingStatus } = useTodos(5);

  if (loadingStatus) {
    return <div>Loading Todos...</div>;
  }

  return (
    <>
      <div>
        <h1>Without custom hook</h1>
        {/* Iterate the todos array to get each todo. */}
        {todos.map((todo) => (
          // Show the todo component with the provided title and description.
          <Todo todo={todo} />
        ))}
      </div>
      <div>
        <h1>With custom hook</h1>
        {/* Iterate the todos array to get each todo. */}
        {todos.map((todo) => (
          // Show the todo component with the provided title and description.
          <Todo todo={todo} />
        ))}
      </div>
    </>
  );
}

// Lets create a custom hook which will perform all the above operations in one go and return the todos.
// Data fetching hooks can be used to encapsulate all the logic to fetch the data from the backend.
// By encapsulating the data fetching logic in a custom hook, we can reuse this functionality across multiple components without duplicating code.
// We can enhance the app by adding loading states to show a loader when the data is not yet fetched from the backend.
// One more functionality can be added where User can automatically poll the server to get updated todos every N seconds.
// For this, we wrap the server fetching logic inside setInterval.

function useTodos(n) {
  // Creating state to update the todos.
  const [todos, setTodos] = useState([]);
  // Creating state for the loading status.
  const [loading, setLoading] = useState(true);
  // Fetching the server to get the todos.
  useEffect(() => {
    const time = setInterval(() => {
      // Get the todos as response from the server.
      axios.get("https://sum-server.100xdevs.com/todos").then((res) => {
        // Update the todos.
        setTodos(res.data.todos);
        // Set the loading status as false.
        setLoading(false);
      });
    }, n * 1000);
    // Get the todos as response from the server.
    axios.get("https://sum-server.100xdevs.com/todos").then((res) => {
      // Update the todos.
      setTodos(res.data.todos);
      // Set the loading status as false.
      setLoading(false);
    });
    return () => {
      clearInterval(time);
    };
    // N is a dependency here. Each time N changes, request should be sent to the server again to get updated todos.
  }, [n]);
  // Return the updated todos and the loading status.
  return { todos, loading };
}

export default DataFetchingHook;
