import React from 'react'
import './Eventpage.sass'
import { Link } from 'react-router-dom'
import { GrSearch } from 'react-icons/gr';
import CardRenderer from '../../../Subcomponents/CardGrid/CardRenderer';


function Eventpage() {
  return (
   <>
    <div className="E-container">
      <div className="E-1">
        <h1>Events</h1>
      </div>
      <div className="E-2">
        <div className="E-2-1">
        <li>
          <Link to='/future'>Upcoming Events</Link>
        </li>
        <li>
          <Link to='/past' >Past Events</Link>
        </li>
        </div>
        <div className="E-2-2">
          <li><input type="text" name="Search" id=""  placeholder='Search Event'/></li>
          <li> <GrSearch /> </li>
        </div>
      </div>
    </div>
    <CardRenderer/></>
  )
}

export default Eventpage