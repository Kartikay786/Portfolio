import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"

import Navbar from "./Component/Navbar";
import Home from './Component/home'
import Project from './Component/homeComponent/project/project'
import Contact from "./Component/contact";
import Footer from "./Component/footer";
import Aboutpage from "./Component/aboutpage";
import Skills from "./Component/Skills";



function Layout() {

    return (
        <Router>
            <Navbar />

            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="about" element={<Aboutpage />} />
                <Route path="/service" element={<Skills />} />
                <Route path="/project" element={<Project />} />
                <Route path="/contact" element={<Contact />} />
            </Routes>
            <Footer />
        </Router>
    )
}

export default Layout