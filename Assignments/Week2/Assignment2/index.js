// Importing the NodeJS module called as ExpressJS to create server.
const express = require("express");
// Create an instance of express server.
const app = express();
// Define a port where our server will run.
const port = 3000;
// This is used to parse JSON in the request body.
// This helps to work with JSON data easiy in routes.
app.use(express.json());

// Create an in-memory database by creating an array of objects.
// Each object represents a patient.
// We will apply all the backend operations on this array for easy understanding.
let patient = [
  {
    name: "Ajay",
    kidneys: [
      {
        healthy: false,
      },
      {
        healthy: true,
      },
    ],
  },
];

// Get request means sending data to the user.
// Here, we show number of kidneys of patient with health status.
app.get("/", function (req, res) {
  const patientKidneys = patient[0].kidneys;
  const totalKidneys = patientKidneys.length;
  let healthyKidneys = 0;
  for (let i = 0; i < totalKidneys; i++) {
    if (patientKidneys[i].healthy) {
      healthyKidneys++;
    }
  }
  const unhealthyKidneys = totalKidneys - healthyKidneys;
  res.json({ totalKidneys, healthyKidneys, unhealthyKidneys });
});

// Post request means taking data from the user.
// Here, we allow user to add a new kidney.
app.post("/", function (req, res) {
  const isHealthy = req.body.isHealthy;
  patient[0].kidneys.push({
    healthy: isHealthy,
  });
  // This is just to give confirmation to the user if all goes right.
  res.json({
    message: "Kidney added successfully!",
  });
  // Another way to confirm is to check the number of kidneys on get request.
  // Kidneys will increase as we send post requests.
});

// Put request means user wants to update an existing data.
// Here, we allow user to update an unhealthy kidney to a healthy one.
app.put("/", function (req, res) {
  // First check if there are any unhealthy kidneys or not.
  let unhealthyKidneys = 0;
  for (let i = 0; i < patient[0].kidneys.length; i++) {
    if (!patient[0].kidneys[i].healthy) {
      unhealthyKidneys++;
    }
  }
  // If there are no unhealthy kidneys, there's no point of updating the healthy kidneys.
  if (unhealthyKidneys === 0) {
    res.status(411).json({
      message: "No unhealthy kidneys present!",
    });
  }
  const patientKidneys = patient[0].kidneys;
  for (let i = 0; i < patientKidneys.length; i++) {
    patientKidneys[i].healthy = true;
  }
  // This is just to give confirmation to the user if all goes right.
  res.json({
    message: "All kidneys are healthy now!",
  });
  // Another way to confirm is to check the number of healthy kidneys on get request.
  // All kidneys will become healthy as we send put requests.
});

// Delete request means user wants to delete an existing data.
// Here, we allow user to remove an unhealthy kidney.
app.delete("/", function (req, res) {
  // First check if there are any unhealthy kidneys or not.
  let unhealthyKidneys = 0;
  for (let i = 0; i < patient[0].kidneys.length; i++) {
    if (!patient[0].kidneys[i].healthy) {
      unhealthyKidneys++;
    }
  }
  // If there are no unhealthy kidneys, there's no point of removing the unhealthy kidneys.
  if (unhealthyKidneys === 0) {
    res.status(411).json({
      message: "No unhealthy kidneys present!",
    });
  }
  const finalKidneys = [];
  for (let i = 0; i < patient[0].kidneys.length; i++) {
    if (patient[0].kidneys[i].healthy) {
      finalKidneys.push({
        healthy: true,
      });
    }
  }
  patient[0].kidneys = finalKidneys;
  // This is just to give confirmation to the user if all goes right.
  res.json({
    message: "All unhealthy kidneys are removed!",
  });
  // Another way to confirm is to check the number of unhealthy kidneys on get request.
  // All unhealthy kidneys will be removed as we send delete requests.
});

app.listen(port, function () {
  console.log(`Example app listening on port ${port}`);
});
