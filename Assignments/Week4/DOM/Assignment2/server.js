const express = require("express");
const app = express();

app.get("/sum", (req, res) => {
  // Get the input numbers from the user.
  const num1 = req.query.num1;
  const num2 = req.query.num2;
  // Parse the input values to convert them from string to integers and then find the sum.
  const sum = parseInt(num1) + parseInt(num2);
  // Send the sum as response in string form.
  res.send(sum.toString);
});

app.listen(8000);
