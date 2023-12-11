//import components
import Header from "./componenets/Header"
import Footer from "./componenets/Footer"
import {Route, Routes} from "react-router-dom"
import { useState, useEffect } from 'react'

//import pages 
import Home from "./pages/Home"
import About from "./pages/About"
import Projects from "./pages/Projects"

//import css
import './App.css'

function App() {

  return (
   <div className="App">
    <Header />
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route path="/projects" element={<Projects />} />
      <Route path="/about" element={<About />} />
    </Routes>
    <Footer />
   </div>
  )
}

export default App
