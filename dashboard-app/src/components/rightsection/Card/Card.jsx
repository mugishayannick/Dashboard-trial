import React from "react";
import './Card.css';


function Card(props) {
  return (
    <div className="CourseCard__Container">
      <div className="header">
        <img id="Course-logo" src={props.courseIcon} alt="" />
        <div className="header-text">
          <h3 id="Course-level">{props.level}</h3>
          <h3 id="Course-level-1">{props.level1}</h3>
          <h3 id="Course-level-2">{props.level2}</h3>
          <h2>{props.courseTitle}</h2>
        </div>
      </div>
      <div className="Facilitator-info">
        <p>by</p> <img id="Facilitator_account" src={props.trainerProfilePicture} alt="" /> 
        <h3>{props.trainerName}</h3>
      </div>
        <hr id="Card_line" />
      <div className="Progress">
        <h2>68%</h2> <progress id="Progress-display" value="20" max={50}></progress> <h3>19/26</h3>  
        <img id="Trainee-account" src={props.traineeProfilePicture} alt="" />
      </div>
    </div>
  );
};

export default Card;
