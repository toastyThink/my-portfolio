import {Link} from "react-router-dom"
import { useRef} from 'react'
import "./Header.css";

function Header({about, skills, projects, contact}) {
    
    // const navStyle= {
    //     display:'flex',
    //     justifyContent: 'space-around',
    //     borderBotton: '.2rem solid black',
    //     padding: '.5rem', 
    //     width: '90%', 
    //     margin: 'auto' 
    // }

    
    
    return(
        <header>
            <div className="nav-bar"> 
                <div className="flex-box">
                    <div className="navbar">
                        <Link to="/about" onClick={() => about.current.scrollIntoView({behavior: "smooth"})}>
                            <div className="text-wrapper">About</div> 
                        </Link>
                        <Link to="/skills" onClick={() => skills.current.scrollIntoView({behavior: "smooth"})}>
                        <div className="div">Skills</div>
                        </Link>
                        <Link to="/projects" onClick={() => projects.current.scrollIntoView({behavior: "smooth"})}>
                        <div className="text-wrapper-2" >Projects</div> 
                        </Link>
                        <Link to="/projects" onClick={() => contact.current.scrollIntoView({behavior: "smooth"})}>
                        <div className="text-wrapper-3">Contact</div>
                        </Link>
                    </div>
                    <div className="text-wrapper-4">Brendan Shaeffer</div> 
                 </div>
            </div>

            {/* <nav style={navStyle}>
                <Link to="/">
                    <div>HOME</div>
                </Link>
                <Link to="/about">
                    <div>ABOUT</div>
                </Link>
                <Link to="/projects">
                    <div>PROJECTS</div>
                </Link>
            </nav> */}
        </header>
    )
  }
  
  export default Header;
  