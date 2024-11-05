import express from "express"
import pg from  "pg"
import bodyParser from "body-parser"
import cors from "cors"
import bcrypt from "bcrypt"
const db= new pg.Client({
    user:"postgres",
    host:"localhost",
    database:"react-todo",
    password:"satya832004",
    port:3000,
})
db.connect()
const app=express()
const port=4000
app.use(bodyParser.urlencoded({extended:true}))
app.use(express.json())
app.use(cors())
app.post("/register",async(req,res)=>{
         const{email,password}=req.body
         const comp=await db.query("SELECT email FROM todo WHERE email=$1",[email])
         if(comp.rows.length<=0){
            try{
                const hashpassword= await bcrypt.hash(password,10)
                console.log(hashpassword)
        
                await db.query("INSERT INTO todo(email,password) VALUES($1,$2) ",[email,hashpassword])
                res.send("done")
              }catch(error){
      
               res.send("error")
              }
         }
         else{
            res.send("you are alredy sign in")
            
         }
     
})
app.post("/login",async(req,res)=>{
    const {email,password}=req.body
    try{
        console.log(req.body)
        const result= await db.query("SELECT * FROM  todo WHERE email=$1",[email])
        const user=result.rows[0];
        console.log(user)
        if(!user){
            res.send("user name not found")
        }
        const ismatch=await bcrypt.compare(password,user.password)
        if(!ismatch){
            res.send("password incorrect")
        }
        res.send("done")

    }catch(error){
      console.log("helo")
    }
})
app.listen(port,()=>{
    console.log(`your server is running on ${port}`)
})