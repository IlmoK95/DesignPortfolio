
import { useRef, useState, useEffect } from 'react'



const NavigationBar =(props)=>{

    const active = {backgroundColor: 'rgb(1, 137, 151)',
                    animation: 'fadeBackground 0.5s',
                    animationFillMode: 'forwards',
                    borderStyle: 'solid',
                    borderWidth: '1px',
                    borderColor: 'rgb(120, 120, 120)'}
    const [activeNav, setActiveNav] = useState('')

    useEffect(()=>{
        setActiveNav(props.currentView)
    })

    return (

            <nav className="nav">
                <span className='logo_small'></span>
                <ul>
                    <li><a onClick={props.scrollToAbout} 
                            style= {activeNav==='about'? active : {}}>ABOUT ILMO</a></li>
                    {/*<li><span className='separator'></span></li>*/}
                    <li><a onClick={props.scrollToServices}
                                    style= {activeNav==='services'? active : {}}>MY SERVICES</a></li>
                    {/*<li><span className='separator'></span></li>*/}
                    <li><a onClick={props.scrollToPortfolio}
                                    style= {activeNav==='portfolio'? active : {}}>PORTFOLIO</a></li>
                    {/*<li><span className='separator'></span></li>*/}
                    <li><a onClick={props.scrollToContact}
                                    style={activeNav==='contact'? active : {}}>CONTACT</a></li>

                </ul>
            </nav>

    )
}
export default NavigationBar