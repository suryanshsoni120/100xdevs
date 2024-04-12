import { Client } from "pg";

// This is a NodeJS application where we will see the working of PostgreSQL.
// We are using TypeScript instead of JavaScript as it helps to catch errors easily.
// Unlike MongoDB, PostgreSQL is a Relational Database Management System which stores data in form of tables.
// The problem with MongoDB is that there isn't strictness in checking data which leads to inconsistency.
// While mongoose does add strictness to the codebase, but that strictness is present at the NodeJS level, not at the DB level.
// So, the user can add any form of data and change the schema easily. This is not a good practice when building applications.

// SQL databases have strict schema that store data in the form of tables and rows.
// Most fullstack applications will use this to prevent inconsistency and provide strictness in DB.
// To create a PostgreSQL DB, we can use online services that let us create server or we can use Docker.
// Some free service providers are NeonDB, AivenDB, ElephantDB. Just signup on the platform and create a project.
// Using Docker, start a PostgreSQL database by running the following command in your terminal or command prompt:
// docker run --name my-postgres-db -e POSTGRES_PASSWORD=mysecretpassword -p 5432:5432 -d postgres
// This command runs a Docker container to set a PostgreSQL DB with name my-postgres-db, password mysecretpassword on port 5432 using postgres image.
// The connection string obtained will be of the form: postgresql://username:password@host:port/db
// For the above DB, the connection string would look like: postgresql://postgres:mysecretpassword@localhost:5432/postgres
// For online service platforms, the connection string would look like:
// postgresql://username:password@ep-broken-frosts-69135494.us-east-2.aws.neon.tech/calm-cobbler-41_db_2253874
// username: Your account username when you signed up on platform.
// ep-broken-frosts-69135494.us-east-2.aws.neon.tech: The host where the server has been created by the platform.
// calm-cobbler-41_db_2253874: DB name.

// Using MongoDB was easy as we could connect and perform operations through the MongoDB Compass GUI.
// For PostgreSQL, we don't have such dedicate software so that our life becomes easier.
// To interact with DB, we have two libraries namely psql and pg.
// psql is a CLI for PostgreSQL which helps to interact with DB directly from the terminal or command prompt.
// It provides an interactive shell for executing SQL queries, managing database objects, and performing administrative tasks.
// Once connected, you can execute SQL commands directly within the psql shell.
// pg is a NodeJS library that can be used in the backend applications to store data in the PostgreSQL DB.
// It allows to interact with PostgreSQL DB from the NodeJS applications by providing a JS API to execute SQL queries.

// Creating a new PostgreSQL client instance to interact with DB from your NodeJS application.
// INSERTING DATA INTO DB.
// Method 1:
// Async function to insert data into a table.
// async function insertData() {
//   const client = new Client({
//     host: "DB_HOST",
//     port: 5432,
//     database: "DB_NAME",
//     user: "YOUR_USERNAME",
//     password: "YOUR_PASSWORD",
//   });

//   try {
//     // Ensure client connection is established.
//     await client.connect();
//     const insertQuery =
//       "INSERT INTO users (username, email, password) VALUES ('username2', 'user3@example.com', 'user_password');";
//     const res = await client.query(insertQuery);
//     // Output insertion result.
//     console.log("Insertion success:", res);
//   } catch (err) {
//     console.error("Error during the insertion:", err);
//   } finally {
//   // Close the client connection.
//     await client.end();
//   }
// }

// insertData();

// This is an insecure way to store data in tables.
// When exposed this functionality eventually via HTTP, someone can do an SQL INJECTION to get access to data or delete the data.
// More secured way is to store data is don’t put user provided fields(Email, username, password) in the SQL string.
// Instead, use parameterized query to prevent SQL injection.

// Method 2:
// Async function to insert data into a table.
async function insertData(username: string, email: string, password: string) {
  const client = new Client({
    host: "DB_HOST",
    port: 5432,
    database: "DB_NAME",
    user: "YOUR_USERNAME",
    password: "YOUR_PASSWORD",
  });

  try {
    // Ensure client connection is established.
    await client.connect();
    // Use parameterized query to prevent SQL injection.
    const insertQuery =
      "INSERT INTO users (username, email, password) VALUES ($1, $2, $3)";
    const values = [username, email, password];
    const res = await client.query(insertQuery, values);
    // Output insertion result.
    console.log("Insertion success:", res);
  } catch (err) {
    console.error("Error during the insertion:", err);
  } finally {
    // Close the client connection.
    await client.end();
  }
}

