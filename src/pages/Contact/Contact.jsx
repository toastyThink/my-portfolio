import { forwardRef } from 'react';
import { useState, useEffect } from 'react'
import {useNavigate} from "react-router-dom";
import emailjs from '@emailjs/browser'
import config from '../config';


const Contact = forwardRef( function Contact(props, ref){
    const navigate = useNavigate();

    const [contactInfo, setContactInfo] = useState({firstName: "", lastName: "", company: "", email: "", phoneNumber: "", message: ""});
    const [formStatus, setFormStatus] = useState(false);

    const handleSubmit = async (e) => {
            emailjs.sendForm(config.SERVICE_ID, config.TEMPLATE_ID, e.target, config.PUBLIC_KEY);
            setFormStatus(true);
    }

    function handleChange(e){
        setContactInfo({...contactInfo, [e.target.name]: e.target.value});
        console.log(e.target);
    }

    useEffect(() => {
        handleSubmit();
    }, []);

    function submittedForm(){
        return(
            <>
             <div ref={ref} className="isolate bg-white px-6 py-24 sm:py-32 lg:px-8">
                <div className="mx-auto max-w-2xl text-center">
                    <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Thank You</h2>
                    <p className="mt-2 text-lg leading-8 text-gray-600">
                     Your info has been submitted. I'll respond as soon as I can!
                    </p>
                </div>
            </div>
            </>
        )
    }
    

    function unsubmittedForm(){

        return(
            <>
             <div ref={ref} className="isolate bg-white px-6 py-24 sm:py-32 lg:px-8">
                <div className="mx-auto max-w-2xl text-center">
                    <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Get in touch!</h2>
                    <p className="mt-2 text-lg leading-8 text-gray-600">
                    Your digital journey begins here. Fill in the details in the form below, and let's embark on a collaborative 
                    process to design and develop a website that exceeds your expectations!
                    </p>
                </div>
                <form onSubmit={(e) => handleSubmit(e)} className="mx-auto mt-16 max-w-xl sm:mt-20">
                    <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
                    <div>
                        <label htmlFor="first-name" className="block text-sm font-semibold leading-6 text-gray-900">
                        First name
                        </label>
                        <div className="mt-2.5">
                        <input
                            type="text"
                            name="firstName"
                            id="first-name"
                            value={contactInfo.firstName}
                            onChange={handleChange}
                            autoComplete="given-name"
                            className="block w-full bg-white rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        />
                        </div>
                    </div>
                    <div>
                        <label htmlFor="last-name" className="block text-sm font-semibold leading-6 text-gray-900">
                        Last name
                        </label>
                        <div className="mt-2.5">
                        <input
                            type="text"
                            name="lastName"
                            id="last-name"
                            value={contactInfo.lastName}
                            onChange={handleChange}
                            autoComplete="family-name"
                            className="block w-full bg-white rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        />
                        </div>
                    </div>
                    <div className="sm:col-span-2">
                        <label htmlFor="company" className="block text-sm font-semibold leading-6 text-gray-900">
                        Company
                        </label>
                        <div className="mt-2.5">
                        <input
                            type="text"
                            name="company"
                            id="company"
                            value={contactInfo.company}
                            onChange={handleChange}
                            autoComplete="organization"
                            className="block w-full bg-white rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        />
                        </div>
                    </div>
                    <div className="sm:col-span-2">
                        <label htmlFor="email" className="block text-sm font-semibold leading-6 text-gray-900">
                        Email
                        </label>
                        <div className="mt-2.5">
                        <input
                            type="email"
                            name="email"
                            id="email"
                            value={contactInfo.email}
                            onChange={handleChange}
                            autoComplete="email"
                            className="block w-full bg-white rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        />
                        </div>
                    </div>
                    <div className="sm:col-span-2">
                        <label htmlFor="phone-number" className="block text-sm font-semibold leading-6 text-gray-900">
                        Phone number
                        </label>
                        <div className="relative mt-2.5">
                        <div className="absolute inset-y-0 left-0 flex items-center">
                            <label htmlFor="country" className="sr-only">
                            Country
                            </label>
                        </div>
                        <input
                            type="tel"
                            name="phoneNumber"
                            id="phone-number"
                            value={contactInfo.phoneNumber}
                            onChange={handleChange}
                            autoComplete="tel"
                            className="block w-full bg-white rounded-md border-0 px-3.5 py-2 pl-20 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        />
                        </div>
                    </div>
                    <div className="sm:col-span-2">
                        <label htmlFor="message" className="block text-sm font-semibold leading-6 text-gray-900">
                        Message
                        </label>
                        <div className="mt-2.5">
                        <textarea
                            name="message"
                            id="message"
                            value={contactInfo.message}
                            onChange={handleChange}
                            rows={4}
                            className="block w-full bg-white rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        />
                        </div>
                    </div>
                    </div>
                    <div className="mt-10">
                    <button
                        type="submit"
                        className="block w-full rounded-md bg-indigo-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                    >
                        Let's talk
                    </button>
                    </div>
                </form>
                </div>
            </>
        )
    }

    return (
        formStatus === false ? unsubmittedForm() : submittedForm()
    )
})

export default Contact;
