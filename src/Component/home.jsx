import React from "react";
import Landingpage from "./homeComponent/landingpage/landingpage";
import About from "./homeComponent/about/about"
import Service from "./homeComponent/service/service";
import Project from "./homeComponent/project/project";

function Home() {
    return (
        <>
            <Landingpage />
            <About />
            <Service />
            <Project />
        </>
    )
}

export default Home