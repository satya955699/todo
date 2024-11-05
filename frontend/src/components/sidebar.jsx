import { Box, IconButton, ListItemButton, Toolbar } from "@mui/material"
import { data } from "./linkdata"
import { useState } from "react";
import { ClassNames } from "@emotion/react"
import CloseSharpIcon from '@mui/icons-material/CloseSharp';
import MenuSharpIcon from '@mui/icons-material/MenuSharp';
import { useNavigate } from "react-router-dom";
import { ImportExportOutlined, IsoTwoTone } from "@mui/icons-material";
function sidebar(){
    const [open,setopen]=useState(true)
    const navigat=useNavigate()
    function toggleopen(){
        setopen(!open)
        console.log("click")
    }
    return(
          <div>
            <div className="  md:hidden">

                   <IconButton className=" translate-x-10" onClick={toggleopen}>
                   <MenuSharpIcon color="primary" />
                   </IconButton>
            </div>
        <div  className={`bg-red-600 absolute w-[12rem] h-full z-10 p-4 ${open?'hidden':''}`}  >
            <IconButton onClick={toggleopen} className=" translate-x-24">
            <CloseSharpIcon />
            </IconButton>
        <Box >
            <ul>

            {data.map((val,index)=>{
                return(
                    <ListItemButton onClick={()=>{navigat(val.link)}} key={index}>
                        <li   key={index}>{val.title}</li>

                    </ListItemButton>
                )
            })}
            </ul>
        </Box>
        </div>
        </div>
    )

}
export default sidebar