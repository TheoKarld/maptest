const { access } = require("fs");
const { verify } = require("jsonwebtoken"),
  { clg } = require("../routes/basics");

const validateToken = (req, res, next) => {
  var accessToken = req.header("accessToken");
  if (!accessToken) return res.json({ error: "User is not Logged in" });
  try {
    const validToken = verify(accessToken, "SmartMoveTokenSecret");
    req.user = validToken;
    if (validToken) {
      return next();
    }
  } catch (err) {
    clg("token verification error");
    return res.json({
      error:
        "Authentication Error, please try login in again to fix the issue!!!!!!",
    });
  }
};

module.exports = { validateToken };
