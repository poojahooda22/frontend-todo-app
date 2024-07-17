import { Button, Card, TextField } from "@mui/material"
import { Link } from "react-router-dom";
import axios from 'axios';
import { useState } from "react";

const Signup = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

  return (
    <div className="flex items-center justify-center pt-[14vw]">
        <Card style={{
            padding: '16px',   width: 460, 
            display:"flex", flexDirection: "column", 
            justifyContent: "center",  alignItems: "center",  }}
        >   
            
            <h2 className="text-[.9vw] font-medium text-center mb-[1vw]">Welcome! Please enter your details</h2>
            <TextField style={{width: '360px', height: '50px'}}  label="Email" variant="outlined" size="small" margin="normal"
            onChange={(e) => {
                setEmail(e.target.value)
            }}
            />
            <TextField style={{width: '360px', height: '50px'}}  label="password" variant="outlined" size="small" margin="normal" 
            onChange={(e) => {
                setPassword(e.target.value)
            }}
            />
            <Button variant="contained" 
                margin="normal"
                size="large"
                style={{
                    marginTop: '1vw',        
                }}
                onClick={ async () => { 
                    const res =  await axios.post('http://localhost:3000/auth/signup', {
                        username: email,
                        password: password
                    })
                    let data = res.data;
                    localStorage.setItem("token", data.token);
                }}
            >Signup</Button>
            <div className="flex items-center gap-[.5vw] py-[1vw]">
                <div className="w-[5.5vw] h-[.1px] border-[.1px] border-zinc-300"></div>
                <p>OR</p>
                <div className="w-[5.5vw] h-[.1px] border-[.1px] border-zinc-300"></div>
            </div>
            <Link to="/login" className="text-[.7vw]">Already have an account <span className="underline text-blue-500 font-semibold">Login</span></Link>  
        </Card>
    </div>
  )
}

export default Signup
