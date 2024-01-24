import { forwardRef } from 'react';

const Contact = forwardRef( function Contact(props, ref){

    return (
    <>
        <div style={{margin: '30px'}}>
            <div ref={ref} style={{margin: '30px', fontSize: "50px"}}>Contact</div>
            <br/>
        <a style={{margin: '30px', fontSize: "30px"}} href="https://www.linkedin.com/in/brendanshaeffer/">LinkedIn</a>
        <a style={{margin: '30px', fontSize: "30px"}} href="https://github.com/toastyThink">Github</a>
        <a style={{margin: '30px', fontSize: "30px"}} href="mailto:shaefferbrendan@gmail.com">Email</a>
        </div>
    </>
    )
    })

export default Contact;