import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

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
  // Create a new user in the database.
  const result = await prisma.user.create({
    // Specifying the fields and their values for the new user.
    data: {
      username,
      password,
      name,
    },
  });
  // The user.create method returns a promise that resolves to the newly created user object
  return result;
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
  // Query the database for a single user.
  const result = await prisma.user.findUnique({
    // The user should have the given userId.
    where: {
      id: userId,
    },
  });
  // The user.findUnique method returns a promise that resolves to the user object.
  return result;
}
