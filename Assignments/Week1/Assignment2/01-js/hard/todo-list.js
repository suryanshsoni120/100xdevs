/*
  Implement a class `Todo` having below methods
    - add(todo): adds todo to list of todos
    - remove(indexOfTodo): remove todo from list of todos
    - update(index, updatedTodo): update todo at given index
    - getAll: returns all todos
    - get(indexOfTodo): returns todo at given index
    - clear: deletes all todos

  Once you've implemented the logic, test your code by running
*/

class Todo {
  constructor(todos) {
    this.todos = [];
  }

  add(todo) {
    this.todos.push(todo);
  }
  remove(indexOfTodo) {
    // If no todos left/ list is empty.
    if (this.todos.length == 0) {
      console.log("No Todos left to be removed.");
    }
    // If the index is valid, remove the index and reduce array size by 1.
    if (indexOfTodo > -1) {
      this.todos.splice(indexOfTodo, 1);
    }
  }
  update(index, updatedTodo) {
    // For index out of bound.
    if (index >= this.todos.length - 1) {
      return this.todos;
    }
    this.todos[index] = updatedTodo;
  }
  getAll() {
    return this.todos;
  }
  get(indexOfTodo) {
    // For index out of bound.
    if (indexOfTodo >= this.todos.length) {
      console.log("Invalid Task");
      return null;
    }
    return this.todos[indexOfTodo];
  }
  clear() {
    // Reset the array.
    this.todos = [];
  }
}

module.exports = Todo;
