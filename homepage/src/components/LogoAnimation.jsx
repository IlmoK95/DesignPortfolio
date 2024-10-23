import '../App.css'

const LogoAnimation =(props)=>{

    const logo_page_dimensions = {}

    return (
        <div style={logo_page_dimensions} className='frontLogo'>
            <ul>
                <li><span className='logo'></span></li>
                <li><h2> Architecture</h2>
                    <h2>parametric design </h2>
                    <h2>AEC scripting</h2></li>
            </ul>
     
        </div>
    )
}
export default LogoAnimation