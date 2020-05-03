import React, { useEffect, useState, useRef} from 'react'

const Rest = (props) => {
    const [ navName, setNavName ] = useState('navNone')
    const [ topCoords, setTopCoords] = useState(0)

    useEffect(() => {
      return () => {
        window.removeEventListener("scroll", () => handleScroll)
      }
    }, [])
    
    const handleScroll = () => {
      console.log(window.pageYOffset, topCoords)
      if (window.pageYOffset >= topCoords) {
        setNavName('nav')
      } else {
        setNavName('navNone')
      }
    }
  
    window.addEventListener("scroll", handleScroll)

    return (
        <>
            <div className='second_division' id='second_division' ref={ele => {
                if (!ele) return;
                setTopCoords(ele.getBoundingClientRect().top)
            }}>
                <div className={`${navName}`}>
                    <a href="#header" className='links_two'><h2>Home</h2></a>
                    <a href="#about_me" className='links_two'><h2>About Me</h2></a>
                    <a href="#contact_me" className='links_two'><h2>Contact Me</h2></a>
                </div>
                <div className=''>
                    <h1>
                        Hello
                    </h1>
                </div>
            </div>
            <div className='about_me' id='about_me'>
                <h1>
                    Hello
                </h1>
            </div>
            <div className='contact_me' id='contact_me'>
                <h1>
                    Hello
                </h1>
            </div>
      </>
    )
}

export default Rest