// This is the todo component containg the title, description and completion status.
// In App.jsx file, we had passed props while rendering the Todo component.
// So here, we have to get those props by passing props as argument in Todo function.
// Props is an object that represents the properties passed to a React component.

const Todo = (props) => {
  // This function is to toggle the completion status of todo.
  const toggleCompletion = () => {
    props.setCompleted(!props.completed);
  };

  return (
    // Set the value of the fields with desired values from the props object.
    <div className={`todo ${props.completed ? "completed" : ""}`}>
      <h1>{props.title}</h1>
      <h2>{props.description}</h2>
      <button onClick={toggleCompletion}>
        {/* Using ternary operator to show the completion status on button text. */}
        {props.completed ? "Completed" : "Mark as Complete"}
      </button>
    </div>
  );
};

export default Todo;
