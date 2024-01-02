const { Admin } = require("../db");

// Middleware for handling auth
function adminMiddleware(req, res, next) {
  // Implement admin auth logic
  // You need to check the headers and validate the admin from the admin DB. Check readme for the exact headers to be expected

  // Extract the username and the password from the headers.
  const username = req.headers.username;
  const password = req.headers.password;
  // If any one of them is invalid, return response to user with 400 status code.
  if (!username || !password) {
    return res.status(400).json({ error: "Enter valid credentials!" });
  }
  // Search for the admin in DB with the credentials using findOne() method.
  // It is an asynchronous function and returns a promise.
  Admin.findOne({ username: username, password: password })
    .then((admin) => {
      // If the admin doesn't exist in DB, he is not authorised to access the app.
      if (!admin) {
        return res.status(403).json({
          message: "Admin not found!",
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

module.exports = adminMiddleware;
