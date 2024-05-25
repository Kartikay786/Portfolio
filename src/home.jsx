import React from "react";
import Landingpage from "./Component/landingpage";
import About from "./Component/about"
import Service from "./Component/service";

function Home(){
    return(
        <>
            <Landingpage/>
            <About/>
            <Service/>
           
        </>
    )
}

export default Home