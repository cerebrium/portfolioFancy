import React, { useEffect, useState, useCallback, useRef} from 'react'
import './style.css'

const Rest = (props) => {
    const [ navName, setNavName ] = useState('navNone')
    const [ topCoords, setTopCoords] = useState(0)
    const [ status, setStatus ] = useState('')

    const handleScroll = useCallback(() => {
      if (window.pageYOffset >= topCoords) {
        setNavName('nav')
      } else {
        setNavName('navNone')
      }
    })
  
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

    return (
        <>
            <div className='second_division' id='second_division' ref={ele => {
                if (!ele) return;
                setTopCoords(ele.getBoundingClientRect().top)
            }}>
                <div className={`${navName}`}>
                    <a href="#header" className='links_two'><h2 className='nav_text'>Home</h2></a>
                    <a href="#second_division" className='links_two'><h2 className='nav_text'>Projects</h2></a>
                    <a href="#about_me" className='links_two'><h2 className='nav_text'>About Me</h2></a>
                    <a href="#contact_me" className='links_two'><h2 className='nav_text'>Contact Me</h2></a>
                </div>
            </div>
            <div className='about_me' id='about_me'>
                <h1>
                    Hello
                </h1>
            </div>
            <div className='contact_me' id='contact_me'>
              {/* contact content */}
              {myContent}
            </div>
      </>
    )
}

export default Rest