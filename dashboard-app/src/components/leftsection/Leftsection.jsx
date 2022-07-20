import React from 'react'
import './Leftsection.css'
import Lefthead from './lefthead/Lefthead'
import Leftmenu from './leftmenu/Leftmenu'
import Trainercard from './Trainercard/TrainerCard'

function Leftsection() {
  return (

        <aside className="aside-section">
          <Lefthead />
          
          <Leftmenu/>

          <Trainercard/>

        
        </aside>
      

  )
}

export default Leftsection
