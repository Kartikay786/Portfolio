import React from "react";
import './service.css'
import { Skilldata, Skilllang } from '../../../data'


function Service() {
    return (
        <>
            <div className="blank"></div>
            <div className="servicepage">
                <div className="tittle">
                    <h2>What Services I'm Providing</h2>
                </div>
                <div className="cardcontainer">
                    {
                        Skilldata.map((val) => {
                            return (
                                <div className="card" key={val.id}>
                                    <img src={val.img} alt="" />
                                    <h2>{val.name}</h2>
                                    <div className="text">{val.about} </div>
                                </div>
                            )
                        })
                    }

                </div>
                <div className="language">
                    {
                        Skilllang.map((lang) => {
                            return <img src={lang.image} key={lang.id} />
                        })
                    }
                </div>
            </div>
        </>
    )
}

export default Service