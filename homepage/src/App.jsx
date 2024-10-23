

import NavigationBar from './components/Navigation_bar'
import About from './components/About'
import Services from './components/Services'
import Portfolio from './components/Portfolio'
import { useRef , useState, useEffect} from 'react'
import { useInView } from 'react-intersection-observer'
import AllProjects from './sources/ProjectData'
import Contact from './components/Contact'
import {  isMobile } from 'react-device-detect';


function App() {

  const about = useRef(null)
  const services = useRef(null)
  const portfolio = useRef(null)
  const contact = useRef(null)



  const options = {triggerOnce: false, threshold: 0.2 , initialInView: false}
  const { ref: ref1, inView: AboutView } = useInView(options)
  const { ref: ref2, inView: ServicesView } = useInView(options)
  const {ref: ref3, inView: PortfolioView} = useInView(options)
  const {ref: ref4, inView: ContactView} = useInView(options)

  const [activeElement, setActiveElement] = useState('')
  const [Projects, setAllProjects] = useState([])
  const [Architecture, setArchitecture] = useState([])
  const [ParametricDesign, setParametricDesign] = useState([])
  const [Scripting, setScripting] = useState([])
  const [Misc, setMiscallaneous] = useState([])
  const [Work, setWork] = useState([])
  const [prevSection, setPrevSection] = useState(about)



  const scrollToSection = elementRef => {
    const scrollTo_services = elementRef.current.offsetTop + -90
    /*const scrollTo_portfolio = window.innerHeight > 900 ?  elementRef.current.offsetTop  -400 : elementRef.current.offsetTop  + 10*/
    const scrollTo_portfolio = elementRef.current.offsetTop

    if(elementRef.current){

      if (elementRef.current===services.current && prevSection.current === about.current) {

        window.scrollTo({
          top: scrollTo_services,
          behavior: 'smooth',
      })
      }

      else if (elementRef.current===portfolio.current && (prevSection.current === about.current || prevSection.current === services.current)) {
        window.scrollTo({
          top: scrollTo_portfolio,
          behavior: 'smooth',
      })

      }else{
        console.log(elementRef.current)
        window.scrollTo({
          top: elementRef.current.offsetTop,
          behavior: 'smooth',
      })
      }

      setPrevSection(elementRef)
    }

  }

  useEffect(()=>{
    if(AboutView){
      console.log('about')
      setActiveElement('about')
    }if(ServicesView){
      console.log('services')
      setActiveElement('services')
    }if(PortfolioView){
      console.log('portfolio')
      setActiveElement('portfolio')
    }if(ContactView){
      console.log('contact')
      setActiveElement('contact')
    }
  }, [AboutView, ServicesView, PortfolioView, ContactView])


  useEffect(()=>{

    AllProjects
      .GetProjects()
      .then(response => {
        console.log(response.data)
        SortProjects(response.data)
          
       } )
      .catch(error => console.log(error))

  }, [])



  const SortProjects=(data)=>{

    function compareBy_i(a, b) {
      return a.i - b.i
    }

    data.sort(compareBy_i)

    setAllProjects(data)

    const architecture = []
    const parametric = []
    const scripting  = []
    const miscallaneous = []
    const work = []

    data.forEach(project => {

      if (project.ProjectCategory.includes('Architecture')){
        architecture.push(project)
      }
      if (project.ProjectCategory.includes('Parametric')){
        parametric.push(project)
      }
      if (project.ProjectCategory.includes('Misc')){
        miscallaneous.push(project)
      }
      if (project.ProjectCategory.includes('Scripting')){
        scripting.push(project)
      }
      if (project.ProjectCategory.includes('Work')){
        work.push(project)
      }
 
    })

    setArchitecture(architecture)
    setParametricDesign(parametric)
    setScripting(scripting)
    setMiscallaneous(miscallaneous)
    setWork(work)

  }

  if (isMobile) {
    return (<div className = 'MobileStop'>
      <h3>Please visit my homepage via desktop, the optimization for mobile view is still in progress!⌛ Sorry for inconvenience.</h3>
    </div>)
  }




  return (<div >

    <div>
        <NavigationBar scrollToAbout = {()=>scrollToSection(about)} currentView={activeElement}
                      scrollToServices = {()=>scrollToSection(services)}
                      scrollToPortfolio = {()=>scrollToSection(portfolio)}
                      scrollToContact = {()=>scrollToSection(contact)}>
        </NavigationBar>
    </div>

    <div  ref ={ref1}>
    <About about = {about} currentActive = {activeElement}></About>
    </div>
    <div ref ={ref2}>
    <Services services = {services} currentActive = {activeElement}></Services>
    </div>
    <div  ref={ref3}>
      <Portfolio 
      currentActive = {activeElement}
      portfolio = {portfolio} 
      All = {Projects} 
      architecture = {Architecture} 
      scripting={Scripting} 
      parametric={ParametricDesign}
      misc = {Misc}
      work = {Work}>
        
      </Portfolio>
    </div>
    <div ref={ref4}>
      <Contact contact = {contact} currentActive = {activeElement}></Contact>
    </div>
      </div>
)
      
    }

export default App
