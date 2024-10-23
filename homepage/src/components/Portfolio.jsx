import '../index.css'
import ProjectPopUp from './ProjectPopUp'
import { useState, useEffect } from 'react'


const Portfolio =(props)=>{

    
    const [showAll, setShowAll] = useState(true)
    const [showArchitecture, setShowArchitecture] = useState(false)
    const [showParametric, setShowParametric] = useState(false)
    const [showScript, setShowScript] = useState(false)
    const [showMisc, setShowMisc] = useState(false)
    const [showProject, setShowProject] = useState(false)
    const [showWork, setShowWork] = useState(false)
    const [CurrentProject, setCurrentProject] = useState({})
    const [CurrentCategory, setCurrentCategory] = useState(props.All)
    const [isVisible, setVisibilityStatus] =  useState(false)
    const [nothingVisible, setNothingVisible] = useState(false)
    const [visibilityCount, setVisibilityCount] =  useState(0)



    useEffect(()=>{
        if (props.currentActive=='portfolio'){
            setVisibilityStatus(true)
            setVisibilityCount(visibilityCount + 1)
        }else{
            setVisibilityStatus(false)
        }
        console.log(isVisible)}, [props.currentActive, isVisible]
        )


    useEffect(()=> {
        if (props.All){
            ShowAllFunc()
        }}, [props.All])



    const ProjectVisibility=(project)=>{
        
        setShowProject(!showProject)
        setCurrentProject(project)
        !showProject ? document.getElementsByTagName("body")[0].style.overflow = "hidden" : document.getElementsByTagName("body")[0].style.overflow = "auto"
        


    }


    const isAnythingToShow =(boolean)=>{
        if (boolean==false){
            setNothingVisible(true)
        }
        else{
            setNothingVisible(false)
        }
    }

        
    const ShowAllFunc =()=>{
        setShowAll(!showAll)
        setShowArchitecture(false)
        setShowParametric(false)
        setShowMisc(false)
        setShowScript(false)
        setShowWork(false)

        isAnythingToShow(!showAll)

        setCurrentCategory(props.All)
        
    }

    
    const ShowArchFunc =()=>{
        setShowArchitecture(!showArchitecture)
        setShowAll(false)
        setShowParametric(false)
        setShowMisc(false)
        setShowScript(false)
        setShowWork(false)

        isAnythingToShow(!showArchitecture)

        setCurrentCategory(props.architecture)

    }

    const ShowParamFunc =()=>{
        setShowParametric(!showParametric)
        setShowArchitecture(false)
        setShowAll(false)
        setShowMisc(false)
        setShowScript(false)
        setShowWork(false)

        isAnythingToShow(!showParametric)

        setCurrentCategory(props.parametric)

    }

    const ShowScriptFunc =()=>{
        setShowScript(!showScript)
        setShowParametric(false)
        setShowArchitecture(false)
        setShowAll(false)
        setShowMisc(false)
        setShowWork(false)

        isAnythingToShow(!showScript)

        setCurrentCategory(props.scripting)

    }

    const ShowMiscFunc =()=>{
        setShowMisc(!showMisc)
        setShowScript(false)
        setShowParametric(false)
        setShowArchitecture(false)
        setShowAll(false)
        setShowWork(false)

        isAnythingToShow(!showMisc)

        setCurrentCategory(props.misc)

    }


    const ShowWorkFunc =()=>{
        setShowWork(!showWork)
        setShowMisc(false)
        setShowScript(false)
        setShowParametric(false)
        setShowArchitecture(false)
        setShowAll(false)

        isAnythingToShow(!showWork)

        setCurrentCategory(props.work)

    }
    
 
    const ShowCategory = 

        <div  className='DropA'>

            <div className='Portfolio_elements'>

                <ul>
                    {
         
                    CurrentCategory.map( (project, index) => 
                                        
                                            <li key={project.main_img} >

                                                    <div className='Portfolio_element'>
                                                        <a onClick={()=>ProjectVisibility(project)}><img src={project.main_img} className="Portfolio_img" alt="pic_1" />
                                                        <div className='ImageText2'><h2>{project.name }</h2></div></a>
                                                    </div>            
                                            </li>
                                        
                    )}
    
                </ul>
                <ProjectPopUp img_list = {CurrentProject.images} img = {CurrentProject.main_img} open = {showProject} All = {CurrentProject} close = {()=>ProjectVisibility({})}></ProjectPopUp>
            </div>
        </div>
    
    const style = { color:'rgb(1, 137, 151)'}


    return (
        <div ref={props.portfolio} className="portfolio">
            <div className='sectionHeader'><h1><span className={isVisible? 'DropA' : 'fadeAway'}>My selected </span><span style={style} className={isVisible? 'DropB' : 'fadeAway'}>projects</span></h1></div>
            <div className='PortfolioNav'>
                <ul>
                    <li><button className = {showAll ? 'ActiveButton' : ''} onClick={()=>ShowAllFunc()}>All</button></li>
                    <li><button className = {showWork ? 'ActiveButton' : ''} onClick={()=>ShowWorkFunc()}>work</button></li>
                    <li><button className = {showArchitecture ? 'ActiveButton' : ''} onClick={()=>ShowArchFunc()}>Architecture</button></li>
                    <li><button className = {showParametric ? 'ActiveButton' : ''} onClick={()=>ShowParamFunc()}>Parametric design</button></li>
                    <li><button className = {showScript ? 'ActiveButton' : ''} onClick={()=>ShowScriptFunc()}>Scripting</button></li>
                    <li><button className = {showMisc ? 'ActiveButton' : ''} onClick={()=>ShowMiscFunc()}>miscellaneous</button></li>
                </ul>
                <div className='projects'>
                    {showAll? ShowCategory : null}
                    {showWork? ShowCategory : null}
                    {showArchitecture? ShowCategory : null}
                    {showParametric? ShowCategory : null}
                    {showScript? ShowCategory : null}
                    {showMisc? ShowCategory : null}
                </div>
            </div>

        </div>
    )
}
export default Portfolio