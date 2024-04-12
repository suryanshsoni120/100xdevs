import { client } from "..";

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
  try {
    // Use parameterized query to prevent SQL injection.
    const insertQuery =
      "INSERT INTO todos (user_id, title, description) VALUES ($1, $2, $3) RETURNING *";
    // Values to be inserted into the database.
    const values = [userId, title, description];
    // Execute the SQL query.
    const result = await client.query(insertQuery, values);
    // Output insertion result.
    return result.rows[0];
  } catch (err) {
    console.error("Error creating todo: ", err);
    return;
  }
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
  try {
    // Use parameterized query to prevent SQL injection.
    // Update the done status of a todo where the id matches the provided todoId.
    const updateQuery =
      "UPDATE todos SET done = true WHERE id = $1 RETURNING *";
    const values = [todoId];
    // Execute the SQL query.
    const result = await client.query(updateQuery, values);
    // Output updation result.
    return result.rows[0];
  } catch (err) {
    console.error("Error updating todo: ", err);
  }
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
  try {
    // Use parameterized query to prevent SQL injection.
    const getQuery = "SELECT * FROM todos WHERE user_id = $1";
    const values = [userId];
    // Execute the SQL query.
    const result = await client.query(getQuery, values);
    // Output all the todos.
    return result.rows;
  } catch (err) {
    console.error("Error during fetching todos: ", err);
  }
}
