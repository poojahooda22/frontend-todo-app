import { useState } from "react"
import Appbar from "./Appbar"


const LandingPage = () => {

  const [username, setUsername] = useState('');

  return (
    <div>
      <Appbar />
    </div>
  )
}

export default LandingPage
