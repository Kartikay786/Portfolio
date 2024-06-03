import React, { useEffect, useRef,useState } from "react";
import './Navbar.css'
import { Link } from "react-router-dom";
import '../responsive.css'
import Hamburger from 'hamburger-react'

function Navbar(){

    const [menuview,setMenuview] = useState(false);

    
    return (
        <>
            <nav>
                <div className="leftelm">
                    <h2>Portfolio</h2>
                </div>
                <div className="centerelem">
                    <div className="navelem" ><Link to="/">Home</Link></div>
                    <div className="navelem"><Link to="/About">About</Link></div>
                    <div className="navelem"><Link to="/project">Project</Link></div>
                    <div className="navelem"><Link to="./service">Services</Link></div>
                    <div className="navelem"><Link to="./Contact">Contact</Link></div>                
                </div> 

                <div className="rightelem">
                    <div className="hamburger" onClick={() => setMenuview(!menuview)}>
                       <Hamburger/>
                    </div>
                    <h2>Hire Me</h2>
                </div>
                
            </nav>
            <div className= {menuview ? "menu" :  "menu "}>
                <div className="centerelem">
                    <div className="navelem" ><Link to="/">Home</Link></div>
                    <div className="navelem" ><Link to="/About">About</Link></div>
                    <div className="navelem" ><Link to="/project">Project</Link></div>
                    <div className="navelem"><Link to="./service">Services</Link></div>
                    <div className="navelem" ><Link to="./Contact">Contact</Link></div>

                </div>
            </div>
        </>
      )
}

export default Navbar