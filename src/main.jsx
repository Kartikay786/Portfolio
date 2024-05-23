import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import Landingpage from './landingpage/landingpage.jsx'
import Nav from './nav/nav.jsx'
import About from './about/about.jsx'
import Service from './service/service.jsx'
import Project from './project/project.jsx'
import Contact from './contact/contact.jsx'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    < Nav/>
    < Landingpage/>
    < About/>
    < Service/>
    < Project/>
    < Contact/>
  
  </React.StrictMode>
)
