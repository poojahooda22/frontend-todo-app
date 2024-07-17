import { useEffect, useState } from "react"
import Appbar from "./Appbar"
import axios from 'axios'


const LandingPage = () => {

  

  useEffect(() => {

    const res = axios.get('http://localhost:3000/auth/me', {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('token')}`
      }
    })
    const data = res.data;
    console.log(data)
  }, [])

  

  return (
    <div>
      <Appbar />
    </div>
  )
}

export default LandingPage
