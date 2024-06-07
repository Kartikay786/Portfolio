import React from "react";

function Skills(){
    return(
        <>
        <div className="skillpage" style={{minHeight:'220vh',width:'100%' ,backgroundColor:'rgb(231, 247, 240)'}}>
            <div className="blank"></div>
             <div className="title" style={{height:'15vh', marginTop:'2vw',display:'flex',justifyContent:'center',alignItems:'center' }}><h2 style={{fontSize:'4rem',color:'rgb(42, 111, 82)',textAlign:'center'}}>What can I do</h2> </div>
            <div className="servicebox" style={{minHeight:'80vh',width:'100%',padding:'0 5vw 5vw 5vw',display:"flex",flexDirection:'column',alignItems:"center",justifyContent:'center'}}>
                <img src="https://static.jobscan.co/blog/uploads/Skills-for-resume-1.jpg" alt="" style={{height:'370px' ,position:'relative',top:'9vh',maxWidth:'370px',objectFit:'cover',objectPosition:'center',borderRadius:'50%'   }} />
                <div className="boxcontainer" style={{height:'34vh',width:'100%',position:'relative',display:'flex',justifyContent:'center',gap:'2vw'}}>
                <div className="box" style={{minHeight:'34vh' ,display:'flex',flexDirection:'column',alignItems:'center',width:'28vw',backgroundColor:'rgba(193, 241, 228, 0.6)'}}>
                    <img src="https://websitedemos.net/personal-portfolio-02/wp-content/uploads/sites/770/2021/02/computer.png" alt="" style={{height:'8vh',borderRadius:'50%',backgroundColor:'pink',width:'8vh'}}/>
                    <h2 style={{fontSize:'2rem',margin:'1vw',color:'rgb(42, 111, 82)'}}>Web Designing</h2>
                    <p style={{fontSize:'1.1rem',textAlign:'center'}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum, debitis?Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellendus ea esse sint asperiores unde ullam.</p>
                </div>
                <div className="box" style={{minHeight:'34vh',padding:'2vw',display:'flex',flexDirection:'column',alignItems:'center',width:'28vw',backgroundColor:'rgba(193, 241, 228, 0.6)'}}>
                    <img src="https://websitedemos.net/personal-portfolio-02/wp-content/uploads/sites/770/2021/02/settings.png" alt="" style={{height:'8vh',borderRadius:'50%',backgroundColor:'pink',width:'8vh'}}/>
                    <h2 style={{fontSize:'2rem',margin:'1vw',color:'rgb(42, 111, 82)'}}>Web Designing</h2>
                    <p style={{fontSize:'1.1rem',textAlign:'center'}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum, debitis?Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellendus ea esse sint asperiores unde ullam.</p>
                </div>
                </div>
            </div>
            
            <div className="tittle" style={{height:'15vh', marginTop:'2vw',display:'flex',justifyContent:'center',alignItems:'center'}}><h2 style={{fontSize:'4rem',color:'rgb(42, 111, 82)',textAlign:'center'}}>Skills</h2> </div>
            <div className="skillsection" style={{height:'80vh',width:'100%',padding:'5vw 10vw',display:'flex',flexDirection:'column',alignItems:'center'}}>
                <div className="langbox" style={{height:'10vh',width:'70%',display:'flex',flexDirection:'column',justifyContent:'space-between',padding:'0.8vw 2vw'}} >
                    <h2 style={{color:'rgb(42, 111, 82)',fontSize:'1.6rem'}} >HTML</h2>
                    <input className="range" type="range" disabled min={0} max={100} step={80} />
                </div>
                <div className="langbox" style={{height:'10vh',width:'70%',display:'flex',flexDirection:'column',justifyContent:'space-between',padding:'0.8vw 2vw'}} >
                    <h2 style={{color:'rgb(42, 111, 82)',fontSize:'1.6rem'}} >CSS</h2>
                    <input className="range" type="range" disabled min={0} max={100} step={75} />
                </div>
                <div className="langbox" style={{height:'10vh',width:'70%',display:'flex',flexDirection:'column',justifyContent:'space-between',padding:'0.8vw 2vw'}} >
                    <h2 style={{color:'rgb(42, 111, 82)',fontSize:'1.6rem'}} >JAVASCRIPT</h2>
                    <input className="range" type="range" disabled min={0} max={100} step={60} />
                </div>
                <div className="langbox" style={{height:'10vh',width:'70%',display:'flex',flexDirection:'column',justifyContent:'space-between',padding:'0.8vw 2vw'}} >
                    <h2 style={{color:'rgb(42, 111, 82)',fontSize:'1.6rem'}} >C</h2>
                    <input className="range" type="range" disabled min={0} max={100} step={70} />
                </div>
                <div className="langbox" style={{height:'10vh',width:'70%',display:'flex',flexDirection:'column',justifyContent:'space-between',padding:'0.8vw 2vw'}} >
                    <h2 style={{color:'rgb(42, 111, 82)',fontSize:'1.6rem'}} >FIGMA</h2>
                    <input className="range" type="range" disabled min={0} max={100} step={60} />
                </div>
                <div className="langbox" style={{height:'10vh',width:'70%',display:'flex',flexDirection:'column',justifyContent:'space-between',padding:'0.8vw 2vw'}} >
                    <h2 style={{color:'rgb(42, 111, 82)',fontSize:'1.6rem'}} >REACT JS</h2>
                    <input className="range" type="range" disabled min={0} max={100} step={51} />
                </div>
            </div>
        </div>
        </>
    )
}

export default Skills