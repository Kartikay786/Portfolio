import React from "react";
import './about.css'
import image from '../../images/about.jpg'

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
                    <div className="aboutright">
                        <div className="text">
                            <div className="textbox">
                                <h2>I'm  Kumar Kartikay</h2>
                                <p>Self-motivated and hardworking fresher seeking for an opportunity to work in a challenging environment to prove my skills and utilize my knowledge & intelligence in the growth of the organization.</p>
                                <button>Download CV</button>
                            </div>
                        </div>
                        <div  className="sociallink">
                            <img src="https://www.svgrepo.com/show/341847/github.svg" alt="github" />
                            <img src="https://png.pngtree.com/element_our/20190528/ourmid/pngtree-browser-icon-image_1174655.jpg" alt="email" />
                            <img src="https://www.iconpacks.net/icons/1/free-linkedin-icon-112-thumb.png" alt="" />
                            <img src="https://i.pinimg.com/736x/a1/84/0a/a1840a14b487ef2bee618d080221ec13.jpg" alt="" />
                        </div>

                    </div>
                    
            </div>
        </div>
        </>
    )
}

export default About