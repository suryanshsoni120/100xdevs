import { client } from "..";

/*
 * Should insert into the users table
 * Should return the User object
 * {
 *   username: string,
 *   password: string,
 *   name: string
 * }
 */
export async function createUser(
  username: string,
  password: string,
  name: string
) {
  try {
    // Use parameterized query to prevent SQL injection.
    const insertQuery =
      "INSERT INTO users (username, password, name) VALUES ($1, $2, $3) RETURNING *";
    // Values to be inserted into the database.
    const values = [username, password, name];
    // Execute the SQL query.
    const result = await client.query(insertQuery, values);
    // Output insertion result.
    return result.rows[0];
  } catch (err) {
    console.error("Error creating user: ", err);
  }
}

/*
 * Should return the User object
 * {
 *   username: string,
 *   password: string,
 *   name: string
 * }
 */
export async function getUser(userId: number) {
  try {
    // Use parameterized query to prevent SQL injection.
    const getQuery = "SELECT * FROM users WHERE id = $1";
    const values = [userId];
    // Execute the SQL query.
    const result = await client.query(getQuery, values);
    // Output the user.
    return result.rows[0];
  } catch (err) {
    console.error("Error during fetching user: ", err);
  }
}
