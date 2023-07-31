const express = require("express");
const{getHoolniiTsesnuud,getHoolniiTses,createHoolniiTses,updateHoolniiTses,deleteHoolniiTses}=require("../controller/hoolniiTsesController")
const router=express.Router();

router.route("/").get(getHoolniiTsesnuud).post( createHoolniiTses)

router.route("/:id").get(getHoolniiTses).put(updateHoolniiTses).delete(deleteHoolniiTses)


module.exports=router;