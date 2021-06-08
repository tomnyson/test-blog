const jwt = require("jsonwebtoken");

let auth = (req, res, next) => {
  try {
    const token = req.header("x-auth-token");
    if (!token)
      return res
        .status(400)
        .json({ success: false, msg: "Not authentication token!" });

    const verified = jwt.verify(token, process.env.JWT_SECRET);
    if (!verified)
      res
        .status(401)
        .json({ success: false, msg: "Token verification failed!" });
    req.admin = verified.id;

    next();
  } catch (err) {
    res.status(500).json({ success: false, err });
  }
};

module.exports = { auth };
