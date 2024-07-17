import { useEffect, useState } from "react"
import Appbar from "./Appbar"
import axios from 'axios'


const LandingPage = () => {

  const [username, setUsername] = useState('');

  useEffect(() => {

   const res = axios.get('')
  }, [])

  return (
    <div>
      <Appbar />
    </div>
  )
}

export default LandingPage
