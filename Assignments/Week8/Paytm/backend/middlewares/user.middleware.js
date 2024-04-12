const { JWT_SECRET } = require("./config");
const jwt = require("jsonwebtoken");

const userMiddleware = (req, res, next) => {
  const userHeader = req.headers.authorization;
  if (!userHeader || !userHeader.startsWith("Bearer ")) {
    return res.status(403).json({});
  }
  const token = userHeader.split(" ")[1];
  try {
    const decoded = jwt.verify(token, JWT_SECRET);
    req.userId = decoded.userId;
    next();
  } catch (err) {
    return res.status(403).json({});
  }
};

module.exports = {
  userMiddleware,
};
