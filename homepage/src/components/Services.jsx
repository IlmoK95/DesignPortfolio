import '../index.css'
import IMAGES from '../images/Images'
import {useState, useEffect} from 'react'

const Services =(props)=>{

    const [ArchSlideState, setArch_Visibility]  = useState('slide-up')
    const [ScriptSlideState, setScript_Visibility]  = useState('slide-up')
    const [ParametricSlideState, setParametric_Visibility]  = useState('slide-up')
    const [isVisible, setVisibilityStatus] =  useState(false)
    const [visibilityCount, setVisibilityCount] =  useState(0)



    useEffect(()=>{
        if (props.currentActive=='services'){
            setVisibilityStatus(true)
            setVisibilityCount(visibilityCount + 1)
        }else{
            setVisibilityStatus(false)
        }
        console.log(isVisible)}, [props.currentActive, isVisible]
        )

    const ShowArch =()=>{
        console.log(ArchSlideState)
        ArchSlideState==='slide-up' ? setArch_Visibility('slide-down') : setArch_Visibility('slide-up')
    }

    const ShowScript =()=>{
        console.log(ScriptSlideState)
        ScriptSlideState==='slide-up' ? setScript_Visibility('slide-down') : setScript_Visibility('slide-up')
    }

    const ShowParametric =()=>{
        console.log(ParametricSlideState)
        ParametricSlideState==='slide-up' ? setParametric_Visibility('slide-down') : setParametric_Visibility('slide-up')
    }

    const style = { color:'rgb(1, 137, 151)'}


    return (
        <div ref={props.services} className="services" >
 
        
            <div className='sectionHeader'><h1><span className={isVisible? 'DropA' : 'fadeAway'}>My </span ><span style={style} className={isVisible? 'DropB' : 'fadeAway'}>services</span></h1></div>
            <div className='infoSection'>
                <div>
                    <div className='infoBox' onClick={()=>ShowArch()}>
                        <div>
                            <h2>ARCHITECTURE</h2>
                            <img className='img1' src='..\architecture_logo.png'></img>
                            <div className={visibilityCount > 1? 'slide-down' : 'slide-up'}>
                                <p >As a designer I am a problem solver by nature, and love working with complex and multidisciplinary problems. I have worked with various types of projects ranging from complex laboratory facilities to shopping centers. As an architect I provide visualizations and construction documentation for architectural projects, with a great focus on details. I have experience working as a designer for both architectural companies and freelancing. I work with softwares such as Revit, Archicad, Autocad and Rhinoceros.</p></div>
                            </div>
                        </div>
                    </div>

                    <div>
                    <div className='infoBox' onClick={()=>ShowParametric()}>
                        <div>
                            <h2>PARAMETRIC DESIGN</h2>
                            <img className='img3' src='..\parametric_logo.png'></img>
                            <div className={visibilityCount > 1? 'slide-down' : 'slide-up'}>
                                <p >Parametric design-methology provides a way to manipulate and explore variety of design options by controlling the input values (numbers, strings, boolean values), greatly enhancing certain aspects of design process. In this type of algorithmic approach, the designer takes the full advantage of the computer as a design tool. Computational approach is one of my biggest skills, and I have used Grasshopper and Python to solve geometrically complicated and challenging tasks both in my studies and in work. </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <div className='infoBox' onClick={()=>ShowScript()}>
                        <div>
                            <h2>AEC SCRIPTING</h2>
                            <img className='img2' src='..\aec_logo.png'></img>
                            <div className={visibilityCount > 1? 'slide-down' : ''}>
                            <p> AEC Closely related to parametric design, my skills in AEC (architecture, engineering and construction) scripting can provide automation & precision to dull and repetitive tasks related to data flows, which create the backbone of any project. I also create custom scripted tools, which help analyzing design performance thus optimizing design even further. For this I use Grasshopper, Python and Revit’s Dynamo. 
                            </p></div>
                        </div>
                    </div>  
                </div>
            </div>

            
        </div>
    )
}
export default Services