import React from "react";
import Navbar from "./Component/navbar/Navbar";
import { BrowserRouter as Router , Routes,Route } from "react-router-dom"
import Home from "./home";

import About from "./Component/about/about";
import Project from './Component/project/project'
import Contact from "./Component/contact/contact";
import Footer from "./Component/footer/footer";
import Aboutpage from "./Component/about/aboutpage";
import Skills from "./Component/service/Skills";


function Layout(){

    return(
    <Router>
        <Navbar/>
        
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="about" element={<Aboutpage/>}/>
            <Route path="/service" element={<Skills/>}/>
            <Route path="/project" element={<Project/>}/>
            <Route path="/contact" element={<Contact/>}/>
        </Routes>
        <Footer/>
    </Router>
    )
}

export default Layout