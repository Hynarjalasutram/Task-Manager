let express = require("express")
const { getdata, postdata, getbytitle} = require("../controlers/stdcontroler")
let route = new express.Router()
route.get("/getdata",getdata)
route.post("/postdata",postdata)
route.get("/getbytitle/:title",getbytitle)
module.exports=route