import React, { useEffect, useState, useCallback} from 'react'
import './style.css'
import bentley from './images/bentlesSmall.jpg'
import pinkBeach from './images/pinkKomodo.jpg'
import arrow from './images/arrowUp.png'
import Projects from './projects'

const Rest = (props) => {
  const [ navName, setNavName ] = useState('navNone')
  const [ topCoords, setTopCoords] = useState(0)
  const [ status, setStatus ] = useState('')
  const [ pictureDivs, setPictureDivs ] = useState('invisible_divs')
  const [ arrowDirection, setArrowDirection ] = useState('arrow_left')
  const [ mobilGate, setMobileGate ] = useState(false)
  const [ mobileNav, setMobileNav ] = useState(null)
  const [ hamburgerMenu, setHamburgerMenu ] = useState(null)

  const handleScroll = useCallback(() => {
    if (window.pageYOffset >= topCoords) {
      setNavName('nav')
    } else {
      setNavName('navNone')
    }
  }, [topCoords])

  useEffect( () => {
    setHamburgerMenu(              
    <div className='mobileNavMenu' onClick={handleMobileClick}>
      <div className='hamburgerLine'></div>
      <div className='hamburgerLine'></div>
      <div className='hamburgerLine'></div>
    </div>
  )
  }, [])

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
            <div className="button-container-2">
                <span className="mas2">Contact Me</span>
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

  // mobile nav click
  const handleMobileClick = () => {
    console.log('pressed', mobilGate)
    if (mobilGate) {
      setMobileGate(false)
    } else {
      setMobileGate(true)
    }
  }

  // remove  menu
  const removeMenu = () => {
    setMobileGate(false)
  }

  // render mobile nav
  useEffect( () => {
    console.log(mobilGate)
    if (mobilGate) {
      setMobileNav(
        <div className='mobileNav'>
          <div>
            <a href="#header" className='linksNav' onClick={removeMenu}>
              <div className='navTextMobil'>
                <h2 className='theTextMobile'>
                  Home
                </h2>
              </div>
            </a>
          </div>
          <div >
            <a href="#second_division" className='linksNav' onClick={removeMenu}>
              <div className='navTextMobil'>
                <h2 className='theTextMobile'>
                  Projects
                </h2>
              </div>
            </a>
          </div>
          <div >
            <a href="#about_me" id='about_me_id'className='linksNav' onClick={removeMenu}>
              <div className='navTextMobil'>
                <h2 className='theTextMobile'>
                  About
                </h2>
              </div>
            </a>
          </div>
          <div >
            <a href="#contact_me" className='linksNav' onClick={removeMenu}>
              <div className='navTextMobil'>
                <h2 className='theTextMobile'>
                  Contact
                </h2>
              </div>
            </a>
          </div>
        </div>
      )
        setHamburgerMenu(
          <div className='mobileNavMenu' onClick={handleMobileClick}>
            <div className='hamburgerLineCrossedOne'></div>
            <div className='hamburgerLineCrossedTwo'></div>
          </div>
        )
    } else {
      setMobileNav(null)
      setHamburgerMenu(
        <div className='mobileNavMenu' onClick={handleMobileClick}>
          <div className='hamburgerLine'></div>
          <div className='hamburgerLine'></div>
          <div className='hamburgerLine'></div>
        </div>
      )
    }
  }, [mobilGate])

  return (
      <>
        {mobileNav}
          <div className='second_division' id='second_division' ref={ele => {
            if (!ele) return;
            setTopCoords(ele.getBoundingClientRect().top)
          }}>
              <div className={`${navName}`} id='navId'>
                  <div className='nav_seperation_div_home'>
                    <a href="#header" className='links_two'><div className='nav_text'><h2 className='the_text'>Home</h2></div></a>
                  </div>
                  <div className='nav_seperation_div_projects'>
                    <a href="#second_division" className='links_two'><div className='nav_text'><h2 className='the_text'>Projects</h2></div></a>
                  </div>
                  <div className='nav_seperation_div_about'>
                    <a href="#about_me" id='about_me_id'className='links_two'><div className='nav_text'><h2 className='the_text'>About</h2></div></a>
                  </div>
                  <div className='nav_seperation_div_contact'>
                    <a href="#contact_me" className='links_two'><div className='nav_text'><h2 className='the_text'>Contact</h2></div></a>
                  </div>
              </div>
              {hamburgerMenu}
              <div className='projects_div'>
                <h1>Projects</h1><br />
                <Projects 
                videoStream={'https://res.cloudinary.com/shanklandium/video/upload/v1589174902/daveDesignsVideo_ydcv0y.mp4'} 
                title='Dave Designs'
                id='dd'
                link="https://davedesigns.netlify.app/"
                text='Website for Dave Designs! Shows a New Hampshire man and his wood crafting skills. Uses Gatsby and Javascript.'
                />
                <Projects 
                videoStream={'https://res.cloudinary.com/shanklandium/video/upload/v1589669656/crmPreview_hrhf2p.mp4'} 
                title='Crm'
                id='crm'
                link="https://portfoliocrm.netlify.app/"
                text='React application that is a mock of a crm. Uses a django backend. Desktop application. Takes up to 30 seconds to load'
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