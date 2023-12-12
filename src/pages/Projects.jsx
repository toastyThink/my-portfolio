import {useState, useEffect} from "react"

function Projects(props) {
 const [projects, setProjects] = useState(null)
 
 const getProjectsData = async () => {
    const response = await fetch("./projects.json")
    const data = await response.json()

    setProjects(data)
 }

    useEffect(()=> getProjectsData(), [])

    const loaded = () => {
        return projects.map((project, idx) => (
            <div key={idx}>
                <h1>{project.name}</h1>
                <img src={project.image} />
                <a href={project.git}>
                    <button>live site</button>
                </a>
            </div>
        
        ))
    }
    return projects ? loaded() : <h1>Projects Page is Loading...</h1>
    
   
  }
  
  export default Projects;