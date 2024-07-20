
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Signup from './components/signup';
import Login from './components/login';
import TodoList from './components/TodoList';

function App() {

  return (
    <Router>
      <div className='w-full h-screen bg-zinc-900 text-white'>
      <Routes>
        <Route path='/' element={<Login />}/>
        <Route path='/signup' element={<Signup/>} />
        <Route path='/login' element={<Login />} />
        <Route path='/todos' element={<TodoList />} />
      </Routes>
    </div>
    </Router>
    
  )
}
export default App
