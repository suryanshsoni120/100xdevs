import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

// Lets get a bit into Prisma. Prisma is a modern ORM (Object-Relational Mapping) and database toolkit for Node.js and TypeScript.
// ORM is a programming technique to interact with relational databases using an object-oriented paradigm.
// It creates a virtual object database that developers can interact with using their programming language instead of direct database queries.
// ORMs are used to abstract the complexities of the underlying database into simpler, more easily managed objects within the code.
// In simple words, ORMs let you easily interact with your database without worrying too much about the underlying syntax.

// Need of ORMs:
// ORM libraries abstract away the complexities of SQL queries and database interactions.
// Developers can work with objects and classes in their programming language instead of writing raw SQL queries.
// This makes the database interactions simpler and more intuitive.
// Prisma uses a Prisma Schema file to define the data model of the application.
// This schema acts as a single source of truth for the database structure, including tables, columns, relationships, etc.

// ORM libraries allow developers to write code that can work with different types of relational databases without modification.
// They provide a unified API to interact with different databases, making it easier to switch databases if needed without rewriting data access layer.

// ORM libraries often include features for type safety and data validation, reducing runtime errors and improving developer productivity.
// Developers can define data models with specific data types and constraints, and the ORM library ensures that data adheres to these rules before persisting it to the database.
// Prisma Client is a type-safe database client generated based on Prisma schema.
// Every database query is checked against the schema, reducing the risk of runtime errors due to data type mismatches.

// ORMs can automate the process of generating and applying database schema migrations, making it easier to evolve the database schema as the application grows.
// Prisma Migrate generates SQL migration files for schema changes, which can be applied to update the database schema.

// Set up the Prisma ORM project by creating Prisma schema file with the command npx prisma init.
// This command creates a new directory called prisma that contains a file called schema.prisma, which contains the Prisma schema with the database connection variable and schema models.
// It also creates the .env file in the root directory of the project, which is used for defining environment variables (such as the database connection).
// Next, connect to the database by setting the url in schema.prisma file to the database URL.
// Create models in the schema.prisma file. To create the table of the models, run Prisma Migrate command npx prisma migrate dev --name init.
// This command creates a new SQL migration file for this migration and runs the SQL migration file against the database.
// After running the migrations, they can be found in the prisma/migrations folder in the project directory.
// Each migration is stored in a separate folder, named with a timestamp and the name provided.
// Inside the migrations folder, there's a migration.sql file containing the SQL commands that were run against the database.

// By defining the data model in the schema.prisma file and using Prisma Migrate, we have successfully created the Users and the Todos table in our database without manually writing any SQL.
// This process not only simplifies database schema management but also ensures that the application's data model is version-controlled and easily reproducible across different environments.

// To perform database operations such as querying, creating, updating, and deleting records, Prisma provides an auto-generated database client called Prisma Client.
// When the data models are defined in the Prisma schema, run the command npx prisma generate to generate the Prisma Client.
// Prisma Client automatically generates methods corresponding to the model's CRUD operations.
// Lets understand the CRUD operations and how Prisma Client works.

// Create operation using Prisma Client.
// async function createUser(
//   username: string,
//   password: string,
//   firstName: string,
//   lastName: string
// ) {
//   // Create a new user into the database using Prisma Client's .create() method.
//   await prisma.user.create({
//     // The data needed to create a new user.
//     data: {
//       username,
//       password,
//       firstName,
//       lastName,
//     },
//     // Return the id and the password of the newly created user.
//     select: {
//       id: true,
//       password: true,
//     },
//   });
// }

// createUser("admin2", "123456", "suryansh", "soni");

// Read operation using Prisma Client.
// async function getUsers() {
//   // Get all users from the database using Prisma Client's .findMany() method.
//   await prisma.user.findMany();
// }

// getUsers();

// Read operation using Prisma Client.
// async function getUser(username: string) {
//   // Get a user from the database based on the provided username using Prisma Client's .findFirst() method.
//   await prisma.user.findFirst({
//     // Find the user with given username.
//     where: {
//       username,
//     },
//   });
// }

// getUser("admin2");

// Update operation using Prisma Client.
// async function updateUser(
//   username: string,
//   firstName: string,
//   lastName: string
// ) {
//   // Updates an existing user in the database using Prisma Client's .update() method.
//   await prisma.user.update({
//     // Find the user with given username.
//     where: {
//       username,
//     },
//     // Update the firsName and lastName.
//     data: {
//       firstName,
//       lastName,
//     },
//   });
// }

// updateUser("admin2", "suri", "soni");

// Delete operation using Prisma Client.
// async function deleteUsers() {
//     // Delete all users from the database using Prisma Client's .deleteMany() method.
//   await prisma.user.deleteMany({});
// }

// deleteUsers();

// Delete operation using Prisma Client.
async function deleteUser(username: string) {
  // Deletes a user from the database based on their username using Prisma Client's .delete() method.
  await prisma.user.delete({
    // Find the user with given username.
    where: {
      username,
    },
  });
}

// deleteUser("admin2");
