import React from "react";
import './service.css'
import '../responsive.css'


function  Service(){
    return(
        <>
        <div className="blank"></div>
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
            <div className="language">
                <img src="https://e7.pngegg.com/pngimages/5/56/png-clipart-website-development-html5-logo-world-wide-web-consortium-world-wide-web-angle-web-design.png" alt="" />
                <img src="https://w7.pngwing.com/pngs/224/77/png-transparent-website-web-internet-css-style-css3-technology-social-media-logos-i-flat-colorful-icon-thumbnail.png" alt="" />
                <img src="https://seeklogo.com/images/J/javascript-logo-8892AEFCAC-seeklogo.com.png" alt="" />
                <img src="https://upload.wikimedia.org/wikipedia/commons/1/19/C_Logo.png" alt="" />
                <img src="https://w7.pngwing.com/pngs/452/495/png-transparent-react-javascript-angularjs-ionic-github-text-logo-symmetry-thumbnail.png" alt="" />
                <img src="https://i.pinimg.com/736x/a5/58/b4/a558b426cb8973523f37bbed94cf0f09.jpg" alt="" />
                <img src="https://cdn-images.himalayas.app/9w3a704t88nxt617os94xdamvz15" alt="" />
            </div>
        </div>
        </>
    )
}

export default Service