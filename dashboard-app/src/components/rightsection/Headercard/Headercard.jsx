import React from 'react'
import './Headercard.css'
import Yannick from '../../Images/yannick.jpg'

function Headercard() {
  return (
    <div className="card-header">
        <div className="up-header">
            <h1>Your courses</h1>
            <button className='button'>PREMIUM</button>
        </div>

        <div className="down-header">
            <img className="profile-pic" src={Yannick} alt="" />
            <p>26 Courses</p>

        </div>
      
    </div>
  )
}

export default Headercard
