import { useEffect, useState } from "react"
import Appbar from "./Appbar"
import axios from 'axios'


const LandingPage = () => {

  const [userEmail, setUserEmail] = useState('');

  useEffect(() => {

    const res = axios.get('http://localhost:3000/auth/me', {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('token')}`
      }
    })
    const data = res.data;
    setUserEmail(data.username)
  }, [])

  if(!userEmail) {
    return (
      <div><h2>{userEmail}</h2></div>
    )
  }

  return (
    <div>
      <Appbar />
    </div>
  )
}

export default LandingPage
