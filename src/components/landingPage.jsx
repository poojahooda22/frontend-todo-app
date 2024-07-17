import { useEffect, useState } from "react"
import Appbar from "./Appbar"
import axios from 'axios'


const LandingPage = () => {

  const [username, setUsername] = useState('');

  useEffect(() => {

    const init() = async() => {
      const res = await axios.get('http://localhost:3000/auth/me', {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`
        }
      })
      let data = res.data;
      setUsername(data.username)
    }
    
    init();
  }, [])

  return (
    <div>
      <Appbar />
    </div>
  )
}

export default LandingPage
