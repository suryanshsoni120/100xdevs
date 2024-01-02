// Importing the NodeJS module called as ExpressJS to create server.
const express = require("express");
// Create an instance of express server.
const app = express();

// Apply the middleware function to all the routes.
app.use(countRequests);

// Apply the middleware function to all the routes.
app.use(handleRequests);

// Q1-  Count the number of requests.
let requests = 0;
// Creating the middleware function to count the requests.
// Each time a request is made to the server, the count will increment.
function countRequests(req, res, next) {
  requests++;
  console.log(requests);
  next();
}

// Q2- Find the average time your server is taking to handle requests.
function handleRequests(req, res, next) {
  const start = Date.now();
  () => {
    const end = Date.now();
    console.log(end - start);
  };
  next();
}

// Running the server on port 3000.
app.listen(3000);
