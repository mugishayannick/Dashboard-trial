import React from 'react'
import Leftfooter from '../leftfooter/Leftfooter';
import './TrainerCard.css';
import Yannick from '../../Images/yannick.jpg';

function TrainerCard() {
  return (
    <div className='Trainer__card'>
        <div className="Left__Footer-head"><h2>My Tutors</h2><button id="Footer_button" >13</button></div>
        <Leftfooter 
            profile={Yannick} 
            name="Yannick Mugisha" 
            content="PHP Developer"/>

          <Leftfooter 
              profile={Yannick} 
              name="Yannick" 
              content="Python Developer"/>

          <Leftfooter 
              profile={Yannick} 
              name="Ngabo Kevin"
              content="UI Designer"/>
    </div>
  )
}

export default TrainerCard