const express = require("express");
const router=express.Router();
const {register,login}=require("../controller/userController")
router.route("/").post(register)
router.route("/login").post(login)
module.exports=router;