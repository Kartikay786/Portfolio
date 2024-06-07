import React, { useEffect, useRef,useState } from "react";
import './Navbar.css'
import { Link } from "react-router-dom";
import '../responsive.css'


function Navbar(){
 
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const closeMenu = () => {
        setIsMenuOpen(false);
    };

    
    return (
        <>
            <nav >
                <div className="leftelm">
                    <h2>Portfolio</h2>
                </div>
                <div className={`centerelem ${isMenuOpen ? 'active' : ''}`}>
                    <div onClick={closeMenu} className="navelem" ><Link to="/">Home</Link></div>
                    <div onClick={closeMenu}  className="navelem" ><Link to="/About">About</Link></div>
                    <div onClick={closeMenu}  className="navelem" ><Link to="/project">Project</Link></div>
                    <div onClick={closeMenu}  className="navelem"><Link to="/service">Skills</Link></div>
                    <div onClick={closeMenu}  className="navelem" ><Link to="./Contact">Contact</Link></div>
                </div>
                <div className="rightelem">
                    <h2>Hire Me</h2>
                    <div className={`hamburger ${isMenuOpen ? 'cross' : ''}`} onClick={toggleMenu}>
                        <div></div>
                        <div></div>
                        <div></div>
                    </div>
                </div>
            
        </nav>
        </>
      )
}

export default Navbar