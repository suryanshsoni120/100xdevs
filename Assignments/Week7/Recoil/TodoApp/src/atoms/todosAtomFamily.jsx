import { atomFamily, selectorFamily } from "recoil";
import axios from "axios";
import { todos } from "../todos";

// Getting static data from a pre-defined file.
// staticTodosAtomFamily represents a family of atoms, each corresponding to a todo item.
// The atoms are created dynamically based on the id provided as a parameter.
// Default value is determined by searching the todos array for a todo item with a matching id.
export const staticTodosAtomFamily = atomFamily({
  key: "staticTodosAtomFamily",
  default: (id) => {
    return todos.find((todo) => todo.id === id);
  },
});

// Getting dynamic data from a backend server.
// dynamicTodosAtomFamily represents a family of atoms, each corresponding to a todo item.
// The atoms are created dynamically based on the id provided as a parameter.
// Just like an atom, the default value of an atomFamily cannot be asynchronous.
// Incase of atoms, we had selectors as default value as they can be asynchronous.
// Incase of atomFamily, we have selectorFamily which can be default value as they can be asynchronous.
// The get property of the selectorFamily defines an asynchronous function used to find the todo by its ID.
// The function takes ID as a parameter and makes request to the server to find the todo with that particular ID.
// The todo item data is returned from the selectorFamily function which is the default value for the atom corresponding to the provided ID.
// The selector family is responsible for fetching the default value for each atom in the family.
// If there are multiple todos with same ID, only a single request will be sent to the server.
export const dynamicTodosAtomFamily = atomFamily({
  key: "dynamicTodosAtomFamily",
  default: selectorFamily({
    key: "dynamicTodoSelectorFamily",
    get:
      (id) =>
      async ({ get }) => {
        const res = await axios.get(
          `https://sum-server.100xdevs.com/todo?id=${id}`
        );
        return res.data.todo;
      },
  }),
});
