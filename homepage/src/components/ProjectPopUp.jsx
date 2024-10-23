/* eslint-disable react/jsx-no-comment-textnodes */
import '../index.css'
import { useState, useEffect } from 'react'

const ProjectPopUp =(props)=>{

    const [mainPic, SetMainPic] = useState(null)
    const [FadeIn, SetFadeIn] = useState(false)
    const [FullImg, SetFullImg] = useState('')
    const [showFullImg, SetShowFullImg] = useState(false)


    useEffect(()=>{
        if(FadeIn){
            SetFadeIn(false)
        }
    }, [FadeIn])

    const SetPic =(src)=>{

        SetMainPic(src)
        if (!FadeIn){
            SetFadeIn(true)
        }
    }

    const ShowFullFunc=()=>{

        SetShowFullImg(!showFullImg)
        SetFullImg(mainPic)
    
    }

    const setToOrigin=()=>{
        SetMainPic(null)
        

    }

    const fadeInEffect = {animation: FadeIn ? 'fadeBackground 2s' : '', animationFillMode: 'forwards'}

    const fadeInEffectFullImg = {animation: showFullImg ? 'fadeBackground 3s' : '', animationFillMode: 'forwards'}


    const fullImgModal = 
                    <div className="Modal_Overlay">
                        <div className='Modal_Content'>
                            <div className='full_image'>
                                <img  src={FullImg? FullImg : props.All.main_img} style={fadeInEffectFullImg}></img>
                            </div>
                            <div className='CloseBtn'>
                                    <button onClick={()=>ShowFullFunc()}>return</button>
                            </div>
                        </div>   
                     </div>







    if (props.open==false) return null

    return (
        <div>
        <div className="Modal_Overlay">
            <div className='Modal_Content'>

                    <div className='Img_left'>
                        <div className='Main_Img' > 
                            <img src={mainPic? mainPic : props.All.main_img} onClick={()=>ShowFullFunc()} style={fadeInEffect}></img>
                        </div>
                        <div className='Project_img_array'>
                            <ul >
                                {props.img_list.map(element => <li key={element}><a onClick={()=>SetPic(element)}><img src={element} ></img></a></li>)}
                            </ul> 
                        </div>

                    </div>

                    <div className='Modal_text_area'>
                        <div className='Modal_Header'>{props.All.name}</div>
                        <div className='infoArea'>
                            <div className='infoBoxProject'>
                                <div className='infoBoxProjectLine'><h3>Year: </h3><p>{props.All.year}</p></div>
                                <div className='infoBoxProjectLine'><h3>Institution:</h3><p>{props.All.company}</p></div>
                                <div className='infoBoxProjectLine'><h3>Role: </h3><p>{props.All.role}</p></div>
 

                            </div>
                            <div className='Modal_text'>
                                <p> {props.All.description}
                                </p>
                                
                       
                    
                            </div>
                        </div>
                    </div>
                    <div className='CloseBtn' onClick={()=>setToOrigin()}>
                        <button onClick={props.close}>X</button>
                    </div>
                 


            </div>
        
        </div>
        {showFullImg? fullImgModal : null}
    </div>
    )
}


export default ProjectPopUp