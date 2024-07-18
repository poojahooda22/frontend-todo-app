import { Avatar, Button, Card, TextField } from "@mui/material"

const TodoList = () => {
    
  return (
    <div>
        <div className="px-[2vw] py-[2vw] flex items-center justify-between">
            <h1 className="text-[1vw] font-semibold">Todo App</h1>
            <div className="flex items-center gap-[1vw]">
                <Button variant="contained" onClick={() => { localStorage.setItem("token", null)}} >Logout</Button>
                <Avatar src="/broken-image.jpg" />    
            </div>
        </div>
        <div className="flex items-center justify-center">
            <Card style={{
                padding: '16px',   width: 460, 
                display:"flex", flexDirection: "column", 
                justifyContent: "center",  alignItems: "center",}}
            >
                <TextField style={{width: '360px', height: '50px'}}  
                    label="Title" variant="outlined" size="small" margin="normal"
                />
                <TextField style={{width: '360px', height: '50px'}}  
                    label="description" variant="outlined" size="small" margin="normal" 
                />
                <Button variant="contained" 
                    margin="normal"
                    size="large"
                    style={{ marginTop: '1vw', }}
                >Add</Button>
            </Card>
        </div>
    </div>
  )
}

export default TodoList
