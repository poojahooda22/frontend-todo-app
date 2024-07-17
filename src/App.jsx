
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import LandingPage from './components/landingPage';
import Signup from './components/signup';



function App() {

  return (
    <Router>
      <div className='w-full h-screen bg-zinc-900 text-white'>
      <Routes>
        <Route path='/' element={<LandingPage />}/>
        <Route path='/signup' element={<Signup/>} />
        <Route path='/login' element={<Login }
      </Routes>
    </div>
    </Router>
    
  )
}
export default App
