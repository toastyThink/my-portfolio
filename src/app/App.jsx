//import components
import Header from "../componenets/Header"
// import ParticlesBG from "../componenets/particles"
// import Footer from "../componenets/Footer"
// import {Route, Routes} from "react-router-dom"

//import pages 
import About from "../pages/About/About.jsx"
import Skills from "../pages/Skills/Skills.jsx"
import Projects from "../pages/Projects/Projects.jsx"
import Contact from "../pages/Contact/Contact.jsx"
import { useRef } from 'react'

//import css
import './App.css'

function App() {
  
  const aboutRef = useRef(null)
  const skillsRef = useRef(null)
  const projectsRef= useRef(null)
  const contactRef = useRef(null)
  const topRef= useRef(null)
  
  // const scrollToElement = ref => {
  //   ref.current.scrollIntoView({ behavior: 'smooth' })
  // }

    return (
      <>
      <Header about={aboutRef} skills={skillsRef} projects={projectsRef} contact={contactRef} top={topRef}/>
      <div className="desktop" ref={topRef}>
      {/* <ParticlesBG /> */}
          <div className="frame">
            <p className="text-wrapper">Thanks for stopping by! My name is</p> 
            <div className="div">Brendan Shaeffer</div>
            <p className="i-m-a-full-stack">
                <span className="text-wrapper-2">I'm a Full Stack Developer</span>
            </p>
          </div>
      </div>
      <About ref={aboutRef}/>
      <Skills ref={skillsRef}/>
      <Projects ref={projectsRef}/>
      <Contact ref={contactRef} />
      {/* <Routes> */}
        {/* <Route exact path="/about" element={<About />} /> */}
        {/* <Route exact path="/skills" element={<Skills />} /> */}
        {/* <Route path="/projects" element={<Projects />} /> */}
      {/* </Routes> */}
      {/* <Footer /> */}
    </>
    )
  
}

export default App
