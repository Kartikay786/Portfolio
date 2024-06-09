import React from "react";
import './project.css'
import p1image from '../../images/cynthia.png'
import p2image from '../../images/Portfolio.png'
import p3image from '../../images/netflix.png'
import '../responsive.css'
import { Link } from "react-router-dom";


function Project(){

    return(
        <>
        <div className="blank"></div>
        <div className="projectpage">
          <div className="tittle"><h2>MY Work</h2></div> 
          <div className="projectcontainer">

                <div className="projectcard">           
                        <img src={p1image} alt="" />
                        <div className="projecttext">
                            <h2>Clone of Cynthia</h2>
                            <div className="githublink"><Link to="https://github.com/Kartikay786/Clone-of-Cynthia-Website.git"><img src="https://www.svgrepo.com/show/341847/github.svg" alt="github" /></Link></div>
                        </div>
                </div>  

                <div className="projectcard">           
                        <img src={p2image} alt="" />
                        <div className="projecttext">
                            <h2>Portfolio</h2>
                            <div className="githublink"><Link><img src="https://www.svgrepo.com/show/341847/github.svg" alt="github" /></Link></div>
                        </div>          
                </div>

                <div className="projectcard">           
                        <img src={p3image} alt="" />
                        <div className="projecttext">
                            <h2>Netflix Clone</h2>
                            <div className="githublink"><Link><img src="https://www.svgrepo.com/show/341847/github.svg" alt="github" /></Link></div>
                        </div>    
                </div>
          </div> 

        </div>  
        </>
    )
}

export default Project