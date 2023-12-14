import './Skills.css'
import { forwardRef } from 'react';

const Skills = forwardRef( function Skills(props, ref){
        return (
            <div className="desktopS" ref={ref}>
                <div className="frame-3S">
                    <div className="frame-4S">
                        <p className="pS">Here are the technologies I use. This list is always growing!</p> 
                        <div className="text-wrapper-4S">Skills</div>
                    </div>
                </div>
                <div className="frameS">
                    <div className="frame-wrapperS"> 
                        <div className="divS">
                            <p className="text-wrapperS">
                                HTML + CSS + SASS + Javascript + Python ✧ Responsive Design + Bootstrap + ReactJS + Django
                            </p>
                            <div className="text-wrapper-2S">Frontend</div>
                        </div>
                    </div>
                    <div className="div-wrapperS">
                        <div className="divS">
                            <p className="text-wrapperS"> 
                                NodeJS + Express +✧ SQL + MongoDB + ✧ Django + AJAX + ✧ RESTful Programming
                            </p>
                            <div className="text-wrapper-2S">Backend</div>
                        </div>
                    </div>
                    <div className="frame-2S">
                        <div className="divS">
                            <p className="text-wrapperS">
                                Git + Github +Slack ✧ Object-Oriented Programming +  ✧ Wireframes + Heroku + Netlify
                            </p>
                            <div className="text-wrapper-3S">Additional</div>
                        </div>
                    </div>
                </div>
            </div>
        )
    })

  
  export default Skills;