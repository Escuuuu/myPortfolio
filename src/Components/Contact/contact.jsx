import React from "react";
import "./contact.css"
import link from "../../assets/link.jpg";
import mail from "../../assets/mail.jpg";
import phn from "../../assets/call.jpg";
function Contact() {

    return (
        <div id="contact">
            <div className="ContactContainer">
                <center><h1>Contact Me</h1></center>
                <ul>
                    <li><img src={phn} alt="PhoneNumber" /> <span>+91 6284450917</span></li>
                    <li><img src={mail} alt="mail" /> <span>nitishchoudhary0917@gmail.com</span></li>
                    <li><img src={link} alt="linkedIn" /> <span><a href="https://www.linkedin.com/in/nitish-choudhary-373a78214/">Click on me to open my LinkedIn Profile</a></span></li>
                </ul>
            </div>
        </div>
    );
}
export default Contact;