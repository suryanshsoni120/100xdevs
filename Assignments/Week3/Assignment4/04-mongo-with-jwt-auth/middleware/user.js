const jwt = require("jsonwebtoken");
const jwtPassword = "usersecret";

function userMiddleware(req, res, next) {
  // Implement user auth logic
  // You need to check the headers and validate the user from the user DB. Check readme for the exact headers to be expected

  // Get the token string from the Authorization header.
  const token = req.headers.authorization;
  // If there's no Authorization header, send error response.
  if (!token) {
    return res.status(404).json({ message: "Token not found!" });
  }
  // The token string is of form "Bearer <---JWT TOKEN--->".
  // So, in order to access the JWT TOKEN, either convert string to array using .split() method or remove the "Bearer " part from string.
  try {
    // Convert string to array using .split() method. The array will be ["Bearer", "JWT TOKEN"].
    const tokenWords = token.split(" ");
    // Get the JWT TOKEN from the array.
    const jwtToken = tokenWords[1];
    // Use .verify() function which takes the token and the password to verify the username with password.
    // If the verification is successful, verifiedData contains the decoded payload of the token.
    const verifiedData = jwt.verify(jwtToken, jwtPassword);
    // Check if the decoded payload contains a "username" property.
    if (verifiedData.username) {
      // If it does, the user is authenticated. For authentication, pass the username to the req object.
      // Move to the next middleware or route.
      req.username = verifiedData.username;
      next();
    } else {
      // If it is not present, the user is not authenticated. Send the error response.
      return res.status(403).json({
        message: "You are not authenticated",
      });
    }
  } catch (error) {
    // If verification fails, return false stating invalid token.
    return res.status(403).json({
      message: "Invalid Token",
    });
  }
}

module.exports = userMiddleware;
