import { selector } from "recoil";
import { countAtom } from "../atoms/countAtom";

// To display text if the counter is even or not, we can use selector.
// Selectors are functions that compute derived state based on the current state of one or more atoms.
// Each selector has a unique key and a get function.
// Inside the get function, we access the current value of an atom using the get function provided as an argument.

export const evenSelector = selector({
  // This is a unique string identifier for the selector. It's used internally by Recoil to manage the selector's state.
  key: "evenSelector",
  // This is a function that defines how the selector computes its value. It receives an object containing a get function as an argument.
  // The get function can be used to read the current value of atoms or other selectors.
  get: ({ get }) => {
    // We use the get function provided in the get argument to read the current value of countAtom.
    const count = get(countAtom);
    // Check if the value is odd or even.
    return count % 2 === 0;
  },
});
