import React from 'react'
import { BsFacebook } from 'react-icons/bs'
import { BsTwitter } from 'react-icons/bs'
import { AiFillInstagram } from 'react-icons/ai'
import { ImLinkedin } from 'react-icons/im'
import { IoLogoWhatsapp } from 'react-icons/io'
import './footer.sass'
import Image from './Flogo.png'


function Footer() {
  return (
    <div className="G-F">
      <div className="G-F-1">
        <img src={Image} alt="gdsc logo" />
      </div>
      <div className="G-F-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium voluptatum, accusamus alias nostrum aspernatur numquam unde, suscipit doloribus voluptatibus adipisci explicabo quae eius aliquam possimus enim eum deserunt necessitatibus officia optio rerum consectetur ducimus! Ratione minus, quaerat mollitia id magnam, inventore corrupti ipsa incidunt omnis itaque aspernatur obcaecati saepe corporis!</div>
      <div className="G-F-3">
        <p>Reach out to us :</p>
        <ol>
          <li><span class="material-symbols-outlined">
            mail
          </span><p> info@gdscmmdu.org </p></li>
          <li>
            <span class="material-symbols-outlined">
              call
            </span>
            <p>+91 9264185207</p>
          </li>
          <li>
            <span class="material-symbols-outlined">
              location_on
            </span>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui, iusto inventore! Error deserunt excepturi rem neque soluta repudiandae ea enim.</p>
          </li>
        </ol>
      </div>
      <div className="G-F-4">
          <p>Follow us on :</p>
          <ol>
            <li> <BsFacebook/> </li>
            <li> <BsTwitter/> </li>
            <li> <AiFillInstagram /> </li>
            <li> <ImLinkedin/> </li>
            <li> <IoLogoWhatsapp /> </li>
          </ol>
      </div>
      <div className="G-F-5">
        <p>Quick Links</p>
        <ul>
          <li>Events</li>
          <li>Certificates</li>
        </ul>
      </div>
    </div>
  )
}

export default Footer