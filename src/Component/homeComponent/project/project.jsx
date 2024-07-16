import React from "react";
import './project.css'
import { Link } from "react-router-dom";
import Projectdata from "../../../data";

function Project() {

    return (
        <>
            <div className="blank"></div>
            <div className="projectpage">
                <div className="tittle"><h2>MY Work</h2></div>
                <div className="projectcontainer">

                    {
                        Projectdata.map((val) => {
                            return (
                                <div className="projectcard" key={val.id}>
                                    <img id="projectimg" src={val.imgsrc} alt="" />
                                    <div className="projecttext">
                                        <h2>{val.name} </h2>
                                        <div className="githublink"><Link to={val.gitlink}><img src="https://www.svgrepo.com/show/341847/github.svg" alt="github" /></Link></div>
                                    </div>
                                </div>
                            )
                        })
                    }

                </div>

            </div>
        </>
    )
}

export default Project