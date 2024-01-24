import {useState, useEffect} from "react"
import { forwardRef } from 'react';
import './Projects.css'

const Projects = forwardRef(function Projects(props, ref){
 
 const [projects, setProjects] = useState(null)
 
 const getProjectsData = async () => {
    const response = await fetch("./projects.json")
    const data = await response.json()

    setProjects(data)
 }

    useEffect(()=>{ getProjectsData()}, [])

    const loaded = () => {
        return ( 
        projects.map((p) => (
            <>
            <div key={p.id} style={{margin:'20px'}}>
                <h1>{p.name}</h1>
                <img src={p.image} />
                <a href={p.live}>
                    <button>Visit Site</button>
                </a>
            </div>
            </>
        ))
        )
    }

    return (projects ? <div>
                          <h1 ref={ref}>My Projects</h1> 
                          <hr style={{width:'30%'}}/> 
                          {loaded()} 
                          <hr style={{width:'30%'}}/>
                      </div>  
                      : <h1>Projects Page is Loading...</h1>
        
    )
  })
  
  export default Projects;

  /* <div className="desktop">
                <div className="frame">
                <div className="overlap-group-wrapper">
                <div
                className="overlap-group">
                <p className="text-wrapper">
                Virtual Slots is a slot machine simulator. It generators. Slot wheel animations respond to
                </p>
                <div className="frame-wrapper">
                <div className="div-wrapper">
                <div className="div">Visit Site</div>
                </div>
                </div>
                </div>
                </div>
                <div className="overlap-wrapper"> <div className="overlap-group"> <p className="text-wrapper">
                Virtual Slots is a slot machine simulator. It generators. Slot wheel animations respond to
                </p>
                <div className="frame-wrapper">
                <div className="div-wrapper">
                <div className="div">Visit Site</div> 
                </div> 
                </div>
                </div> 
                </div>
                <div className="frame-2">
                <div className="frame-3">
                <p className="p">A selection of projects I worked or <div className="text-wrapper-2">My Projects</div> </div>
                </div>
                <div className="frame-4">
                <div className="overlap-group">
                <p className="text-wrapper">
                Virtual Slots is a slot machine simulator. It's fu generators. Slot wheel animations respond to diffe
                </p>
                <div className="frame-wrapper">
                <div className="div-wrapper">
                <div className="div">Visit Site</div>
                </div>
                </div>
                </div>
                </div>
                </div>}                    
            */