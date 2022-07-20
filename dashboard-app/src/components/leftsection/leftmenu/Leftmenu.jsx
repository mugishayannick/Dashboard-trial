import React from 'react'
import './Leftmenu.css'
import MyCourses from '../../Images/Mycourses.svg';
import Bookmark from '../../Images/Bookmark.svg';
import TrendingCourses from '../../Images/Trending.svg';
import Articles from '../../Images/Article.svg';
import CompletedCourses from '../../Images/Completecourse.svg';

function Leftmenu() {
  return (
    <div className="left-menu">
      <ul>
        <li>
          <img src={MyCourses} alt="" />
          <h5>My Courses</h5>
        </li>
        <li>
          <img src={Bookmark} alt="" />
          <h5>Bookmark</h5>
        </li>
        <li>
          <img src={TrendingCourses} alt="" />
          <h5>Trending Courses</h5>
        </li>
        <li>
          <img src={Articles} alt="" />
          <h5>Help Articles<button class="btn">6</button></h5>
        </li>
        <li>
          <img src={CompletedCourses} alt="" />
          <h5>Completed Coursed</h5>
        </li>
      </ul>
    </div>
  )
}

export default Leftmenu
