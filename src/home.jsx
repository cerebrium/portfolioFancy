import React, { useState} from 'react'
import emailImage from './images/email.png'
import './style.css';

const Home = ({ myRef }) => {
    return (
        <div className="header" id="header" ref={ele => {

            if (!ele) return;
            return myRef
        }
        }>
            <div className="inner-header_top">
                <div className='title_container'>
                <div className='conatiner_top_one'>
                    <h1 className='main_title_Iam'>Nicholas Shankland </h1>
                    <div className='under_images_container'>
                        <img src={emailImage} alt="email" className='images_under_name'/>
                        <img src={emailImage} alt="email" className='images_under_name'/>
                        <img src={emailImage} alt="email" className='images_under_name'/>
                        <img src={emailImage} alt="email" className='images_under_name'/>
                    </div>
                </div>
                </div>
                <div className='line_from_top'></div>
            </div>
            <div className="inner-header">
                <div className='middle_content_container'>
                    <div className='middle_content_inner'>
                        <a href="#second_division" className='link_divs'>
                            <div class="button-container-1" >
                                <span class="mas">Projects</span>
                                <button id='work' type="button" name="Hover">
                                    Projects
                                </button>
                            </div>
                        </a>
                        <a href="#about_me" className='link_divs'>
                            <div class="button-container-1">
                                <span class="mas">About Me</span>
                                <button id='work' type="button" name="Hover">
                                    About Me
                                </button>
                            </div>
                        </a>
                        <a href="#second_division" className='link_divs'>
                            <div class="button-container-1">
                                <span class="mas">Contact Me</span>
                                <button id='work' type="button" name="Hover">
                                    Contact Me
                                </button>
                            </div>
                        </a>
                    </div>
                </div>
            </div>
            <div>
                <svg className="waves" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink"
                viewBox="0 24 150 28" preserveAspectRatio="none" shapeRendering="auto">
                <defs>
                <path id="gentle-wave" d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z" />
                </defs>
                <g className="parallax">
                    <use xlinkHref="#gentle-wave" x="48" y="0" fill="rgba(42, 43, 45, 0.7" />
                    <use xlinkHref="#gentle-wave" x="48" y="3" fill="rgba(42, 43, 45, 0.5)" />
                    <use xlinkHref="#gentle-wave" x="48" y="5" fill="rgba(42, 43, 45, 0.3)" />
                    <use xlinkHref="#gentle-wave" x="48" y="7" fill="rgb(42, 43, 45)" />
                </g>
                </svg>
            </div>
         </div >
    )
}

export default Home