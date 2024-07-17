import { Button, Card, TextField } from "@mui/material"

const Signup = () => {
  return (
    <div className="flex items-center justify-center pt-[14vw]">
        <Card style={{
            padding: '16px',   width: 460, 
            display:"flex", flexDirection: "column", 
            justifyContent: "center",  alignItems: "center" }}
        >   
            <h2 className="text-[1.3vw] font-bold text-center mb-[.2vw]">Hello</h2>
            <h2 className="text-[.9vw] font-medium text-center mb-[1vw]">Welcome! Please enter your details</h2>
            <TextField style={{width: '360px', height: '50px'}}  label="Email" variant="outlined" size="small" margin="normal" />
            <TextField style={{width: '360px', height: '50px'}}  label="password" variant="outlined" size="small" margin="normal" />
            <div className="flex items-center gap-4 py-[1vw]">
                <div className="w-[6vw] h-[.1px] border-[.1px] border-zinc-600"></div>
                <p>OR</p>
                <div className="w-[6vw] h-[.1px] border-[.1px] border-zinc-600"></div>
            </div>
            <p>Already have an account <span className="underline text-blue-500 font-semibold">Login</span></p>
            <Button variant="contained" 
                margin="normal"
                size="large"
                style={{
                    marginTop: '2vw',        
                }}
            >Signup</Button>
        </Card>
    </div>
  )
}

export default Signup
