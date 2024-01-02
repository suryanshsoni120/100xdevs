const { User } = require("../db");

function userMiddleware(req, res, next) {
  // Implement user auth logic
  // You need to check the headers and validate the user from the user DB. Check readme for the exact headers to be expected

  // Extract the username and the password from the headers.
  const username = req.headers.username;
  const password = req.headers.password;
  // If any one of them is invalid, return response to user with 400 status code.
  if (!username || !password) {
    return res.status(400).json({ error: "Enter valid credentials!" });
  }
  // Search for the user in DB with the credentials using findOne() method.
  // It is an asynchronous function and returns a promise.
  User.findOne({ username: username, password: password })
    .then((user) => {
      // If the user doesn't exist in DB, he is not authorised to access the app.
      if (!user) {
        return res.status(403).json({
          message: "User not found!",
        });
      } else {
        // If found in DB, move to the next middleware.
        next();
      }
    })
    .catch(() => {
      return res.status(500).json({ error: "Internal Server Error" });
    });
}

module.exports = userMiddleware;
