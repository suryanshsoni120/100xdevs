import { useState } from "react";
import Todo from "./components/Todo";
import "./App.css";

function App() {
  // The todos and content won't be same everytime. So, we need to maintain the state of them and reflect them on UI too.
  // For this, we take help of useState hook provided by React. Initially, everything is empty.
  const [todos, setTodos] = useState([]);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  // Once user adds todo, the value will change and only if no field is empty, then the todo will get added.
  const addTodo = () => {
    if (title && description) {
      // To store the todos, make use of spread operator to show the previous todos and then add the latest todo.
      // ...todos denotes preivous todos that will be shown to the user.
      setTodos([...todos, { title, description, completed: false }]);
      // Once the todo is added, title and description will become empty.
      setTitle("");
      setDescription("");
    }
  };

  // This function updates the completion of todo using its index.
  // It sets the completion value of the todo with the given value and then updates the todos array using setTodos function.
  const completeTodo = (index, value) => {
    const updatedTodos = [...todos];
    updatedTodos[index].completed = value;
    setTodos(updatedTodos);
  };

  return (
    <div>
      <h1>TODO App</h1>
      <div>
        {/* Input fields for the user to input values. */}
        <input
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <input
          type="text"
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        {/* Add event listener to add the created todo in the todos array. */}
        <button onClick={addTodo}>Add TODO</button>
      </div>
      {/* As the todos are stored in an array, we use map() method to iterate and show each todo differerntly.
      For each todo, use the todo component and pass the props with appropriate values.
      To toggle the completion, the setCompleted function prop is passed which triggers the completeTodo function.
      The function takes the index of the todo being updated and the new value for the completion status. */}
      <div className="todos">
        {todos.map((todo, index) => (
          <Todo
            key={index}
            title={todo.title}
            description={todo.description}
            completed={todo.completed}
            setCompleted={(value) => completeTodo(index, value)}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
