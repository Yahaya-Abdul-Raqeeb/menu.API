const express =require("express")
const morgan =require("morgan")
require("dotenv").config()
const connectDB =require("./config/connectDB")
const app =express()
const foodRoute=require("./route/foodRoute")
connectDB()
//Middleware
app.use(express.json())
app.use(morgan("dev"))
app.use(foodRoute)

const PORT =process.env.PORT||5002

//Home route
app.get("/", ()=>{
    res.json("Welcome to my Menu API")
})
app.listen(PORT, ()=>{
    console.log("Server on the way : ",PORT)
})