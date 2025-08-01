import './NavBar.css';

function NavBar()
{
    return(
        <div className="navContainer">
           <span>Port</span><p>folio</p>
           <ul className="navMenu">
            <li><a href="#hero">Home</a></li>
            <li><a href="#about">About Me</a></li>
            <li><a href="#skills">Skills</a></li>
            <li><a href="#project">Projects</a></li>
            <li><a href="#contact">Contact</a></li>
           </ul>
           <div className="navButton"> <a href="https://www.linkedin.com/in/nitish-choudhary-373a78214/"><button>Connect with me</button></a></div>
        </div>
    );
}
export default NavBar;