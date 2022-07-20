import React from 'react'
import Head from './Head/Head';
import Headercard from './Headercard/Headercard';
import './Rightsection.css'
import Cardbox from './Cardbox/Cardbox';

function Rightsection() {
  return (
    <div className="right-section">
      <Head/>
      <Headercard/>
      <Cardbox/>
    </div>
  )
}

export default Rightsection;
