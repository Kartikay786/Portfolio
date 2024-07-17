import React from "react";
import './Stylesheets/footer.css'

function Footer() {
    return (
        <>
            <div className="staytouch">
                <div className="tittle"><h2>Stay in Touch</h2></div>
                <div className="emailbox">
                    <input type="email" placeholder="Email" />
                    <input id="submit" type="submit" />
                </div>
                <div className="sociallink">
                    <img src="https://www.svgrepo.com/show/341847/github.svg" alt="github" />
                    <img src="https://png.pngtree.com/element_our/20190528/ourmid/pngtree-browser-icon-image_1174655.jpg" alt="email" />
                    <img src="https://www.iconpacks.net/icons/1/free-linkedin-icon-112-thumb.png" alt="" />
                    <img src="https://i.pinimg.com/736x/a1/84/0a/a1840a14b487ef2bee618d080221ec13.jpg" alt="" />
                </div>
            </div>
            <footer>
                <h2>Created by me</h2>
            </footer>
        </>
    )
}

export default Footer