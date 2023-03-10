import React from 'react'
import { Link } from 'react-router-dom'
import Image from '../../Assets/images/header_logo.png'
import './Header.sass'



function Header() {
  return (
    <div className="G-H">
      <div className="G-H-L">
        <img src={Image} alt="gdsc logo" />
      </div>
      <div className="G-H-N">
          <li> <Link to='/'>Home</Link> </li>
          <li> <Link to='/about' >About</Link> </li>
          <li> <Link to='/eventpage'>Events</Link> </li>
          <li> <Link>Blogs</Link> </li>
          <li> <Link>Contact</Link> </li>
      </div>
    </div>
  )
}

export default Header