import React from "react";
import './about.css'
import image from '../images/about.jpg'

function About(){
    return(
        <>
        <div className="aboutpage">
            <div className="blank"></div>
            <div className="tittle">
                <h2>About Me</h2>                
            </div>
            <div className="container">
                    <div className="img">
                        <img src={image} alt="" />
                    </div>
                    <div className="text">
                        <div className="textbox">
                            <h2>I'm  Kumar Kartikay</h2>
                            <p>Self-motivated and hardworking fresher seeking for an opportunity to work in a challenging environment to prove my skills and utilize my knowledge & intelligence in the growth of the organization.</p>
                            <button>Download CV</button>
                        </div>
                    </div>
                </div>
        </div>
        </>
    )
}

export default About