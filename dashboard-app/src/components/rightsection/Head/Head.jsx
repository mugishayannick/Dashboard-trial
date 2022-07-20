import React from 'react'
import './Head.css'
import Search from '../../Images/Search.svg';
import Menu from '../../Images/SearchMenu.svg';
import HeadMessage from '../../Images/HeadMessage.svg';
import Notification from '../../Images/Notification.svg';
import Yannick from '../../Images/yannick.jpg';

function Head() {
  return (
    <div className="RightSide__Head">
        <div className="Head-text">
            <h2>Courses Dashboard</h2>
            <p>Hello Yannick, Welcome back!</p>
        </div>
        <form className="Search-input">
           <img src={Search} alt="" id='Search-icon' /> <input type="text" id='RightHead-Search' placeholder='Seach dashboard' />
           <img src={Menu} alt="" id='Search-menuIcon' />
        </form>
        <div className="Head-icon">
            <img src={HeadMessage} alt="" id='Head__icon-message' />
            <img src={Notification} alt="" id='Head__icon-notification'/> 
            <img id='Profile_Picture' src={Yannick} alt="" />
        </div>
    </div>
  )
}

export default Head