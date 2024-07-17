import { useEffect, useState } from "react"
import Appbar from "./Appbar"
import axios from 'axios'


const LandingPage = () => {

  const [username, setUsername] = useState('');

  useEffect(() => {

    const res = axios.get('http://localhost:3000/auth/me', {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('token')}`
      }
    })
    const data = res.data;
    setUsername(data.username)
  }, [])

  if(username) {
    return (
      <div>Hello{username}</div>
    )
  }

  return (
    <div>
      <Appbar />
    </div>
  )
}

export default LandingPage
