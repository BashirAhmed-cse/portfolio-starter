import React from 'react'
import './Works.css'
const Works = () => {
  return (
   <div className="works">
       {/*left side*/}
       <div className="awesome">
        <span>Works for All these</span>
        <span>Brands & Clients</span>
        <span>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry.
          <br />
          including versions of Lorem Ipsum.
        </span>
      
        <button className="button s-button">Download CV</button>

        <div className="blur s-blurl" style={{ background: "#ABF1FF94" }}></div>
      </div>
   </div>
    
  )
}

export default Works