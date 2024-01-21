const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();
const userRouter = require("./routes/user");
const PORT = 3000;

// Middleware for parsing request bodies.
app.use(bodyParser.json());
app.use("/api/user", userRouter);
// Middleware to allow making requests to this server from fontend.
app.use(cors({ origin: "http://localhost:5173/" }));

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
