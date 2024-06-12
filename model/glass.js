const mongoose = require("mongoose")
const schema=mongoose.Schema(
    {
       "title":{type:String,required:true},
        "shape":{type:String,required:true},
        "colour":{type:String,required:true},
        "frame":{type:String,required:true},
        "image":{type:String,require:true}
 
    }
)
let glassmodel=mongoose.model("glasses",schema)
module.exports={ glassmodel }
