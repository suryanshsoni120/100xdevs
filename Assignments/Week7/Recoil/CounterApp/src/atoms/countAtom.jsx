import { atom } from "recoil";

// Atoms represent units of state in application. Each atom has a unique key and an initial value.

export const countAtom = atom({
  key: "countAtom",
  default: 0,
});
