import { Avatar, Button, Card, TextField } from "@mui/material"
import { useState } from "react"
import { useNavigate } from "react-router-dom";

const TodoList = () => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const navigate = useNavigate();
    const [todos, setTodos] = useState([]);

    
  return (
    <div>
        <div className="px-[2vw] py-[2vw] flex items-center justify-between">
            <h1 className="text-[1vw] font-semibold">Todo App</h1>
            <div className="flex items-center gap-[1vw]">
                <Button variant="contained" onClick={() => { navigate('/login') }} >Logout</Button>
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
