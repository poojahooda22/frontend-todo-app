import { Card, TextField } from "@mui/material"

const Signup = () => {
  return (
    <div className="flex items-center justify-center mt-[2vw]">
        <Card style={{
                    padding: '16px',   width: 400, 
                    display:"flex", flexDirection: "column", 
                    justifyContent: "center",  alignItems: "center" 
                }}>
            <TextField id="outlined-basic" label="Outlined" variant="outlined" />
        </Card>
    </div>
  )
}

export default Signup
