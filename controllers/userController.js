const { User } = require("../config/db");
const generateToken = require("../config/token");
const bcrypt = require("bcrypt");


 //register user
const registerUser = async (req, res) => {
    try {
      const { username, password } = req.body;
      console.log("Request Body:", req.body);

  
      if (!username || !password) {
        res.status(400).json({ error: "Please Enter all the Fields" });
        return;
      }
  
      // Check if user already exists
      const userExists = await User.findOne({ username });
  
      if (userExists) {
        res.status(400).json({ error: "User already exists" });
        return;
      }
  
      const hashedPassword = await bcrypt.hash(password, 10);

      // Create a new user instance
      const newUser = new User({
        username,
        password:hashedPassword,
      });
  
      // Save the user instance to the database
      newUser.save().then((user) => {
        console.log("User saved:", user);

        res.status(201).json({
          _id: user._id,
          username: user.name,
          token: generateToken(user._id),
        });
      });
    } catch (err) {
      console.error(err);
      res.status(500).json({ error: "Server error probably" });
    }
  };
  

// login a user

  const loginUser = async (req, res) => {
    try {
      const { username, password } = req.body;
      console.log("Request Body:", req.body);

  
      if (!username || !password) {
        res.status(400).json({ error: "Please Enter all the Fields" });
        return;
      } 
  
      // Check if user already exists
      const user = await User.findOne({ username });
  
      if (user && (await bcrypt.compare(password, user.password))) {
        console.log("login succesful");
        res.json({
            _id: user._id,
            username: user.name,
            token: generateToken(user._id),
          });
      } else{
        res.status(401);
        throw new Error("Invalid Username or Password");

      }
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: "Server error probably" });
}};




module.exports = { registerUser, loginUser };
