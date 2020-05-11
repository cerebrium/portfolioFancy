import React from 'react'

const Projects = (props) => {

    // eslint-disable-next-line react-hooks/exhaustive-deps
    const handleMouseEnter = (e) => {
        e.target.play()
    }
    
    const handleMouseLeave = (e) => {
        e.target.pause()
    }    

    return (
        <div className='projects_main_component_div'>
            <video className='projects_pictures_video' 
            muted='true' 
            loop 
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            >
                <source src={props.videoStream} type="video/mp4"/>
            </video>
            <div>
                <h1>{props.title}</h1>
                <h3>{props.text}</h3>
            </div>
        </div>
    )
}

export default Projects