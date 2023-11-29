const express = require("express")
const { registerUser, loginUser }=require("../controllers/userController");
const protect=require("../config/protect");
console.log(typeof protect);

const router=express.Router();
 
router.route("/signup").post(registerUser);
router.route("/login").post(loginUser);



module.exports=router;
  