import React from "react";
import Navbar from "./Component/Navbar";
import { createBrowserRouter ,RouterProvider } from "react-router-dom"
import Home from "./home";
import Service from "./Component/service";
import About from "./Component/about";
import Project from './Component/project'


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
        element:<Service/>
    }
])

function Layout(){

    return(
    <>
        <Navbar/>
        <RouterProvider router={router}/>
    </>
    )
}

export default Layout