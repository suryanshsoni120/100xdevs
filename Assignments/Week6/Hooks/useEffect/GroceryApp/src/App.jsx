import { useState } from "react";
import Todo from "./components/Todo";
import "./App.css";

function App() {
  const [todoId, setTodoId] = useState(1);

  return (
    <>
      <button onClick={() => setTodoId(1)}>1</button>
      <button onClick={() => setTodoId(2)}>2</button>
      <button onClick={() => setTodoId(3)}>3</button>
      <button onClick={() => setTodoId(4)}>4</button>
      <h1>Grocery Shopping</h1>
      <Todo id={todoId} />
    </>
  );
}

export default App;
