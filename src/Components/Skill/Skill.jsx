import React from "react";
import './skill.css';
import javaImg from "../../assets/java.jpg";
import cPlus from "../../assets/c++.jpg";
import ht from "../../assets/html.jpg";
import css from "../../assets/css.jpg";
import pstmn from "../../assets/postman.jpg";
import mongo from "../../assets/mongo.jpg";
import js from "../../assets/javascript.jpg";
import sql from "../../assets/mysql.jpg";
import node from "../../assets/node.jpg";
import reactt from "../../assets/react.jpg";
import exp from "../../assets/exp.jpg";
import tab from "../../assets/tab.jpg";
import boxImg1 from "../../assets/boxImg1.jpg";

function Skill()
{
    return(
    <div id="skills">
    <center><h1>Skills</h1></center>
    <div className="skillContainer">
        <div className="skillLangBase">
            <h2>Languages</h2><hr/>
            <ul className="skillList">
                <li><img src={javaImg} alt="img" /> <span>Java</span></li>
                <li><img src={cPlus} alt="img" /> <span>C++</span></li>
                <li><img src={ht} alt="img" /> <span>HTML</span></li>
                <li><img src={css} alt="img" /> <span>Css</span></li>
                <li><img src={js} alt="img" /> <span>Javascript</span></li>
                <li><img src={node} alt="img" /> <span>Nodejs</span></li>
                <li><img src={reactt} alt="img" /> <span>React.js</span></li>
            </ul>
        </div>    
        <div className="skillFramework">
            <h2>FrameWorks</h2><hr/>
            <ul className="skillList">
                <li><img src={exp} alt="img" /> <span>Express.js</span></li>
                <li><img src={boxImg1} alt="img" /> <span>Java Collection framework</span></li>
            </ul>
        </div>
        <div className="skillDatabase">
            <h2>DataBases</h2><hr/>
            <ul className="skillList">
                <li><img src={mongo} alt="img" /> <span>MongoDB</span></li>
                <li><img src={sql} alt="img" /> <span>MySQL</span></li>
            </ul>
        </div> 
        <div className="skillTools">
            <h2>Tools</h2><hr/>
            <ul className="skillList">
                <li><img src={pstmn} alt="img" /> <span>Postman</span></li>
                <li><img src={tab} alt="img" /> <span>Tableau</span></li>
            </ul>
        </div>
       
    </div>
    </div>);
}
export default Skill;