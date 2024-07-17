import { Button } from "@mui/material"
import Signup from "./signup"
import { useNavigate } from "react-router-dom"


const Appbar = () => {
    const navigate = useNavigate();
  return (
    <div className="flex items-center justify-between px-[2vw] py-[1.2vw]">
        <div><h2 className="text-[1vw] font-semibold">Todo App</h2></div>
        <div>
            <Button variant="contained" margin="normal" size="large"
                onClick={() => {
                    navigate('/signup')
                }}
            >Signup</Button>
        </div>
    </div>
  )
}

export default Appbar
