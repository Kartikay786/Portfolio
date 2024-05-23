import React from 'react'
import './nav.css'

const nav = () => {
  return (
    <>
        <nav>
            <div className="leftelm">
                <h2>Portfolio</h2>
            </div>
            <div className="centerelem">
                <a href="">Home</a>
                <a href="">About</a>
                <a href="">Projects</a>
                <a href="">Contact</a>
            </div>
            <div className="rightelem">
                <h2>Hire Me</h2>
            </div>
        </nav>
    </>
  )
}

export default nav