// Example usage
insertData("username5", "user5@example.com", "user_password").catch(
  console.error
);

// Creating a function getUser that fetches data from the DB given an email as input.
// GETTING DATA FROM DB.
// Async function to fetch user data from the database given an email.
async function getUser(email: string) {
  const client = new Client({
    host: "DB_HOST",
    port: 5432,
    database: "DB_NAME",
    user: "YOUR_USERNAME",
    password: "YOUR_PASSWORD",
  });

  try {
    // Ensure client connection is established.
    await client.connect();
    const query = "SELECT * FROM users WHERE email = $1";
    const values = [email];
    const result = await client.query(query, values);

    if (result.rows.length > 0) {
      // Output user data.
      console.log("User found: ", result.rows[0]);
      // Return the user data.
      return result.rows[0];
    } else {
      console.log("No user found with the given email.");
      // Return null if no user was found.
      return null;
    }
  } catch (err) {
    console.error("Error during fetching user: ", err);
    // Rethrow or handle error appropriately.
    throw err;
  } finally {
    // Close the client connection.
    await client.end();
  }
}

getUser("user3@example.com").catch(console.error);

// Relationships
// Relationships let you store data in different tables and relate it with each other.
// In MongoDB, relationships are often represented using embedded documents within a single document. It doesen't supports JOIN operations.
// In PostgreSQL, relationships are established using tables and foreign keys.
// It supports the JOIN operations which help to retrieve related data from multiple tables using various types of joins.
// PostgreSQL's normalized model and support for joins provide more flexibility in querying complex data relationships.

// Defining the relationship between the Users table and the Address table.
// CREATE TABLE users (
//   id SERIAL PRIMARY KEY,
//   username VARCHAR(50) UNIQUE NOT NULL,
//   email VARCHAR(255) UNIQUE NOT NULL,
//   password VARCHAR(255) NOT NULL,
//   created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
// );

// CREATE TABLE addresses (
//   id SERIAL PRIMARY KEY,
//   user_id INTEGER NOT NULL,
//   city VARCHAR(100) NOT NULL,
//   country VARCHAR(100) NOT NULL,
//   street VARCHAR(255) NOT NULL,
//   pincode VARCHAR(20),
//   created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
//   FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE
// );

// Adding a user address.
// INSERT INTO addresses (user_id, city, country, street, pincode)
// VALUES (1, 'New York', 'USA', '123 Broadway St', '10001');

// To get the address of a user given an id, we can use the below query. This demonstrates the relationship between the two tables.
// SELECT city, country, street, pincode
// FROM addresses
// WHERE user_id = 1;

// Transactions
// Transactions in a DB are like a bundle of operations that are grouped together to ensure that they either all happen or none of them happen.
// They ensure that operations are reliable, consistent, and safe, even in the face of failures or concurrent access by multiple users.
// They're essential for maintaining the integrity and reliability of the data stored in the DB.
// Here, we can use transactions to ensure that both the user information and address should be sent to DB else nothing.

async function insertUserAndAddress(
  username: string,
  email: string,
  password: string,
  city: string,
  country: string,
  street: string,
  pincode: string
) {
  const client = new Client({
    host: "DB_HOST",
    port: 5432,
    database: "DB_NAME",
    user: "YOUR_USERNAME",
    password: "YOUR_PASSWORD",
  });

  try {
    await client.connect();
    // Start transaction
    await client.query("BEGIN");
    // Insert user
    const insertUserText = `
          INSERT INTO users (username, email, password)
          VALUES ($1, $2, $3)
          RETURNING id;
      `;
    const userRes = await client.query(insertUserText, [
      username,
      email,
      password,
    ]);
    const userId = userRes.rows[0].id;
    // Insert address using the returned user ID
    const insertAddressText = `
          INSERT INTO addresses (user_id, city, country, street, pincode)
          VALUES ($1, $2, $3, $4, $5);
      `;
    await client.query(insertAddressText, [
      userId,
      city,
      country,
      street,
      pincode,
    ]);
    // Commit transaction
    await client.query("COMMIT");
    console.log("User and address inserted successfully");
  } catch (err) {
    // Roll back the transaction on error.
    await client.query("ROLLBACK");
    console.error("Error during transaction, rolled back.", err);
    throw err;
  } finally {
    // Close the client connection.
    await client.end();
  }
}

