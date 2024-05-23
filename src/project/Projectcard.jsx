import React from "react";
import './project.css'
import p1image from '../assets/cynthia.png'
import p2image from '../assets/Portfolio.png'
import p3image from '../assets/netflix.png'

function ProjectCard(){
   
    return(
        <>
        <div className="projectcard">           
           <img src={p1image} alt="" />
            <div className="projecttext">
                <h2>Netflix Clone</h2>
            </div>
           
        </div>
        <div className="projectcard">           
           <img src={p2image} alt="" />
            <div className="projecttext">
                <h2>Netflix Clone</h2>
            </div>
           
        </div>
        <div className="projectcard">           
           <img src={p3image} alt="" />
            <div className="projecttext">
                <h2>Netflix Clone</h2>
            </div>
           
        </div>
        </>
    )
}

export default ProjectCard