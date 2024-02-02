import { useState, useEffect } from "react";

const Todo = ({ id }) => {
  const [todo, setTodo] = useState({});

  // Fetching the server to get the todo by todoId.
  useEffect(() => {
    fetch(`https://sum-server.100xdevs.com/todos?id=${id}`).then(
      async (res) => {
        // Get the todo as response from the server.
        const json = await res.json();
        // Update the todo.
        setTodo(json.todo);
      }
    );
    // Including id as a dependency because the content will be different of each todoId.
    // Whenever the id changes, the useEffect will run and fetch the server to get the todo content.
  }, [id]);

  return (
    <div>
      <h2>{todo.title}</h2>
      <h6>Todo id: {id}</h6>
      <h5>{todo.description}</h5>
    </div>
  );
};

export default Todo;
