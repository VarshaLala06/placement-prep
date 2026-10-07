const jwt=require('jsonwebtoken');
const fs=require('fs')

const MySecretKey=8978063433

 const  Auth =async(req,res,next)=>{

      const {gmail,password}=req.body;

      const data= fs.readFileSync("users.txt","utf-8")

      const users=JSON.parse(data)

      const user = users.find(u=>u.gmail === gmail);

      if(!user){
        return res.status(401).json({"message" : "Invalid gmail"})
      }

    if(user.password !== password){
        return res.status(401).json({"message" : "Invalid password"})
    }

    const token =jwt.sign({gmail:user.gmail},MySecretKey,{expiresIn:"2h"});

     res.json({
        message:"LOGIN successful",
        token:token
     })
}

module.exports=Auth