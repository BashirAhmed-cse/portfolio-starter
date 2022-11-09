import React from 'react'
import './Works.css'
import Upwork from "../../img/Upwork.png"
import Fiverr from "../../img/fiverr.png"
import Facebook from "../../img/Facebook.png"
import Shopify from "../../img/Shopify.png"
import Amazon from "../../img/amazon.png"
const Works = () => {
  return (
   <div className="works">
       {/*left side*/}
       <div className="awesome">
        <span>Works for All these</span>
        <span>Brands & Clients</span>
        <span>
          Lorem Ipsum is simply dummy text of the printing 
          industry.
          <br />
          including versions of Lorem Ipsum.
          <br/>
          including versions of Lorem Ipsum.and typesetting
          <br/>
          Lorem Ipsum is simply dummy text of the printing 
          <br/>
        </span>
      
        <button className="button s-button">Hire me</button>

        <div className="blur s-blurl" style={{ background: "#ABF1FF94" }}></div>
      </div>
      {/* right side*/}
      <div className="w-right">
        <div className="w-mainCircle">
            <div className="w-secCircle">
              <img src={Upwork} alt="" />
            </div>
            <div className="w-secCircle">
              <img src={Fiverr} alt="Fiverr" />
            </div>
            <div className="w-secCircle">
              <img src={Amazon} alt="Amazon" />
            </div>
            <div className="w-secCircle">
              <img src={Shopify} alt="Shopify" />
            </div>
            <div className="w-secCircle">
              <img src={Facebook} alt="Facebook" />
            </div>
        </div>
        <div className="w-backCircle blueCricle"></div>
        <div className="w-backCircle yellowCricle"></div>


      </div>
   </div>
    
  )
}

export default Works