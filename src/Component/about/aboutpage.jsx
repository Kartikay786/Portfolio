import React from "react";
import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import {ScrollTrigger} from "gsap/ScrollTrigger";
import image1 from '../../images/aabout3.jpg'
import image2 from '../../images/about.jpg'
import image3 from '../../images/about2.jpg'


gsap.registerPlugin(useGSAP);
gsap.registerPlugin(ScrollTrigger);

function Aboutpage(){

  const aboutpage = useRef();

  useGSAP(()=>{
      gsap.from("li",{
            x:600,
            opacity:0,
            duration:1,
            delay:0.3,
            stagger:1.5,
      })
      gsap.to(".right .img",{
        scale:0,
        opacity:0,
        duration:1,
        delay:0.3,
        stagger:1.5,
        // scrollTrigger:{
        //   trigger:".container",
        //   scrub:1,
        //   pin:true,
        //   start:'top 0'
        // },
      })

  },{scope:aboutpage})


  return(
    <>
     <div className="aboutpage" ref={aboutpage}  style={{minHeight:'100vh',width:'100%',backgroundColor:'rgb(231, 247, 240)'}}>                
                <div className="blank"></div>
                <div className="title" style={{height:'15vh',position:'relative',display:'flex',justifyContent:'center',alignItems:'center'}}><h2 style={{fontSize:'4rem',color:'rgb(42, 111, 82)',textAlign:'center'}}>Who am I</h2> </div>
                <div className="container" style={{minHeight:'80vh',width:'100%',display:"flex",position:'relative' }}>
                    <div className="right" style={{height:'85vh' ,width:'40%',}}>
                        <div className="imgbox" style={{height:'80vh' ,display:"flex",justifyContent:'center',alignItems:"center"}}>
                          <img className="img" src={image1} alt=""  style={{height:'50vh',position:'absolute',zIndex:'9',width:'25vw',backgroundColor:'red',objectFit:"cover",objectPosition:'center',borderRadius:'25px'}} />
                          <img className="img" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQdye7L3ilAu-zsPozLZcZeE9PEg9WLBka4hg&s" alt=""  style={{height:'50vh',width:'25vw',backgroundColor:'red',objectFit:"cover",objectPosition:'center',borderRadius:'25px' ,zIndex:'8', position:'absolute'}} />
                          <img className="img" src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZmVtYWxlJTIwcG9ydHJhaXR8ZW58MHx8MHx8fDA%3D" alt=""  style={{height:'50vh',width:'25vw',backgroundColor:'red',objectFit:"cover",objectPosition:'center',borderRadius:'25px' ,zIndex:'7', position:'absolute'}} />
                          <img className="img" src="https://upload.wikimedia.org/wikipedia/commons/1/1e/Outdoors-man-portrait.jpg" alt=""  style={{height:'50vh',width:'25vw',backgroundColor:'red',objectFit:"cover",objectPosition:'center',borderRadius:'25px' ,zIndex:'6', position:'absolute'}} />
                          <img className="img" src="https://images.unsplash.com/photo-1595152452543-e5fc28ebc2b8?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bWVuJTIwcG9ydHJhaXR8ZW58MHx8MHx8fDA%3D" alt=""  style={{height:'50vh',width:'25vw',backgroundColor:'red',objectFit:"cover",objectPosition:'center',borderRadius:'25px' ,zIndex:'5', position:'absolute'}} />
                          <img src="https://expertphotography.b-cdn.net/wp-content/uploads/2019/04/female-face-girl-with-wind-in-hair.jpg" alt=""  style={{height:'50vh',width:'25vw',backgroundColor:'red',objectFit:"cover",objectPosition:'center',borderRadius:'25px' ,zIndex:'4', position:'absolute'}} />
                        </div> 
                    </div>         

                    <div className="left" style={{minHeight:'80vh', width:'70%',padding:'2vw 5vw 5vw 8vw',position:'relative',left:'0%'}}>
                        <ul>
                            <li  style={{marginTop:'1vw' , fontSize:'1.2rem',  color:'rgb(42, 111, 82)'}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione veritatis modi fugit velit dicta ducimus recusandae soluta, quos quis! Temporibus, odit? Nostrum asperiores nihil reiciendis eaque perspiciatis temporibus voluptatum quam?</li>
                            <li className=".li1" style={{marginTop:'2vw' , fontSize:'1.2rem' , color:'rgb(42, 111, 82)'}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione veritatis  ducimus recusandae soluta, quos quis! Temporibus, odit? Nostrum asperiores nihil reiciendis eaque perspiciatis temporibus voluptatum quam?</li>
                            <li className=".li1" style={{marginTop:'2vw' , fontSize:'1.2rem' , color:'rgb(42, 111, 82)'}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione veritatis modi fugit velit dicta ducimus recusandae soluta, quos quis! Temporibus, odit? Nostrum asperiores nihil reiciendis eaque perspiciatis temporibus voluptatum quam?</li>
                            <li className=".li1" style={{marginTop:'2vw' , fontSize:'1.2rem' , color:'rgb(42, 111, 82)'}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione veritatis modi fugit velit dicta ducimus recusandae soluta, quos quis! Temporibus, odit? Nostrum asperiores nihil reiciendis eaque perspiciatis temporibus voluptatum quam?</li>
                            <li className=".li1" style={{marginTop:'2vw' , fontSize:'1.2rem' , color:'rgb(42, 111, 82)'}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione veritatis modi fugit velit dicta ducimus recusandae soluta, quos quis! Temporibus, odit? Nostrum asperiores nihil reiciendis eaque perspiciatis temporibus voluptatum quam?</li>
                        </ul>
                    </div>
                </div>
      </div>

    </>
  )
}

export default Aboutpage