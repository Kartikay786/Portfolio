import React from 'react'
import './landingpage.css'


function Landingpage(){
    return(
        <>
            <div className="blank"></div>
            <div className='landingpg'>
            
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
                        <img src="https://portfolio-sarthak.vercel.app/assets/imgs/man1.png" alt="" />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Landingpage