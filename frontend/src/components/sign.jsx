
import { ImageOutlined } from "@mui/icons-material"
import { Button, Typography } from "@mui/material"
import { useState } from "react"
import { useNavigate } from "react-router-dom"
import axios from "axios"
const link='http://localhost:4000'

function sign(){
  const navigate=useNavigate()
    const [content,setContent]=useState({
      password:"",
      email:"",
    })
    const action=async(e)=>{
      e.preventDefault()
      try{
        const response=await axios.post(link+'/register',content)
        if(response.data==="done"){
          navigate("/")
          
        }
        else{
          alert(response.data)

        }
      }catch(error){
        console.log(error)
        alert("error while registration")
      }
    }
    const change= async(e)=>{
      const {name,value}=e.target
      setContent((data)=>{
        return {...data,[name]:value}
      })
    
    }
    console.log(content.password)
    return(
        <>
          <div  className=" justify-center border-2     flex items-center h-[100vh] "> 
            <div style={{boxShadow:"2px 2px 10px black"}} className=" p-16  ">
            <Typography variant="h3" > sign in</Typography>
            <form onSubmit={action} className="  p-10  flex  flex-col gap-10 " action="">
                <div className="  flex gap-5">
                <label htmlFor="password">password</label>
                <input onChange={change} id="passwrd" name="password" type="password"  placeholder="pasword" />
                </div>
                <div className=" flex  gap-8">
                <label htmlFor="email">email</label>
                <input onChange={change} name="email" type='email' id="email" placeholder="email" />
                </div>
                <div>
                   <Button variant="contained" size="large" >
                    <button className=" px-20" type="sumbit"> submit</button>
                   </Button>
                </div>
            </form>

            </div>
          </div>
        </>
    )
}
export default sign