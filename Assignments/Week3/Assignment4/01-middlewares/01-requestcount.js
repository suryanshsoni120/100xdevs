const request = require("supertest");
const assert = require("assert");
const express = require("express");

const app = express();

let requestCount = 0;

// You have been given an express server which has a few endpoints.
// Your task is to create a global middleware (app.use) which will
// maintain a count of the number of requests made to the server in the global
// requestCount variable

// Create the middleware function that will increment the count of the number of requests.
function maintainCount(req, res, next) {
  // Anytime a request comes to any of the routes, increment the count.
  requestCount++;
  // Pass control to the next middleware function.
  next();
}
// Use the middleware function for every route.
app.use(maintainCount);

app.get("/user", function (req, res) {
  res.status(200).json({ name: "john" });
});

app.post("/user", function (req, res) {
  res.status(200).json({ msg: "created dummy user" });
});

app.get("/requestCount", function (req, res) {
  res.status(200).json({ requestCount });
});

module.exports = app;
