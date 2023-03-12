import React from 'react'
import './Card.sass'
import Image from '../../Assets/images/image.jpg'
function FutureEvents() {

  

  return (
      <div className="E-SC-container">
        <div className="E-SC-1">
          <div className="E-SC-1-1">
          <img src={Image} alt="" />
          </div>
          <div className="E-SC-1-2">
           
              <table>
                <tr>
                  <td colspan="2" id="head" >Info Session | Compose Camp</td>
                </tr>
                <tr  >
                  <td colspan="2" id="subhead">Details</td>
                </tr>
                <tr>
                  <td>Date :</td>
                  <td>01-03-2023</td>
                </tr>
                <tr>
                  <td>Time :</td>
                  <td> 1:40pm to 4:00pm </td>
                </tr>
                <tr>
                  <td>Venue : </td>
                  <td>Lab. 176, MMEC, MM(DU)</td>
                </tr>
              </table>
              <button>Register</button>
          </div>
        </div>
      </div>
  )
}

export default FutureEvents