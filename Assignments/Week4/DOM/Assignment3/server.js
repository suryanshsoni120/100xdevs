const express = require("express");
const app = express();

app.get("/interest", (req, res) => {
  // Get the input values from the user.
  const principal = req.query.principal;
  const rate = req.query.rate;
  const time = req.query.time;
  // Parse the input values to convert them from string to integers and then find the interest.
  const interest =
    (parseInt(principal) * parseInt(rate) * parseInt(time)) / 100;
  // Send the interest as response in string form.
  res.send(interest.toString);
});

app.listen(8000);
