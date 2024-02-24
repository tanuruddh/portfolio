import React from 'react'
import '../style.css';

const Landingpage = () => {
    return (

        <div className="landing">
            <div className="intro">
                <h3>I'M <span>Trp Singh</span><br />Mern-Stack Developer </h3>
                <button className='contactBtn'>Contact Me</button>
            </div>
            <div className="socials" z>
                <div className="line"></div>
                <i className="ri-facebook-circle-fill"></i>
                <i className="ri-twitter-fill"></i>
                <i className="ri-linkedin-fill"></i>
                <i className="ri-whatsapp-line"></i>
            </div>
        </div>

    )
}

export default Landingpage
