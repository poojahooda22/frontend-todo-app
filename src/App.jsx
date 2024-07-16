
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import LandingPage from './components/landingPage';



function App() {

  return (
    <Router>
      <div className='w-full h-screen bg-zinc-900 text-white'>
      <LandingPage/>

    </div>
    </Router>
    
  )
}
export default App
