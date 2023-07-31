const express = require("express");
const{getHoolniiOrtsnuud,getHoolniiOrts,createHoolniiOrts,updateHoolniiOrts,deleteHoolniiOrts}=require("../controller/hoolniiOrtsController")
const router=express.Router();

router.route("/").get(getHoolniiOrtsnuud).post( createHoolniiOrts)

router.route("/:id").get(getHoolniiOrts).put(updateHoolniiOrts).delete(deleteHoolniiOrts)


module.exports=router;