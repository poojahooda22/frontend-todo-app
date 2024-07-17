import { Button } from "@mui/material"
import Signup from "./signup"
import { useNavigate } from "react-router-dom"


const Appbar = () => {
    
  return (
    <div className="flex items-center justify-center px-[2vw] py-[1.2vw]">
        {/* <div><h2 className="text-[1vw] font-semibold text-center">Todo App</h2></div> */}
        {/* <div>
            <Button variant="contained" margin="normal" size="large"
                onClick={() => {
                    navigate('/signup')
                }}
            >Signup</Button>
        </div> */}

        <Signup />
    </div>
  )
}

export default Appbar
