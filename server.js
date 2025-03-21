const express=require('express');
const app=express();
const dotenv=require('dotenv');
const cors=require('cors')
app.use(cors());
dotenv.config();
const PORT=process.env.PORT || 8051;

app.get('/blog',async(req,res)=>{
     try{
          const data=await fetch('https://magnetonn-in-backend.vercel.app');
          const blogData=await data.json();
          res.send(blogData);
     }
     catch(err){
          console.log('err occuerd');
          res.send({message:'error occured 404'})
          
     }
})
app.get('/',(req,res)=>{
     res.send({message:'invalid request'})
})
app.listen(PORT,()=>{
     console.log(`sever running on PORT:${PORT}`);
})