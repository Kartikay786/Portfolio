import React from "react";
import './Navbar.css'
import { Link } from "react-router-dom";

function Navbar(){
    return (
        <>
            <nav>
                <div className="leftelm">
                    <h2>Portfolio</h2>
                </div>
                <div className="centerelem">
                    <div className="navelem"><Link to="/">home</Link></div>
                    <div className="navelem"><Link to="/About">about</Link></div>
                    <div className="navelem"><Link to="/Project">project</Link></div>
                    <div className="navelem"><Link to="./Contact">service</Link></div>

                    {/* <a href="/">Home</a>
                    <a href="/about">About</a>
                    <a href="/project">Project</a>
                    <a href="/service">Service</a>
                    <a href="/contact">Contact</a> */}
                </div>

                

                <div className="rightelem">
                    <h2>Hire Me</h2>
                </div>
            </nav>
        </>
      )
}

export default Navbar