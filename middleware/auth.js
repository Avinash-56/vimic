const jwt = require("jsonwebtoken");
const jwtSecret = require("../config/keys").jwtSecret;

module.exports = function(req, res, next) {
  const token = req.header("Authorization");
  if (!token) {
    return res.status(401).json({ msg: "No authorization" });
  }
  try {
    const decoded = jwt.verify(token, jwtSecret);
    req.user = decoded.user;
    next();
  } catch (err) {
    res.status(401).json({ msg: "Token not valid" });
  }
};
