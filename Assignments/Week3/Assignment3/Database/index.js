const express = require("express");
const jwt = require("jsonwebtoken");
const mongoose = require("mongoose");
const jwtPassword = "123456";

mongoose.connect(
  "mongodb+srv://user1:gbb5RGSiJl1ppPL8@cluster0.hguw6bs.mongodb.net/"
);

const User = mongoose.model("User", {
  name: String,
  username: String,
  password: String,
});

const app = express();
app.use(express.json());

function userExists(username, password) {
  return User.findOne({ username: username }, { password: password });
}

app.post("/signin", async function (req, res) {
  const username = req.body.username;
  const password = req.body.password;

  if (!userExists(username, password)) {
    return res.status(403).json({
      msg: "User doesn't exist in our memory db",
    });
  }

  var token = jwt.sign({ username: username }, jwtPassword);
  return res.json({
    token,
  });
});

app.get("/users", function (req, res) {
  const token = req.headers.authorization;
  try {
    const decoded = jwt.verify(token, jwtPassword);
    const username = decoded.username;
    // Return a list of users other than this username from the database.
    res.json({
      users: User.filter(function (user) {
        // For the same username, don't return it in response.
        if (user.username == username) {
          return false;
        } else {
          // For other usernames, return them in response.
          return true;
        }
      }),
    });
  } catch (err) {
    return res.status(403).json({
      msg: "Invalid token",
    });
  }
});

app.listen(3000);
