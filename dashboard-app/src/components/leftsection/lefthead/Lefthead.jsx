import React from 'react'
import './Lefthead.css'
import Logo from '../../Images/logo192.png';

function lefthead() {
  return (
    <div className="left-head">
      <div className="content">
        <img id="logo" src={Logo} alt="" />
        <h1>Orizon Academy</h1>
        <p>Learning with Fun</p>
      </div>
      
    </div>
    
  )
}

export default lefthead
