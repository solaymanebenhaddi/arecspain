import React from 'react'
import './mail.css'
function Mail() {
  return (
    <div className='mail'>
      <h1 className="mailTitle">Save time, Save money!</h1>
      <span className="maildesc">Sign up and we'll send the best deal to you</span>
      <div className="mailinputContainer">
          <input type="email" name="mail" id="mailhome" placeholder='Enter Your Email'/>
          <button>Subscribe</button>
      </div>

    </div>
  )
}

export default Mail