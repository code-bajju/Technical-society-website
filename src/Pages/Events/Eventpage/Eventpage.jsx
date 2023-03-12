import React from 'react'
import './Eventpage.sass'
import { Link, Outlet, Route } from 'react-router-dom'
import { GrSearch } from 'react-icons/gr';
// import FutureEvents from '../../../Subcomponents/CardGrid/futureEvents';
// import PastEvents from '../../../Subcomponents/CardGrid/PastEvents';


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
              <Link to='/eventpage/future'>Upcoming Events</Link>
            </li>
            <li>
              <Link to='/eventpage/past'>Past Events</Link>
            </li>
          </div>
          <div className="E-2-2">
            <li><input type="text" name="Search" id="input" placeholder='Search Event' /></li>
            <li> <GrSearch  /> </li>
          </div>
        </div>
        <div className="E-3">
         <Outlet/>
        </div>
      </div>
    </>
  )
}

export default Eventpage