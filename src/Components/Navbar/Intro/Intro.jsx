import React from "react";
import "./Intro.css";
import Github from "../../../img/github.png";
import LinkedIn from "../../../img/linkedin.png";
import Instagram from "../../../img/instagram.png";
import Vector1 from "../../../img/Vector1.png";
import Vector2 from "../../../img/Vector2.png";
import Boy from "../../../img/boy.png";
import Crown from "../../../img/crown.png";
import glassesimoji from "../../../img/glassesimoji.png";
const Intro = () => {
  return (
    <div className="intro">
      <div className="i-left">
        <div className="i-name">
          <span>Hy! I Am</span>
          <span>Bashir Ahmed</span>
          <span>
            Frontend Developer with high level of experience in web designing
            and development, protecting the Quality work
          </span>
        </div>
        <button className="button i-buton">Hire me</button>
        <div className="i-icons">
          <a href="#">
            <img src={Github} alt="" />
          </a>
          <a href="#">
            <img src={LinkedIn} alt="" />
          </a>
          <a href="#">
            <img src={Instagram} alt="" />
          </a>
        </div>
      </div>
      <div className="i-right">
        <img src={Vector1} alt="" />
        <img className="yellow-img" src={Vector2} alt="" />
        <img className="yellow-boy"  src={Boy} alt="" />
      </div>
      <div>
        <div className='blur' style={{background: "rgb(238 210 255)"}}></div>
        <div className="blur" style={{background: '#C1F5FF', top: '17rem', 
        width:'21rem', height: '11rem', left: '-9rem'}}></div>
      </div>
    </div>
  );
};

export default Intro;
