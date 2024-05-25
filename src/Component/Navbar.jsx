import React from "react";
import './Navbar.css'
import { Link ,NavLink} from "react-router-dom";

function Navbar(){
    return (
        <>
            <nav>
                <div className="leftelm">
                    <h2>Portfolio</h2>
                </div>
                <div className="centerelem">
                    {/* <Link to="/">Home</Link>
                    <Link to="/About">About</Link>
                    <Link to="/Project">Projects</Link> */}
                    {/* <Link >Contact</Link> */}
                    <a href="/">Home</a>
                    <a href="/about">About</a>
                    <a href="/project">Project</a>
                    <a href="/service">Service</a>
                </div>
                <div className="rightelem">
                    <h2>Hire Me</h2>
                </div>
            </nav>
        </>
      )
}

export default Navbar