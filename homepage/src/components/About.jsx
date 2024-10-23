
import '../index.css'
import IMAGES from '../images/images'

import {useState, useEffect} from 'react'

const About =(props)=>{

    const [studySlideState, setStudy_Visibility]  = useState('slide-down')
    const [workSlideState, setWork_Visibility]  = useState('slide-down')
    const [isVisible, setVisibilityStatus] =  useState(false)
    const [visibilityCount, setVisibilityCount] =  useState(0)
    const [SliderClass, setSliderClass] = useState('slide-up')


    useEffect(()=>{
        if(visibilityCount > 1){
            setSliderClass('slide-down')
        }}

    )

    useEffect(()=>{
        if (props.currentActive=='about'){
            setVisibilityStatus(true)
            setVisibilityCount(visibilityCount + 1)
        }else{
            setVisibilityStatus(false)
        }
        console.log(isVisible)}, [props.currentActive, isVisible]
        )


    const ShowStudyHistory =()=>{

        if (studySlideState==='slide-up'){
            setStudy_Visibility('slide-down')

        }else{
            setStudy_Visibility('slide-up')
        }
    }





    const ShowWorkHistory =()=>{
        if (workSlideState==='slide-up'){
            setWork_Visibility('slide-down')

        }else{
            setWork_Visibility('slide-up')
        }
    }   

    const style = { color:'rgb(1, 137, 151)'}

    return (
        <div ref={props.about} className='about' >
            

              
                <div className='AboutInfoArea'>
                        <div className={visibilityCount > 1? 'SlideRight' : ''}>
                        <div className='profile'>
                            <ul>
                                <li>
                                    <div className='AboutMainPic'>
                                        <img  src={IMAGES['profileImg']} alt="profile Picture"></img>           
                                    </div>
                                </li>
                                <li>
                                    <div className='profileInfo'>
                                
                                            
                                            <ul>
                                                <li className='who'><a>Ilmo Kapanen</a></li>
                                                <li className='profession'><a>architect</a></li>
                                                <li className='where'><a>Espoo, Finland</a></li>
                                            </ul>
                                            
                                   
                                        </div>
                                    
                                </li>
                            </ul>
                        </div>
                        </div>
                        


                        
                      
                        <div className='aboutTextSection'>
                            <div className='sectionHeader'>
                                <h1 className='slide-down'><div> <span style = {{fontSize:'50px'}} className={isVisible? 'DropA' : 'fadeAway'}>about </span ><span style={{ color:'rgb(1, 137, 151)', fontSize:'50px'}} className={isVisible? 'DropB' : 'fadeAway'}>Ilmo</span></div></h1></div>
                            <div className='aboutDescription'>
                                <p className={visibilityCount > 1? 'DropA' : ''} >I am a finnish SAFA architect who have graduated from Aalto University, Finland. In the master’s phase of my studies, I focused especially on parametric design, which I have also been able to use in working life with practical projects. I have worked in renovation and new construction, and love working with complex and multidisciplinary tasks. I am particularly interested in working with public buildings and offices, be it new or renovation construction. I'm also exprienced in programming with languages such as Python, C++ and Javascript, having variety of projects related to architecture and machine learning.</p>
                            </div>
                            <div className='infoDropDowns'>
                            <div className='infoDropDown'>
                                <h3>STUDY HISTORY</h3>
                                    <div className= {SliderClass}> 
                                        
                                        <ul>
                                            <li><span className='aboutListSideLine_1'></span></li>
                                            <li><span className='aboutListSeparator'></span></li>
                                            <li><h4>Aalto-university</h4></li>
                                            <li>Bachelor & Master's degree in architecture</li>
                                            <li><span className='aboutListSeparator'></span></li>
                                            <li><h4>University of Helsinki</h4></li>
                                            <li>Minor Studies in Computer Science</li>
                                            <li><span className='aboutListSeparator'></span></li>
                                            <li><h4>Kaunas university of technology</h4></li>
                                            <li>Exchange studies</li>
                                        </ul>
           
                                    </div>
                        </div>
                        <div className='infoDropDown'>
                            <h3>WORK HISTORY</h3>
                                <div className={SliderClass}>
                                <ul>
                                            <li><span className='aboutListSideLine_2'></span></li>
                                            <li><span className='aboutListSeparator'></span></li>
                                            <li><h4> Kouvo & Partanen architects</h4></li>
                                            <li> Assistant designer <br></br>
                                                08.2017 - 08.2018</li>
                                            <li><span className='aboutListSeparator'></span></li>
                                            <li><h4>Siven & Takala architects</h4></li>
                                            <li> Assistant designer <br></br>04.2019 - 11.2019</li>
                                            <li><span className='aboutListSeparator'></span></li>
                                            <li><h4>Bolder development</h4></li>
                                            <li> Architect <br></br> 08.2022 - present</li>
                                        </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    </div>
                   


 
    </div>)
}
export default About