const express = require("express");
const jwt = require("jsonwebtoken");
// Temporary password for authentication purpose.
const jwtPassword = "123456";

const app = express();

app.use(express.json());

// In-memory database.
const ALL_USERS = [
  {
    username: "harkirat@gmail.com",
    password: "123",
    name: "harkirat singh",
  },
  {
    username: "raman@gmail.com",
    password: "123321",
    name: "Raman singh",
  },
  {
    username: "priya@gmail.com",
    password: "123321",
    name: "Priya kumari",
  },
];

// This middleware function checks if a user exists in the in-memory database or not.
function userExists(username, password) {
  // Using filter() method.
  // ALL_USERS.filter(function (user) {
  //   return user.username == username && user.password == password;
  // });

  // Using for loop.
  for (let i = 0; i < ALL_USERS.length; i++) {
    if (
      ALL_USERS[i].username == username &&
      ALL_USERS[i].password == password
    ) {
      return true;
    }
  }
  return false;
}

// POST request - Returns a json web token with username encrypted.
app.post("/signin", function (req, res) {
  // Extract the input values for validation.
  const username = req.body.username;
  const password = req.body.password;
  // Check if the values match in the db.
  if (!userExists(username, password)) {
    // If don't match, the user doesn't exists. So, send response with 403 status code.
    return res.status(403).json({
      msg: "User doesn't exist in our in memory db",
    });
  }
  // If user exists, create a token containing the username and password and return it to the user.
  var token = jwt.sign({ username: username }, jwtPassword);
  return res.json({
    token,
  });
});

// GET request - Returns an array of all users if user is signed in (token is correct) else return 403 status code.
app.get("/users", function (req, res) {
  // It takes an authorization header containg the token.
  const token = req.headers.authorization;
  // Verify the token content by verifying username with password.
  try {
    // Use .verify() function which takes the token and the password to verify the username with password.
    // If successful, it returns the decoded payload JSON object containg some data along with username.
    const decoded = jwt.verify(token, jwtPassword);
    // Extract the username from the decoded payload JSON object.
    const username = decoded.username;
    // Return a list of users other than this username.
    res.json({
      users: ALL_USERS.filter(function (user) {
        // For the same username, don't return it in response.
        if (user.username == username) {
          return false;
          // For other usernames, return them in response.
        } else {
          return true;
        }
      }),
    });
  } catch (err) {
    // If verification fails, return response with 403 status code stating invalid token.
    return res.status(403).json({
      msg: "Invalid token",
    });
  }
});

app.listen(3000);
