import './about.css'
import React from 'react';
import boxImg1 from "../../assets/boxImg1.jpg";
import boxImg2 from "../../assets/boxImg2.jpg";
import boxImg3 from "../../assets/boxImg3.jpg";


function About() {
    return (
        <div id="about">
            <center><h1>About Me</h1></center>
            <div className='aboutContainer'>

                <div className='left'>
                   <center><h3>Meet the Developer</h3></center> 
                    <p>I am a passionate and dedicated MCA graduate from Chandigarh University with a strong
                        foundation in full-stack development. As a fresher,I’ve built multiple projects that
                        demonstrate my ability to create clean, user-friendly, and functional web applications.
                    </p>
                    <p>I thrive on solving complex problems and transforming ideas into elegant, efficient solutions.
                        I am always eager to learn and constantly explore new technologies and best practices to stay
                        ahead in theever-evolving world of web development.
                    </p>
                </div>
                <div className='right'>
                    <div className='rightTop'>
                        <div className='boxImages'>
                            <img src={boxImg1} alt="icon" />
                        </div>
                        <div className='textContent'>
                            <h4>Frontend Development</h4>
                            <p>Building interactive, responsive user interfaces with HTML, CSS, JavaScript,
                                and React. Familiar with UI/UX principles and component-based architecture.
                            </p>
                        </div>
                    </div>

                    <div className='rightTop'>
                        <div className='boxImages'>
                            <img src={boxImg2} alt="icon" />
                        </div>
                        <div className='textContent'>
                            <h4> Backend & API Integration</h4>
                            <p>Experience in developing RESTful APIs using Node.js and Express.
                                Able to connect frontend with backend services and manage data through MongoDB.</p>
                        </div>
                    </div>

                    <div className='rightTop'>
                        <div className='boxImages'>
                            <img src={boxImg3} alt="icon" />
                        </div>
                        <div className='textContent'>
                            <h4>Software Development</h4>
                            <p>Building robust and scalable software solutions using SDLC principles</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default About;