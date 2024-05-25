import React from "react";
import './project.css'
import p1image from '../images/cynthia.png'
import p2image from '../images/Portfolio.png'
import p3image from '../images/netflix.png'


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
          </div> 
        </div>  
        </>
    )
}

export default Project