const jwt = require("jsonwebtoken");
const { User } = require("./db");
const protect = async (req, res, next) => {
    try {
      let token;
  
      if (
        req.headers.authorization &&
        req.headers.authorization.startsWith("Bearer") // Bearer token
      ) {
        token = req.headers.authorization.split(" ")[1];
  
        // decodes the  token id
        const decoded = jwt.verify(token, "abcd");
  
        // find the user by id and exclude the password field
        const user = await User.findById(decoded.id).select("-password");
  
        if (user) {
          req.user = user;
          next();
        } else {
          res.status(401).json({ error: "Not authorized, user not found" });
        }
      } else {
        res.status(401).json({ error: "Not authorized, no token" });
      }
    } catch (error) {
      console.error("Protect middleware error:", error);
      res.status(401).json({ error: "Not authorized, token failed" });
    }
  };
  
module.exports = protect;