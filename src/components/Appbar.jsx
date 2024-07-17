
import Signup from "./signup"
import { useEffect } from "react"
import axios from 'axios'

const Appbar = () => {
    useEffect(() => {
        const res = axios.get('http://localhost:3000/auth/me', {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`
          }
        })
        const data = res.data;
        console.log(data)
    }, [])
    
  return (
    <div className="flex items-center justify-center px-[2vw] py-[1.2vw]">
        {/* <div><h2 className="text-[1vw] font-semibold text-center">Todo App</h2></div> */}
        {/* <div>
            <Button variant="contained" margin="normal" size
            >Signup
        </div> */}

        <Signup />
    </div>
  )
}

export default Appbar
