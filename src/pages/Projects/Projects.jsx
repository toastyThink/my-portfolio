import {useState, useEffect} from "react"
import { forwardRef } from 'react';
// import './Projects.css'

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
              <div key={p.id} className="bg-gray m-5 rounded-lg overflow-hidden shadow-lg transition-transform transform hover:scale-105">
                <div className="p-1 bg-blue-200">
                </div>
                <div className="p-8">
                  <h2 className="text-3xl font-bold text-gray-800 mb-4">{p.name}</h2>
                  <p className="text-gray-600 mb-6">{p.description}</p>
                  <ul className="text-sm text-gray-600 mb-6">
                      <img 
                      className="rounded-lg overflow-hidden w-full" 
                      src={p.image}
                      />
                  </ul>
                </div>
                <div className="p-4">
                  <a href={p.live}>
                          <button
                          className="w-full bg-blue-500 text-white rounded-full px-4 py-2 hover:bg-blue-700 focus:outline-none focus:shadow-outline-blue active:bg-blue-800">
                          Visit Site
                          </button>
                      </a>
                </div>
              </div>
            </>
            ))
        )
    }

    return (
        projects ? 
        <>
        <h1 ref={ref} style={{margin: "50px"}} style={{backgroundColor: "white", color: "Black", fontWeight: "bold"}}>My Projects</h1> 
            <div className="bg-white min-h-36 py-12 flex items-center justify-center">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6">
                
                                {loaded()} 
                                {/* <hr style={{width:'30%'}}/> */}
                </div>
            </div>                            
        </>
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