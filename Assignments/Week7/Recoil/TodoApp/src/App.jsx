import { RecoilRoot } from "recoil";
import Todo from "./components/Todo";
import "./App.css";

// This is a todo application with state management using Recoil.
// Each todo has an id, a title and a description. We have a server from which we will fetch a todo using its id.
// We will create a atom for each todo with some default values and then a selector will fetch the server and update the values.
// But the problem here is we don't know how many todos are there. Atom is used when we have a single piece of state with fixed values.
// We will need to manage multiple todos, each with its own state (title, description). This is where atomFamily comes into picture.
// atomFamily helps to manage multiple items dynamically and provides a flexible and efficient way to handle state for each item.
// For our todo application, would use an atomFamily to create atoms for individual todo items.
// This would help us to dynamically create atoms for each todo item based on its unique identifier.

function App() {
  return (
    <>
      <h1>Todo App using Recoil</h1>
      <RecoilRoot>
        <br /> <br />
        <Todo id={1} />
        <Todo id={2} />
        <Todo id={3} />
        <Todo id={4} />
        <Todo id={5} />
        <Todo id={6} />
      </RecoilRoot>
    </>
  );
}

export default App;
