import { Button, Card, TextField } from "@mui/material"

const Signup = () => {
  return (
    <div className="flex items-center justify-center pt-[14vw]">
        <Card style={{
            padding: '16px',   width: 400, 
            display:"flex", flexDirection: "column", 
            justifyContent: "center",  alignItems: "center" }}
        >
            <h2 className="text-[1vw] font-bold">Welcome to Todo App!</h2>
            <TextField style={{width: '360px', height: '50px'}}  label="Email" variant="outlined" size="small" margin="normal" />
            <TextField style={{width: '360px', height: '50px'}}  label="password" variant="outlined" size="small" margin="normal" />
            <Button variant="contained" 
                margin="normal"
                size="large"
                style={{
                    marginTop: '16px',        
                }}
            >Signup</Button>
        </Card>
    </div>
  )
}

export default Signup
