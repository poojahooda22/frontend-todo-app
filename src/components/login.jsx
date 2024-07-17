import { Button, Card, TextField } from "@mui/material"
import { Link } from "react-router-dom"

const Login = () => {
  return (
    <div className="flex items-center justify-center pt-[14vw]">
        <Card style={{
            padding: '16px',   width: 460, 
            display:"flex", flexDirection: "column", 
            justifyContent: "center",  alignItems: "center",  }}
        >   
            
            <h2 className="text-[.9vw] font-medium text-center mb-[1vw]">Welcome again! </h2>
            <TextField style={{width: '360px', height: '50px'}}  label="Email" variant="outlined" size="small" margin="normal" />
            <TextField style={{width: '360px', height: '50px'}}  label="password" variant="outlined" size="small" margin="normal" />
            <Button variant="contained" 
                margin="normal"
                size="large"
                style={{
                    marginTop: '1vw',        
                }}
            >Login</Button>
            <div className="flex items-center gap-4 py-[1vw]">
                <div className="w-[6vw] h-[.1px] border-[.1px] border-zinc-300"></div>
                <p>OR</p>
                <div className="w-[6vw] h-[.1px] border-[.1px] border-zinc-300"></div>
            </div>
            <Link to="/login" className="text-[.7vw]">Don&apos;t have an account <span className="underline text-blue-500 font-semibold">Signup</span></Link>
            <Button variant="contained" 
                margin="normal"
                size="large"
                style={{
                    marginTop: '1vw',        
                }}
            >Login</Button>
        </Card>
    </div>
  )
}

export default Login
