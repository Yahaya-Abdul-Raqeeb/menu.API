const validate=require("../config/validator")
const User =require("../models/userSchema")
const bcrypt =require("bcryptjs")

//create new user
const createUser=async(req, res)=>{
const {username, email, password} =req.body;
const valid = awaitvalidate({username, email, password});



if ( valid){
    const hashedPassword= await bcrypt.hash(valid.password, 10);
    const user= new User({
        username,
        email,
        password:hashedPassword,
    });
    await user.save();

    res.status(201).json({
        message:"User created Successfully",
        user,
    });

}else{
    res.status(400).json({
        message:"Invalid data",
    })
}
}
module.exports={createUser}