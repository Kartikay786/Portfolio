import React, { useEffect, useRef } from "react";
import './Navbar.css'
import { Link } from "react-router-dom";
import { gsap } from "gsap/gsap-core";

function Navbar(){
    const navref = useRef(null);

    useEffect(()=>{
            gsap.from(navref.current,{
                 y:100,
                duration:1,
                delay:1,
            });

    },[]);
    return (
        <>
            <nav>
                <div className="leftelm">
                    <h2 ref={navref}>Portfolio</h2>
                </div>
                <div className="centerelem">
                    <div className="navelem"  ref={navref}><Link to="/">Home</Link></div>
                    <div className="navelem" ref={navref}><Link to="/About">About</Link></div>
                    <div className="navelem" ref={navref}><Link to="/project">Project</Link></div>
                    <div className="navelem" ref={navref}><Link to="./service">Services</Link></div>
                    <div className="navelem" ref={navref}><Link to="./Contact">Contact</Link></div>

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