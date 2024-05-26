import React from "react";
import Landingpage from "./Component/landingpage/landingpage";
import About from "./Component/about/about"
import Service from "./Component/service/service";
import Project from "./Component/project/project";

function Home(){
    return(
        <>
            <Landingpage/>
            <About/>
            <Service/>
            < Project/>
        </>
    )
}

export default Home