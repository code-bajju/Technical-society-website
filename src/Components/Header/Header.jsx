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
          <li> <Link>Home</Link> </li>
          <li> <Link>About</Link> </li>
          <li> <Link>Events</Link> </li>
          <li> <Link>Blogs</Link> </li>
          <li> <Link>Contact</Link> </li>
      </div>
    </div>
  )
}

export default Header