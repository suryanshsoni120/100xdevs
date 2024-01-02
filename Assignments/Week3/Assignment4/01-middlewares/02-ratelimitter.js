const request = require("supertest");
const assert = require("assert");
const express = require("express");
const app = express();
// You have been given an express server which has a few endpoints.
// Your task is to create a global middleware (app.use) which will
// rate limit the requests from a user to only 5 request per second
// If a user sends more than 5 requests in a single second, the server
// should block them with a 404.
// User will be sending in their user id in the header as 'user-id'
// You have been given a numberOfRequestsForUser object to start off with which
// clears every one second

let numberOfRequestsForUser = {};
setInterval(() => {
  numberOfRequestsForUser = {};
}, 1000);

function requestsRateLimitter(req, res, next) {
  // Extract the user id from the request.
  const userID = req.header("user-id");
  // There will be three possibilities for the number of requests made by the user.
  // If the value is undefined, make it 0.
  if (!numberOfRequestsForUser[userID]) {
    numberOfRequestsForUser[userID] = 1;
    // If the value is less than 5, just increment.
  } else if (numberOfRequestsForUser[userID].requests < 5) {
    numberOfRequestsForUser[userID].requests++;
  } else {
    // If the value is 5 or more, send the response to the user with status code of 404.
    res.status(404).json({
      msg: "Too many requests by the user!",
    });
    // Early return as we dont want to execute the rest of the code.
    return;
  }
  // Pass control to the next middleware function.
  next();
}
// Use the middleware function for every route.
app.use(requestsRateLimitter);

app.get("/user", function (req, res) {
  res.status(200).json({ name: "john" });
});

app.post("/user", function (req, res) {
  res.status(200).json({ msg: "created dummy user" });
});

module.exports = app;
