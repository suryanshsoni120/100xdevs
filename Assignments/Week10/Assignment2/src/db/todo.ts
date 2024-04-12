import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

/*
 * Function should insert a new todo for this user
 * Should return a todo object
 * {
 *  title: string,
 *  description: string,
 *  done: boolean,
 *  id: number
 * }
 */
export async function createTodo(
  userId: number,
  title: string,
  description: string
) {
  // Create a new todo in the database.
  const result = await prisma.todo.create({
    // The values for the fields of the todo to be created.
    data: {
      userId,
      title,
      description,
    },
  });
  // The todo.create method returns a promise that resolves to the newly created todo object.
  return result;
}
/*
 * mark done as true for this specific todo.
 * Should return a todo object
 * {
 *  title: string,
 *  description: string,
 *  done: boolean,
 *  id: number
 * }
 */
export async function updateTodo(todoId: number) {
  // Update an existing todo in the database.
  const result = await prisma.todo.update({
    // The todo with the given id should be updated.
    where: {
      id: todoId,
    },
    // Specifying the fields and their new values that should be updated. Here, it sets the done field to true.
    data: {
      done: true,
    },
  });
  // The todo.update method returns a promise that resolves to the updated todo object.
  return result;
}

/*
 *  Get all the todos of a given user
 * Should return an array of todos
 * [{
 *  title: string,
 *  description: string,
 *  done: boolean,
 *  id: number
 * }]
 */
export async function getTodos(userId: number) {
  // Query the database for todos.
  const result = await prisma.todo.findMany({
    // Todos should belong to the user with the given userId.
    where: {
      userId,
    },
  });
  // The todo.findMany method returns a promise that resolves to an array of todo objects.
  return result;
}
