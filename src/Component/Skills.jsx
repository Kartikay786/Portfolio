import React from "react";
import './homeComponent/service/service.css'
import { Skilldata, Skilllang } from '../data'

function Skills() {
    return (
        <>
            <div className="skillpage" style={{ minHeight: '220vh', width: '100%', backgroundColor: 'rgb(231, 247, 240)' }}>

                <div className="blank"></div>

                <div className="servicebox" style={{ minHeight: '60vh', width: '100%', padding: '0 5vw 5vw 5vw', display: "flex", flexDirection: 'column', alignItems: "center", justifyContent: 'center' }}>
                    <div className="title" style={{ height: '15vh', marginTop: '2vw', display: 'flex', justifyContent: 'center', alignItems: 'center' }}><h2 style={{ fontSize: '4rem', color: 'rgb(42, 111, 82)', textAlign: 'center' }}>What can I do</h2> </div>
                    <div className="boxcontainer" style={{ height: '34vh', maxWidth: '100%', position: 'relative', display: 'flex', justifyContent: 'center', gap: '2vw' }}>
                        {
                            Skilldata.map((val) => {
                                return (
                                    <div key={val.id} className="box" style={{ minHeight: '40vh', padding: '2vw', overflow: "hidden", display: 'flex', flexDirection: 'column', alignItems: 'center', minWidth: '28vw', backgroundColor: 'rgba(193, 241, 228, 0.6)' }}>
                                        <img src={val.img} alt="" style={{ height: '8vh', borderRadius: '50%', backgroundColor: 'pink', width: '8vh' }} />
                                        <h2 style={{ fontSize: '2rem', margin: '1vw', textAlign: 'center', color: 'rgb(42, 111, 82)' }}>{val.name} </h2>
                                        <p style={{ fontSize: '1.1rem', textAlign: 'center', width: '28vw' }}>{val.about} </p>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>

                <div className="tittle" style={{ height: '15vh', marginTop: '2vw', display: 'flex', justifyContent: 'center', alignItems: 'center' }}><h2 style={{ fontSize: '4rem', color: 'rgb(42, 111, 82)', textAlign: 'center' }}>Skills</h2> </div>
                <div className="skillsection" style={{ height: '80vh', width: '100%', padding: '5vw 10vw', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>

                    {
                        Skilllang.map((skill) => {
                            return (<div key={skill.id} className="langbox" style={{ height: '10vh', minWidth: '80%', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', padding: '0.8vw 2vw' }} >
                                <h2 style={{ color: 'rgb(42, 111, 82)', fontSize: '1.6rem' }} >{skill.skillname}</h2>
                                <input className="range" type="range" disabled min={0} max={100} step={skill.step} />
                            </div>
                            )
                        })
                    }
                </div>
            </div>
        </>
    )
}

export default Skills