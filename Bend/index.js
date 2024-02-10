let express = require("express")
let mongoose = require("mongoose")
let cors = require("cors")
const route = require("./routers/stdrouter")
let app = express()
app.use(express.json())
app.use(cors())
mongoose.connect("mongodb://127.0.0.1:27017/taskdb").then(()=>{
    console.log("db connection is ok")
}).catch((err)=>{
    console.log(err)
})
app.use("/",route)
app.listen(5000)
