import React, { useState } from "react";
import tour from "../../assets/tour.jpg";
import todo from "../../assets/todo.jpg";
import weather from "../../assets/weather.jpg";
import dataVis from "../../assets/datavis.jpg";
import game from "../../assets/game.jpg";
import portfolio from "../../assets/portfolio.jpg";
import "./project.css";

function Project() {
    return (

        <div id="project">
            <center><h1>Projects</h1></center>
            <div className="projectContainer">
                <div className="projectCard">
                    <img src={tour} alt="Tour Travel" />
                    <h3>Tour & Travel</h3>
                    <p>A full-stack web application that allows users to explore, book, and manage tour packages online.
                        The system features a user-friendly interface on the frontend (React)
                        and a robust backend (Node.js + Express), with MongoDB as the database.
                    </p>
                    <p className="para">Key Features</p>
                    <ul>
                        <li><p className="para">User authentication using JWT</p></li>
                        <li><p className="para">Secure payment integration</p></li>
                        <li><p className="para">Responsive layout with clean, user-friendly interface</p></li>
                        <li><p className="para">RESTful APIs for seamless frontend-backend interaction</p></li>
                    </ul>
                    <div className="projectBtn">
                        <a href="#project"><button className="btn">Live Demo </button></a>
                        <a href="#project"><button className="btn">GitHub</button></a>
                    </div>
                </div>
                <div className="projectCard">
                    <img src={todo} alt="Todo List" />
                    <h3>Todo List</h3>
                    <p>A simple and interactive task management application built using React.
                        It allows users to efficiently add, view, and delete tasks in real-time.
                        Designed with a modern dark theme and enhanced with smooth UI animations
                        for a visually appealing experience.</p>
                    <p className="para">Key Features</p>
                    <ul>
                        <li><p className="para">Add tasks instantly with button click or pressing Enter</p></li>
                        <li><p className="para">Delete tasks with a single click</p></li>
                        <li><p className="para">Responsive layout with clean, user-friendly interface</p></li>
                        <li><p className="para">Dark theme with subtle animations for a pleasant UX</p></li>
                        <li><p className="para">Built using React functional components and useState hook</p></li>
                    </ul>
                    <div className="projectBtn">
                        <a href="#project"><button className="btn">Live Demo </button></a>
                        <a href="https://github.com/Escuuuu/todoList"><button className="btn">GitHub</button></a>
                    </div>

                </div>
                <div className="projectCard">
                    <img src={weather} alt="Weather API" />
                    <h3>Weather API App</h3>
                    <p>A responsive web application that provides real-time weather updates for any city worldwide using the OpenWeatherMap API.
                        Built using HTML, CSS, and Vanilla JavaScript, this app showcases the integration of third-party APIs and dynamic content
                        rendering without any frontend framework.</p>
                    <p className="para">Key Features</p>
                    <ul>
                        <li><p className="para">Search for current weather by city name</p></li>
                        <li><p className="para">Fetches live data </p></li>
                        <li><p className="para">Displays appropriate weather icons based on conditions</p></li>
                        <li><p className="para">Error handling for invalid city names or failed API requests</p></li>

                    </ul>
                    <div className="projectBtn">
                        <a href="#project"><button className="btn">Live Demo </button></a>
                        <a href="https://github.com/Escuuuu/weatherApp"><button className="btn">GitHub</button></a>
                    </div>
                </div>
                <div className="projectCard">
                    <img src={dataVis} alt="Tableau Project" />
                    <h3>Data Visualization</h3>
                    <p>An interactive Tableau dashboard developed to explore and visualize data from Netflix,
                        providing key insights into the platform’s content library, viewing trends, and user behavior.</p>
                    <p className="para">Key Features</p>
                    <ul>
                        <li><p className="para">Visual breakdown of content by genre, release year, rating, and country of origin</p></li>
                        <li><p className="para">Analysis of content trends over time (e.g., movies vs. TV shows)</p></li>
                        <li><p className="para">Interactive filters for dynamic exploration of data</p></li>
                        <li><p className="para">Insight into the most prolific actors, popular content categories, and content duration</p></li>

                    </ul>
                    <div className="projectBtn">
                        <a href="#project"><button className="btn">Live Demo </button></a>
                        <a href="https://github.com/Escuuuu/Projects"><button className="btn">GitHub</button></a>
                    </div>
                </div>
                <div className="projectCard">
                    <img src={game} alt="Adv Game" />
                    <h3>Adventure Game(developing phase)</h3>
                    <p>A beginner-friendly 2D adventure game built using core Java and Swing, currently in early development.</p>
                    <p className="para">Key Features</p>
                    <ul>
                        <li><p className="para"> Implemented character movement using keyboard input</p></li>
                        <li><p className="para">Basic tile-based map layout</p></li>
                    </ul>
                    <div className="projectBtn">
                        <a href="#project"><button className="btn">Live Demo </button></a>
                        <a href="#project"><button className="btn">GitHub</button></a>
                    </div>
                </div>
                <div className="projectCard">
                    <img src={portfolio} alt="PortFolio" />
                    <h3>My Portfolio</h3>
                    <p>A fully responsive personal portfolio built using React.js. It highlights my skills, showcases my projects,
                        and provides a smooth user experience with animated transitions and a modern dark UI.</p>
                    <p className="para">Key Features</p>
                    <ul>
                        <li><p className="para">About Me section with personal introduction</p></li>
                        <li><p className="para">Skills section displaying tech. and tools I use with icons</p></li>
                        <li><p className="para">Showcasing my project work</p></li>
                        <li><p className="para">Contact section with direct links to email, LinkedIn and phone</p></li>

                    </ul>
                    <div className="projectBtn">
                        <a href="#project"><button className="btn">Live Demo </button></a>
                        <a href="https://github.com/Escuuuu/myPortfolio"><button className="btn">GitHub</button></a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Project;
