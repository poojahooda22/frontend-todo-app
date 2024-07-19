import { Avatar, Button, Card, TextField, Typography, CardContent } from "@mui/material"
import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom";

const TodoList = () => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const navigate = useNavigate();
    const [todos, setTodos] = useState([]);

    useEffect(() => {
        const getTodos = async () => {
            const response = await fetch('http://localhost:3000/todo/todos', {
                method: 'GET',
               headers: {
                Authorization: `Bearer ${localStorage.getItem("token")}`
               } 
            })
            const data = await response.json();
            setTodos(data);
        }
        getTodos();
    }, [])

    const addTodo = async () => {
        const response = await fetch('http://localhost:3000/todo/todos', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json', 
                "Authorization": `Bearer ${localStorage.getItem("token")}`
            },
            body: JSON.stringify({title, description}) 
        })
        const data = await response.json();
        setTodos([...todos, data]);
    }

    const markDone = async (id) => {
        const response = await fetch(`http://localhost:3000/todo/todos/${id}/done`, {
            method: 'PATCH',
            headers: { 
                Authorization: `Bearer ${localStorage.getItem("token")}`
            },
        })
        const updatedTodo = await response.json();
        setTodos(todos.map((todo) => (todo._id === updatedTodo._id ? updatedTodo : todo)));
    }

    
  return (
    <div>
        <div className="px-[2vw] py-[2vw] flex items-center justify-between">
            <h1 className="text-[1vw] font-semibold">Todo App</h1>
            <div className="flex items-center gap-[1vw]">
                <Button variant="contained" 
                    onClick={() => { 
                        localStorage.removeItem('token');
                        navigate('/signup') 
                    }} 
                >Logout</Button>
                <Avatar src="/broken-image.jpg" />    
            </div>
        </div>
        <div className="flex flex-col items-center justify-center">
            <Card style={{
                padding: '16px',   width: 460, 
                display:"flex", flexDirection: "column", 
                justifyContent: "center",  alignItems: "center",}}
            >
                <TextField style={{width: '360px', height: '50px'}}  
                    label="Title" variant="outlined" size="small" margin="normal" type='text'
                    value={title}
                    onChange={(e) => {setTitle(e.target.value)}}
                />
                <TextField style={{width: '360px', height: '50px'}}  
                    label="description" variant="outlined" size="small" margin="normal" type='text'
                    value={description}
                    onChange={(e) => {setDescription(e.target.value)}} 
                />
                <Button variant="contained" 
                    margin="normal"
                    size="large"
                    style={{ marginTop: '1vw', }}
                    onClick={addTodo}
                >Add</Button>
            </Card>

            <div className="mt-[4vw] flex flex-wrap gap-[2vw]">
                {todos.map((todo) => {
                    return (
                        <Card 
                            key={todo._id}
                            style={{
                            padding: '16px',   width: 360, 
                            display:"flex", justifyContent: 'space-between',
                            alignItems: "center",
                            borderRadius: '16px'
                            }}
                        >
                            <CardContent style={{}}>
                                <Typography gutterBottom variant="h5" 
                                    color="text.primary" 
                                    style={{
                                        fontWeight: 'bold', 
                                        textTransform: 'capitalize'
                                    }}
                                >
                                    {todo.title}
                                </Typography>
                                <Typography 
                                    variant="body" 
                                    style={{
                                        fontSize: '.8vw', 
                                        fontWeight: 'medium',  
                                        display: 'block'}}
                                        >
                                    {todo.description}
                                </Typography>
                            </CardContent>
                            <button
                                onClick={() => markDone(todo._id)}
                                className={`${todo.done ? 'bg-green-500' : 'border-[1px] border-green-500'} text-zinc-800 px-[.5vw] py-[.2vw] rounded-lg`}
                            >{todo.done ? 'Done' : 'Mark as done'}</button>
                        </Card>   
                    )
                })}
            </div> 
           
        </div>
    </div>
  )
}

export default TodoList
