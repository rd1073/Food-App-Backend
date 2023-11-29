const express = require("express")
const { registerUser }=require("../controllers/userController");
//const protect=require("../protect");
//console.log(typeof protect);

const router=express.Router();
 
router.route("/signup").post(registerUser);
//router.route("/login").post(loginUser);



module.exports=router;
  