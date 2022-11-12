import React from 'react'
import './Contact.css'
import emailjs from '@emailjs/browser';
import {useRef} from 'react'
import { useState } from 'react';
import {themeContext} from '../../Context'
import { useContext } from "react";

function Contact() {
  const theme = useContext (themeContext);
  const darkMode = theme.state.darkMode;
    const form = useRef();
  const [done, setDone] = useState(false)
    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs.sendForm('service_4cglkl6', 'template_q9irvei', form.current, 'YQF-UpLHP18Wqm3G7')
        .then((result) => {
            console.log(result.text);
            setDone(true);
        }, (error) => {
            console.log(error.text);
        });
    };

  return (
     <div className="contact-form">
        <div className="c-left">
            <div className="span">
                <span style={{color: darkMode? 'white':''}}>Get in touch</span>
                <span>Contact me</span>
                <div className="blur s-blur1"
                style={{ background: "#ABF1FF94"}}>
              
                </div>
            </div>
        </div>
        <div className="c-right">
             <form ref={form} onSubmit={sendEmail}>
                <input type="text" name="user_name" className="user" placeholder="Name"/>
                <input type="email" name="user_email" className="user" placeholder="Email"/>
                <textarea name="messege" className="user" placeholder="Messege"/>
                <input type="submit" value="send" className="button"/>
                <span>{done && "Thanks for contactin me!"}</span>
                <div className="blur c-blur" style={{ background: "var(--purple)"}}>

                </div>
             </form>
        </div>
     </div>
  )
}

export default Contact