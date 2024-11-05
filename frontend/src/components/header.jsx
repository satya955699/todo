import LocalBarIcon from '@mui/icons-material/LocalBar';
import MenuIcon from '@mui/icons-material/Menu';
import AccountCircleSharpIcon from '@mui/icons-material/AccountCircleSharp';
import { Badge, Divider, IconButton, Toolbar, Typography } from '@mui/material';
import {data} from './linkdata';
import Sidebar from './sidebar';
import { useNavigate } from 'react-router-dom';
import DirectionsBikeSharpIcon from '@mui/icons-material/DirectionsBikeSharp';
function header(){
    const navigate=useNavigate()
    return(
        <>
         <Sidebar />
        <div style={{ boxShadow:"2px 2px 4px black",  }} className=' bg-gray-900 m-3 flex justify-between shadow-2xl text-white'>
            <Toolbar>
                <div className=' hidden  '>
                <DirectionsBikeSharpIcon className=' hidden'/>
                </div>
                <Typography className=' px-7' >TO-DO</Typography>
            </Toolbar>
            <Toolbar>
                <ul className='  hidden  md:flex mr-9 '>
                    {data.map((val,index)=>{
                        return(

                            <li key={index} onClick={()=>{navigate(val.link)}}  className='px-6 cursor-pointer' >{val.title}</li>
                        )
                    })}
                </ul>
                <Badge className='acc' badgeContent={4} color='primary'>

                <AccountCircleSharpIcon  />
                </Badge>
                <div className=' ext absolute text-white bg-gray-950 left-[30vw]  w-16  top-11 '>   <Typography><ul className=' text-center'><li>login</li><li>sign in</li></ul></Typography>  </div>
            </Toolbar>
        </div>
       

        </>
    )
}   
export default header