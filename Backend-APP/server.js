const express=require("express")
const app=express()
const PORT=8080
app.use(express())

app.get("/",(req,res)=>{
    res.send("Server Started")
})

app.post("/register",(req,res)=>{
    const [name,email,password]=req.body()

})

app.post("/login",(req,res)=>{

})


app.listen(PORT,()=>{
    console.log("server is running")
})