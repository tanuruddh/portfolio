import React from 'react';
import '../style.css';
import { useNavigate } from "react-router-dom";
const Home = () => {
    let navigate = useNavigate();
    const routeChange = () => {
        let path = `/contact`;
        navigate(path);
    }
    return (
        <>

            <header className='header'> </header>
            <div className="landing">
                <div className="intro">
                    <h3>I'M <span>Trp Singh</span><br />Mern-Stack Developer </h3>
                    <button onClick={routeChange} className='contactBtn'>Contact Me</button>
                </div>
                <div className="socials" >
                    <div className="line"></div>
                    <a href="https://www.instagram.com/_trp_singh?igsh=cDR1M3BkZ3FoZzBu" target='_blank'><i className="ri-instagram-fill"></i></a>
                    <a href="https://x.com/_trp_singh?t=zhNHkxWPjG_1yGYy9M4jqw&s=35" target='_blank'><i className="ri-twitter-fill"></i></a>
                    <a target='_blank' href="https://www.linkedin.com/in/tanuruddh-pratap-singh-1b3845211/"><i className="ri-linkedin-fill"></i></a>
                    <a href="https://wa.me/9548247281" target='_blank'><i className="ri-whatsapp-line"></i></a>
                </div>
            </div>

        </>
    )
}

export default Home
