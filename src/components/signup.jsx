import { Card, TextField } from "@mui/material"

const Signup = () => {
  return (
    <div className="flex items-center justify-center pt-[2vw]">
        <Card style={{
            padding: '16px',   width: 400, 
            display:"flex", flexDirection: "column", 
            justifyContent: "center",  alignItems: "center" }}
        >
            <TextField label="Email" variant="outlined" size="small" margin="normal" />
            <TextField label="password" variant="outlined" size="small" margin="normal" />
            
        </Card>
    </div>
  )
}

export default Signup
