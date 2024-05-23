import React from "react";
import './service.css'

function Service(){
    return(
        <>
        <div className="servicepage">
            <div className="tittle">
                <h2>What Services I'm Providing</h2>
            </div>
            <div className="cardcontainer">
                <div className="card">
                    <img src="https://websitedemos.net/personal-portfolio-02/wp-content/uploads/sites/770/2021/02/computer.png" alt="" />
                    <h2>UI/UX Design</h2>
                    <div className="text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</div>    
                </div>
                <div className="card"> 
                    <img src="https://websitedemos.net/personal-portfolio-02/wp-content/uploads/sites/770/2021/02/settings.png" alt="" />
                    <h2>Web Devlopment</h2>
                    <div className="text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus  Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus</div>    
                </div>
            </div>
        </div>
        </>
    )
}

export default Service