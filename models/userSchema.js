const mongoose =require("mongoose")

const userSchema = mongoose.Schema({
Username:{
    type:String,
    unique:true,
    require:true
},
Email:{
    type:String,
    require:true,
    unique:true
},
Password:{
    type:String,
    required:true


}
}


);
const User =mongoose.model("ser", userSchema);
module.exports=User;
