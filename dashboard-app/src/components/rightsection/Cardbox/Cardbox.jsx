import React from 'react'
import './Cardbox.css'
import Yannick from '../../Images/yannick.jpg'
import Card from '../Card/Card'


function Cardbox(){
  return (
    <div className="Course-list">
    <div className="CourseCard">
        <Card
            courseIcon={Yannick}
            level="Beginner"
            courseTitle="Fun with PHP"
            trainerProfilePicture={Yannick}
            trainerName="Yannick Mugisha"
            traineeProfilePicture={Yannick}
        />
           <Card
            courseIcon={Yannick}
            level2="Advanced"
            courseTitle="Python Development"
            trainerProfilePicture={Yannick}
            trainerName="YannickMugisha"
            traineeProfilePicture={Yannick}
        />
           <Card
            courseIcon={Yannick}
            level1="Beginner"
            courseTitle="Figma Workshop"
            trainerProfilePicture={Yannick}
            trainerName="Yannick Mugisha"
            traineeProfilePicture={Yannick}
        />
    </div>

    </div>
  )
}

export default Cardbox
