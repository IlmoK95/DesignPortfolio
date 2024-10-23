import { useForm, ValidationError} from '@formspree/react';
import {useState, useEffect} from 'react'
import '../index.css'

function ContactForm() {
    const [state, handleSubmit] = useForm("xjvnbyjg");
    

   if (state.succeeded) {
        return (<div className='message'><h2 >Message sent succesfully!</h2></div>)
    }

    return (
        
        <form onSubmit={handleSubmit}>
            <div className='contactForm'>
                <ul>
                    <li><label htmlFor="email">
                        Email Address
                        </label>
                        <input
                        id="email"
                        type="email" 
                        name="email"
                        size={27}
                    />
                    <ValidationError 
                        prefix="Email" 
                        field="email"
                        errors={state.errors}
                    /></li>
                    <li>
                        <label htmlFor="subject">
                        Subject
                        </label>
                        <input
                            id="subject"
                            type="subject" 
                            name="subject"
                            size={37}
                        />
                    <ValidationError 
                        prefix="Subject" 
                        field="subject"
                        errors={state.errors}
                    />
                    </li>
                    <li>
                        <textarea
                            id="message"
                            name="message"
                            rows="8"
                            cols="50"
                            
                        />
                         <ValidationError 
                            prefix="Message" 
                            field="message"
                        errors={state.errors}
                        />
                    </li>
                    <li>
                    <button type="submit" disabled={state.submitting}>
                        Submit
                    </button>

                    </li>
                </ul>

        </div>
    </form>)
      
    
  }

function SocialMedia () {
    return(
        <div className='socialMedia'>
            <ul>
                <li><a href="https://www.linkedin.com/in/ilmo-k-908722170/"><img src='..\logos\kisspng-computer-icons-linkedin-logo-5b2908e9e9d977.9110431115294159139579 (1).png' ></img><p>linkedin</p></a></li>
                <li><a href="https://github.com/IlmoK95"><img src='..\logos\kisspng-github-computer-icons-icon-design-github-5ab8a31e5b5395.6758034915220498223741 (1).png'></img><p>gitHub</p></a></li>

            </ul>

        </div>
    )

}

const Contact =(props)=>{

    const [isVisible, setVisibilityStatus] =  useState(false)
    const [visibilityCount, setVisibilityCount] =  useState(0)



    useEffect(()=>{
        if (props.currentActive=='contact'){
            setVisibilityStatus(true)
            setVisibilityCount(visibilityCount + 1)
        }else{
            setVisibilityStatus(false)
        }
        console.log(isVisible)}, [props.currentActive, isVisible]
        )

    return (
        <div ref={props.contact} className="contact">
            
            <div className='contactElements'> 
                <h1 className={isVisible?'SlideRight' : 'fadeAway'}>Let's connect!</h1>
                <svg width="295" height="102" viewBox="0 0 295 102" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path className={visibilityCount > 1? 'AnimationPath' : 'AnimationPathReverse' } d="M1 0V40.7971C1 68.4113 23.3858 90.7971 51 90.7971H291M291 90.7971L258.444 100V81.5L291 90.7971Z" stroke="white" strokeWidth="2"/>
                </svg>

                <ContactForm/>
                <SocialMedia />
            </div>

        </div>
    )
}
export default Contact