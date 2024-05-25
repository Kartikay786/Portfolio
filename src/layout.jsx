import React from "react";
import Navbar from "./Component/Navbar";
import { createBrowserRouter ,RouterProvider } from "react-router-dom"
import Home from "./home";

import About from "./Component/about";
import Project from './Component/project'
import Contact from "./Component/contact";
import Servicepage from "./Component/servicepage";
import Footer from "./Component/footer";


const router = createBrowserRouter([
    {
        path:"/",
        element:<Home/>
    },
    {
        path:"/about",
        element:<About/>
    },
    {
        path:"/project",
        element:<Project/>
    },
    {
        path:"/service",
        element:<Servicepage/>
    },
    {
        path:"/contact",
        element:<Contact/>
    }
])

function Layout(){

    return(
    <>
        <Navbar/>
        <RouterProvider router={router}/>
        <Footer/>
    </>
    )
}

export default Layout