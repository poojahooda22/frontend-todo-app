import { Button, Card, TextField } from "@mui/material"
impor
import { useState } from "react"
import { Link } from "react-router-dom"

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    const response = await fetch('http://localhost:3000/auth/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json', 
        "Authorization": `Bearer ${localStorage.getItem("token")}`
      },
      body: JSON.stringify({username, password})
    })
    const data = await response.json();
    if(data.token) {
      localStorage.setItem('token', data.token);
      window.location = '/todos';
    } else {
      alert('Invalid credentials');
    }
  }

  return (
    <div className="flex items-center justify-center pt-[14vw]">
      <Card style={{
        padding: '16px',   width: 460, 
        display:"flex", flexDirection: "column", 
        justifyContent: "center",  alignItems: "center",  }}
      >    
        <h2 className="text-[.9vw] font-medium text-center mb-[1vw]">
          Welcome again! 
        </h2>
        <TextField 
          style={{width: '360px', height: '50px'}}  
          label="Email" variant="outlined" size="small" 
          margin="normal"
          onChange={(e) => {
            setUsername(e.target.value)
          }}
        />
        <TextField 
          style={{width: '360px', height: '50px'}}  label="password" 
          variant="outlined" size="small" margin="normal"
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
          onClick={handleLogin}
        >
          Login
        </Button>
        <div className="flex items-center gap-[.5vw] py-[1vw]">
          <div className="w-[5.5vw] h-[.1px] border-[.1px] border-zinc-300"></div>
          <p>OR</p>
          <div className="w-[5.5vw] h-[.1px] border-[.1px] border-zinc-300"></div>
        </div>
        <Link to="/signup" 
          className="text-[.7vw]"
        >
          Don&apos;t have an account 
          <span className="underline text-blue-500 font-semibold">Signup</span>
        </Link> 
      </Card>
    </div>
  )
}

export default Login
