import React from "react";
import "./Services.css";
import "../Cards/Card";
import HeartEmoji from "../../img/heartemoji.png";
import Glasses from "../../img/glasses.png";
import Humble from "../../img/humble.png";
import Card from "../Cards/Card";
import Resume from '../../img/CV_Bashir_Ahmed.pdf'
import {themeContext} from '../../Context'
import { useContext } from "react";

const Services = () => {

  const theme = useContext (themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div className="services" id="Services">
      {/*left side*/}
      <div className="awesome">
        <span style={{color: darkMode? 'white':''}}>My Awesome</span>
        <span>Servicess</span>
        <span style={{color: darkMode? 'white':''}}>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry.
          <br />
          including versions of Lorem Ipsum.
        </span>
        <a href={Resume} download>
        <button className="button s-button">Download CV</button>
        </a>
        
        <div className="blur s-blurl" style={{ background: "#ABF1FF94" }}></div>
      </div>
      {/*right side*/}
      <div className="cards">
        {/*first card*/}
      <div style={{left: '14rem'}}>
        <Card
          emoji={HeartEmoji}
          heading={'Design'}
          detail={"Figma, Sketch, Photoshop, Adobe xd"}
        />
      </div>
      {/*secound card*/}
      <div style={{top: "12rem", left: "-4rem"}}>
        <Card
        emoji={Glasses}
        heading={"Developer"}
        detail={"Html, Css, Javascript, React"}
        />
      </div>
       {/*3rd card*/}
       <div style={{top: "19rem", left: "12rem"}}>
        <Card
        emoji={Humble}
        heading={"UI/UX"}
        detail={"Lorem Ipsum is simply dummy text of the printing and typesetting"}
        />
       </div>
       <div className="blur s-blur2" style={{background: "var(--purple)"}}></div>
      </div>
    </div>
  );
};

export default Services;
