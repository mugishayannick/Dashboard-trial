import React from 'react'
import './Leftfooter.css'

function Leftfooter(props) {
  return (
    <div className='Left__Footer'>
      <button type='button' className="trainercard">
        <img id='footer_profile' src={props.profile} alt=""/>
        <div className="footer__content">
          <h3 id='footer_Name'>{props.name}</h3>
          <p id='footer_position'>{props.content}</p>
        </div>

      </button>
       

    </div>
  )
}

export default Leftfooter

