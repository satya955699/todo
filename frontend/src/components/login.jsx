import { Email, Password } from "@mui/icons-material"
import { Button, Typography } from "@mui/material"
import { useState } from "react"
import axios from "axios"
import { useNavigate } from "react-router-dom"


function login({setIsAuthenticated}){
    let navigate=useNavigate()
    const [content,setContent]=useState({email:"",password:""})    
    function change(e){
        e.preventDefault()
        const {name,value}=e.target
         setContent((priv)=>{
          return{
            ...priv,[name]:value
          }
         })

    }
    const action= async(e)=>{
      e.preventDefault()
      const result=await axios.post('http://localhost:4000/login',content)
      if(result.data==="done"){
        setIsAuthenticated(true)
        navigate("/header")
      }else{
        
        alert(result.data)
      }
    } 
    return(
        <>
          <div  className=" justify-center border-2     flex items-center h-[100vh] "> 
            <div style={{boxShadow:"2px 2px 10px black"}} className=" p-16  ">
            <Typography variant="h3" >Log in</Typography>
            <form onSubmit={action} className="  p-10  flex  flex-col gap-10 ">
                <div className="  flex gap-5">

                <label htmlFor="password">password</label>
                <input name="password" onChange={change} id="passwrd" type="password"  placeholder="pasword" />
                </div>
                <div className=" flex  gap-8">
                <label htmlFor="email">email</label>
                <input name="email" onChange={change} type='email' id="email" placeholder="email" />
                </div>
                <div>
                   <Button variant="contained" size="large" >
                    <button className=" px-20" type="sumbit"> log in</button>
                   </Button>
                </div>
            </form>

            </div>
          </div>
        </>
    )
}
export default login