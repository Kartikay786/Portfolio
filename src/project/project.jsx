import React from "react";
import './project.css'
import ProjectCard from './Projectcard.jsx'


function Project(){

    return(
        <>
        <div className="projectpage">
          <div className="tittle"><h2>MY Work</h2></div> 
          <div className="projectcontainer">
            <ProjectCard />
          </div> 
        </div>  
        </>
    )
}

export default Project