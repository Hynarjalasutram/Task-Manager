let tsk = require("../model/stdmodel")
let getdata = async (req,res)=>{
    let data = await tsk.find()
    res.json(data)
}
let postdata = (req,res)=>{
    let data = new tsk(req.body)
    data.save().then(()=>{
        res.send("task data is added")
    }).catch((err)=>{
        res.send(err)
    })
}
let getbytitle= async(req,res)=>{
    let data = await tsk.find({"title" : req.params.title})
    res.send(data)
}


module.exports = {getdata,postdata,getbytitle}