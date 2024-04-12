// TypeScript provides strong type checking for arrays, ensuring to only store values of a specific type in an array.
// To access arrays in typescript, it’s as simple as adding a [] annotation next to the type.

// Practice Qs

// Q1 - Given an array of positive integers as input, return the maximum value in the array.
function maxValue(arr: number[]) {
  let max = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
  }
  return max;
}

console.log(maxValue([1, 2, 3]));

// Q2 - Given a list of users, filter out the users that are legal (greater than 18 years of age).
interface User {
  firstName: string;
  lastName: string;
  age: number;
}

function filteredUsers(users: User[]) {
  return users.filter((x) => x.age >= 18);
}

console.log(
  filteredUsers([
    {
      firstName: "harkirat",
      lastName: "Singh",
      age: 21,
    },
    {
      firstName: "Raman",
      lastName: "Singh",
      age: 16,
    },
  ])
);
