import React from 'react'
import axios from 'axios'

import './chat.css'
export default function Chat() {    

    axios.get("http:/localhost:3000/chat/UserName")
  return (
    <>
      <div className="left-side">
        <h2>Chats</h2>
      </div>
      
      <div className="right-side">

      </div>
    </>
  )
}
