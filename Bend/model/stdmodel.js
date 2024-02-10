let mongoose = require("mongoose")
let tskschema = new mongoose.Schema({
    "title":String,
    "description":String
});
module.exports = mongoose.model("tsk",tskschema)