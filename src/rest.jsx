import React, { useEffect, useState, useCallback} from 'react'
import './style.css'
import bentley from './images/bentlesSmall.jpg'
import pinkBeach from './images/pinkKomodo.jpg'
import arrow from './images/arrowUp.png'
import blog from './images/travelBlog.png'
import Projects from './projects'
import videoBlog from './images/blogVideo.mp4'

const Rest = (props) => {
    const [ navName, setNavName ] = useState('navNone')
    const [ topCoords, setTopCoords] = useState(0)
    const [ status, setStatus ] = useState('')
    const [ pictureDivs, setPictureDivs ] = useState('invisible_divs')
    const [ arrowDirection, setArrowDirection ] = useState('arrow_left')

    const handleScroll = useCallback(() => {
      if (window.pageYOffset >= topCoords) {
        setNavName('nav')
      } else {
        setNavName('navNone')
      }
    }, [topCoords])
  
    window.addEventListener("scroll", handleScroll)
    
    useEffect(() => {
      return () => {
        window.removeEventListener("scroll", () => handleScroll)
      }
    }, [handleScroll])
    
    const submitForm = (ev) => {
      ev.preventDefault();
      console.log(ev.target)
      const form = ev.target;
      const data = new FormData(form);
      const xhr = new XMLHttpRequest();
      xhr.open(form.method, form.action);
      xhr.setRequestHeader("Accept", "application/json");
      xhr.onreadystatechange = () => {
      if (xhr.readyState !== XMLHttpRequest.DONE) return;
      if (xhr.status === 200) {
          form.reset();
          setStatus("SUCCESS") 
      } else {
          setStatus("ERROR")
        }
      };
      xhr.send(data);
    }

    var myContent
    
    if (status === 'SUCCESS') {
      myContent = (
        <section className="section">
          <h2>Thanks, your message has been sent and I'll hopefully get back to you soon!</h2>
        </section>
      )
    } else {
      myContent = (
        <section  className='contact_form'>
          <form onSubmit={submitForm} action='https://formspree.io/meqelkae' method="POST" className='myForm'>
            <h3 id='name' className='labels_contact'>Name:</h3>
              <input type="text" name="name" className='inputBars'/><br/>
            <h3 id='email' className='labels_contact'>Email:</h3>
              <input type="email" name="email" className='inputBars'/><br/>
            <h3 id='message' className='labels_contact'>Message:</h3>
              <textarea type="textarea" rows='15' cols='16' name="message" className='myTextArea'></textarea><br/>
            {
            status === "SUCCESS" ? 
              <div className='thanks_box'>
                <p className='submitted_message'>Thanks!</p>
              </div>
              : 
              <div class="button-container-2">
                  <span class="mas2">Contact Me</span>
                  <button id='work2' type="button" name="Hover">
                    <input type="submit" value="Contact Me" className='my_submit_button'/>
                  </button>
              </div>
            }
            {status === "ERROR" && <p>Ooops! There was an error.</p>}
          </form>
        </section>
      )
    }

    // mouse enter func
    const handleMouseEnter = () => {
      pictureDivs === 'visible_divs' ? setPictureDivs('invisible_divs') : setPictureDivs('visible_divs')
      arrowDirection === 'arrow_left' ? setArrowDirection('arrow_down') : setArrowDirection('arrow_left')
    }

    return (
        <>
            <div className='second_division' id='second_division' ref={ele => {
                if (!ele) return;
                setTopCoords(ele.getBoundingClientRect().top)
            }}>
                <div className={`${navName}`}>
                    <div className='nav_seperation_div'>
                      <a href="#header" className='links_two'><div className='nav_text'><h2 className='the_text'>Home</h2></div></a>
                    </div>
                    <div className='nav_seperation_div'>
                      <a href="#second_division" className='links_two'><div className='nav_text'><h2 className='the_text'>Projects</h2></div></a>
                    </div>
                    <div className='nav_seperation_div'>
                      <a href="#about_me" id='about_me_id'className='links_two'><div className='nav_text'><h2 className='the_text'>About</h2></div></a>
                    </div>
                    <div className='nav_seperation_div'>
                      <a href="#contact_me" className='links_two'><div className='nav_text'><h2 className='the_text'>Contact</h2></div></a>
                    </div>
                </div>
                <div className='projects_div'>
                  <h1>Projects</h1><br />
                  <Projects 
                  videoStream={'https://res.cloudinary.com/shanklandium/video/upload/v1589174902/daveDesignsVideo_ydcv0y.mp4'} 
                  title='Dave Designs'
                  text='Website for Dave Designs! Shows a New Hampshire man and his wood crafting skills. Uses Gatsby and Javascript.'
                  />
                  <Projects 
                  videoStream={'https://res.cloudinary.com/shanklandium/video/upload/v1589172778/blogVideo_uzddoz.mp4'} 
                  title='Bloggify'
                  text='My blog showing some of my travels and passions. Uses Javascript and Gatsby.'
                  />
                </div>
            </div>
            <div className='about_me' id='about_me'>
              <div className='about_title'>
                <h1>
                  About Me
                </h1>
                <br />
                <h3 className='about_text'>
                  I am a Full Stack Developer, with frontend interests. I like working with companies to find solutions to problems that allow for the best user experience whilst meeting the companies demands. I am currently building projects as a freelance developer, check out some of my stuff in the projects section. 
                  <a href="#second_division" ><img src={arrow} alt="Arrow" className='arrow_up'/></a>
                  <br />
                  <br />
                  I grew up in Seattle and love the PNW, however I am going to find some more sun some time in my life! Along with developing, I enjoy dogs, hiking, kayaking and generally anything involving fun people and places. Next vacation is hopefully going to be in Africa on the safari. Here are some photos of my dog and my travels. <img src={arrow} alt="Arrow" className={arrowDirection} onMouseEnter={handleMouseEnter}/>
                </h3>
                <div className={pictureDivs}>
                  <img src={bentley} alt="Dog" className='about_pictures'/>
                  <img src={pinkBeach} alt="Pink Beach" className='about_pictures'/>
                </div>
              </div>
            </div>
            <div className='contact_me' id='contact_me'>
              {/* contact content */}
              {myContent}
            </div>
      </>
    )
}

export default Rest