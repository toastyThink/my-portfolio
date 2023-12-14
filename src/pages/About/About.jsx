// import {useState, useEffect} from 'react'
import './About.css'
import { forwardRef } from 'react';



const About = forwardRef( function About(props,ref){

    // const downloadResume = function(){
    //     const resume = new Blob(text, {tyoe: 'text/plain'})
        
    //     const element = document.createElement("a")
    //     element.href= URL.createObjectURL()
    // }

    return (
        <div className="desktopA" ref={ref}> 
        <div className="frameA">
            <div className="divA">
                <div className="text-wrapper-2A">Who am I?</div> 
                <p className="text-wrapperA">
                    To start, I'm a versatile Fullstack Developer seamlessly blending the worlds of technology and design. 
                    With a unique background in Human Resources and visual design, I bring a holistic perspective to 
                    my development projects.
                </p>
                <p className="my-journey-began-inA">
                    My journey began in Human Resources, where I honed my interpersonal skills and gained a 
                    deep understanding of user needs. Transitioning into visual design allowed me to express 
                    creativity and enhance my problem-solving abilities. Now, as a Fullstack Developer, I seamlessly 
                    integrate my diverse skill set to create user-centric and visually appealing applications.
                </p>
                <a href="/Brendan_Shaeffer_Resume.pdf" download={"Brendan_Shaeffer_Resume.pdf"}>
                    <button className="my-journey-began-in-button">My Resume</button>
                </a>
                </div>
            </div>
        </div>
    )
  })
  
  export default About;

   // const [about, setAbout] = useState(null)

    // const getAboutData = async ()=>{
    //     const response = await fetch("./about.json");
    //     const data = await response.json()

    //     setAbout(data)
    // }
    
    // useEffect(()=>{getAboutData()}, [])

    // const loaded = () => (
        
    //     <div>
    //         <h2>{about.name}</h2>
    //         <h3>{about.email}</h3>
    //         <p>{about.bio}</p>
    //         Hello
    //       </div>
    // )
    
    // return about ? loaded() : <h1>Page is Loading...</h1>