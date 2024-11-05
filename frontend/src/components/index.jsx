import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { Button, ButtonGroup, IconButton, Toolbar } from '@mui/material';
import { useNavigate } from 'react-router-dom';
function index(){
    let navigate=useNavigate()
    return(
        <>
      <div className=' place-items-center   h-[100vh]  justify-center flex '>
        <div>

   
        <div>
            <AccountCircleIcon  style={{fontSize:"250px"}}  />
            
        </div>
        <div className=' flex justify-between '>

        <ButtonGroup
       
  disableElevation
  variant="contained"
  aria-label="Disabled button group"
>
  <Button onClick={()=>navigate("/login")}>Login</Button>

 
</ButtonGroup>
<ButtonGroup
       
       disableElevation
       variant="contained"
       aria-label="Disabled button group"
     >
      
       <Button onClick={()=>navigate("/sign")}>
         sign in
       </Button>
      
     </ButtonGroup>

          
               
             
            </div>
          
        </div>
      </div>
        </>
    )
}
export default index