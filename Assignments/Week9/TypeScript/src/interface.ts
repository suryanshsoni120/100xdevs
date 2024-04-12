// Interface is a way to define the shape of an object by specifying the names and types of its properties.
// They can also describe functions and method signatures, allowing to define the shape of functions.
// They can also be implemented as a class. This is useful to create multiple instances of the class.
// Overall, interfaces in TypeScript provide a powerful way for type checking and ensuring code correctness.

// Use Interfaces:
// When defining the structure of objects or contracts for class implementations.
// Extending or implementing other interfaces.
// When consistency in object shape is a priority.

interface Person {
  firstName: string;
  lastName: string;
  email: string;
  age: number;
}

// Practice Qs

// Q1 - Create a function isLegal that returns true or false if a user is above 18. It takes a user as an input.
function isLegalPerson(person: Person) {
  if (person.age > 18) {
    return true;
  } else {
    return false;
  }
}

// Q2 - Create a React component that takes todos as an input and renders them.
// interface TodoType {
//   title: string;
//   description: string;
//   done: boolean;
// }

// interface TodoInput {
//   todo: TodoType;
// }

// function Todo({ todo }: TodoInput) {
//   return (
//     <div>
//       <h1>{todo.title}</h1>
//       <h2>{todo.description}</h2>
//     </div>
//   );
// }

// Q3 - Given an interface, create a class which implements that interface.
interface Worker {
  name: string;
  age: number;
  welcome(phrase: string): void;
}

class Employee implements Worker {
  name: string;
  age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  welcome(phrase: string) {
    console.log(`${phrase} ${this.name}`);
  }
}
