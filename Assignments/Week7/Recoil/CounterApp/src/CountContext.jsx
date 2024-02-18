import { createContext } from "react";

// Creating context object using createContext function with the default value 0.
// If a component tries to consume this context without being wrapped in a corresponding provider, it will use this default value.
const CountContext = createContext(0);

export default CountContext;
