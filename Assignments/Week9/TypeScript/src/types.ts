// Types are similar to interfaces. They are used to describe the shape of data and aggregate data together.
// They provide a way to specify the type of values that variables, parameters, and properties can hold.
// TypeScript offers various built-in types as well as the ability to define custom types.
// They are useful for defining unions, intersections, tuples, and other complex types.
// Types cannot be used to implement classes.

// Use Types:
// For advanced scenarios requiring union types, intersections, or mapped types.
// When dealing with primitive types, tuples, or non-object-related types.
// Creating utility types using advanced features like conditional types.

// Practice Qs

// Q1 - Create a function that prints the id of a user, which can be a number or a string.
// This cannot be done using interfaces.
type StringOrNumber = string | number;

function printId(id: StringOrNumber) {
  console.log(`ID: ${id}`);
}

printId(101); // ID: 101
printId("202"); // ID: 202

// Q2 - Create a type that has every property of multiple types/interfaces.
// This cannot be done using interfaces.
type Boss = {
  name: string;
  startDate: Date;
};

type Manager = {
  name: string;
  department: string;
};

type TeamLead = Boss | Manager;

const teamLead: TeamLead = {
  name: "suri",
  startDate: new Date(),
  department: "Software developer",
};
