import React from 'react'
import './landingpage.css'
import '../responsive.css'


function Landingpage(){
    return(
        <>
            <div className='landingpg'>
                <div className="blank"></div>
                <div className="p1container">
                    <div className="left">
                        <div className="textcontainer">                           
                            <h4>Hello, I'm</h4>
                            <h1>Kartikay Gupta</h1>
                            <h2>Aspiring Web Devloper</h2>                            
                            <div className="aboutbtn">About Me</div>
                        </div>
                    </div>
                    <div className="right">
                        <img src="https://www.mindmade.in/wp-content/uploads/elementor/thumbs/digital-qlvkx7bp3td8y0h0gexpkzzo66peqjie17u30mmkjs.webp" alt="" />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Landingpage