// Example usage
insertUserAndAddress(
  "johndoe",
  "john.doe@example.com",
  "securepassword123",
  "New York",
  "USA",
  "123 Broadway St",
  "10001"
);

// Joins
// Joins allow to retrieve related data from multiple tables in a single query.
// Using Joins reduces latency and simplifies the application logic.

// Let's say we want to fetch a users details and their address.
// Method 1: Without using JOINS
// Query 1:
// SELECT users.id, users.username, users.email, addresses.city, addresses.country, addresses.street, addresses.pincode
// FROM users
// JOIN addresses ON users.id = addresses.user_id
// WHERE users.id = '1';
// Query 2:
// SELECT u.id, u.username, u.email, a.city, a.country, a.street, a.pincode
// FROM users u
// JOIN addresses a ON u.id = a.user_id
// WHERE u.id = YOUR_USER_ID;

// Async function to fetch user details and address separately.
// async function getUserDetailsAndAddressSeparately(userId: string) {
//   const client = new Client({
//     host: "localhost",
//     port: 5432,
//     database: "postgres",
//     user: "postgres",
//     password: "mysecretpassword",
//   });

//   try {
//     await client.connect();
//     // Fetch user details.
//     const userDetailsQuery =
//       "SELECT id, username, email FROM users WHERE id = $1";
//     const userDetails = await client.query(userDetailsQuery, [userId]);
//     // Fetch user address.
//     const userAddressQuery =
//       "SELECT city, country, street, pincode FROM addresses WHERE user_id = $1";
//     const userAddress = await client.query(userAddressQuery, [userId]);
//     if (userDetails.rows.length > 0) {
//       console.log("User found:", userDetails.rows[0]);
//       console.log(
//         "Address:",
//         userAddress.rows.length > 0 ? userAddress.rows[0] : "No address found"
//       );
//       return {
//         user: userDetails.rows[0],
//         address: userAddress.rows.length > 0 ? userAddress.rows[0] : null,
//       };
//     } else {
//       console.log("No user found with the given ID.");
//       return null;
//     }
//   } catch (err) {
//     console.error("Error during fetching user and address:", err);
//     throw err;
//   } finally {
//     await client.end();
//   }
// }
// getUserDetailsAndAddressSeparately("1");

// Method 2: Using JOINS
// SELECT users.id, users.username, users.email, addresses.city, addresses.country, addresses.street, addresses.pincode
// FROM users
// JOIN addresses ON users.id = addresses.user_id
// WHERE users.id = '1';

// Async function to fetch user data and their address together
async function getUserDetailsWithAddress(userId: string) {
  const client = new Client({
    host: "localhost",
    port: 5432,
    database: "postgres",
    user: "postgres",
    password: "mysecretpassword",
  });
  try {
    await client.connect();
    const query = `
          SELECT u.id, u.username, u.email, a.city, a.country, a.street, a.pincode
          FROM users u
          JOIN addresses a ON u.id = a.user_id
          WHERE u.id = $1
      `;
    const result = await client.query(query, [userId]);
    if (result.rows.length > 0) {
      console.log("User and address found:", result.rows[0]);
      return result.rows[0];
    } else {
      console.log("No user or address found with the given ID.");
      return null;
    }
  } catch (err) {
    console.error("Error during fetching user and address:", err);
    throw err;
  } finally {
    await client.end();
  }
}
getUserDetailsWithAddress("1");

// Types of Joins
// INNER JOIN: It returns only the rows where there is a match between the columns in both tables.
// SELECT users.username, addresses.city, addresses.country, addresses.street, addresses.pincode
// FROM users
// INNER JOIN addresses ON users.id = addresses.user_id;

// LEFT JOIN: It returns all the rows from the first table and the matching rows from the second table else returns NULL.
// SELECT users.username, addresses.city, addresses.country, addresses.street, addresses.pincode
// FROM users
// LEFT JOIN addresses ON users.id = addresses.user_id;

// RIGHT JOIN: It returns all the rows from the second table and the matching rows from the first table else returns NULL.
// SELECT users.username, addresses.city, addresses.country, addresses.street, addresses.pincode
// FROM users
// RIGHT JOIN addresses ON users.id = addresses.user_id;

// FULL JOIN: It effectively combines the results of both LEFT JOIN and RIGHT JOIN.
// It returns all the rows from both tables and combines them based on the join condition else returns NULL.
// SELECT users.username, addresses.city, addresses.country, addresses.street, addresses.pincode
// FROM users
// FULL JOIN addresses ON users.id = addresses.user_id;
