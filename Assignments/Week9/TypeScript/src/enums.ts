// Enums (short for enumerations) in TypeScript are a feature that allows you to define a set of named constants.
// They provide a way to create a group of related values that can be easily referenced and used.
// Enums are useful for representing fixed sets of values or options which might otherwise be represented as numbers or strings.

// Example 1:
// There's a game where action is performed based on whether the user has pressed the up arrow key, down arrow key, left arrow key or right arrow key.

// Method 1: Declaring a type where only 4 values exist of the keyinput.
// This is another approach to achieve similar functionality as enums, especially when dealing with a fixed set of values.
type Directions = "up" | "down" | "left" | "right";

// Method 2: Using enums.
// enums offer additional features like reverse mapping to help access enum member names from their values.
// Each enum member is assigned a numeric value by default, starting from 0 and incrementing by 1.
// We can access enum values using dot notation (Direction.Up) or access enum member names from their values (Direction[0]).
enum Direction {
  Up, // Assigned value: 0
  Down, // Assigned value: 1
  Left, // Assigned value: 2
  Right, // Assigned value: 3
}

function movement(keyPressed: Direction) {}

movement(Direction.Up);
console.log(Direction.Up);

// Example 2: Enums can consist of string values as well.
enum stringDirection {
  Up = "UP",
  Down = "Down",
  Left = "Left",
  Right = "Right",
}

function doSomething(keyPressed: stringDirection) {
  // do something.
}

doSomething(stringDirection.Down);

// Example 3: Using enums in express for creating backend.
// enums can be used to represent status codes, error types, or any other predefined options to ensure type safety.
// enum ResponseStatus {
//   Success = 200,
//   NotFound = 404,
//   Error = 500,
// }

// app.get("/", (req, res) => {
//   if (!req.query.userId) {
//     res.status(ResponseStatus.Error).json({});
//   }
//   // and so on...
//   res.status(ResponseStatus.Success).json({});
// });
