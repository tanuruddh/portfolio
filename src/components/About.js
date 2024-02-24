import React from 'react'
import python from '../images/python.svg';
import JavaScript from '../images/js.svg';
import html from '../images/html.svg';
import aws from '../images/amazon-web-services.svg';
import css from '../images/css.svg';
import git from '../images/git.svg';
import mongodb from '../images/mongodb.svg';
import nodejs from '../images/nodejs.svg';
import reactjs from '../images/react-2.svg'
import mongoose from '../images/Mongoose.svg'


const About = () => {
    return (
        <div>
            <section className="about">
                <div className="img"></div>
                <h1>About</h1>
                <div className="description">
                    <div className="line"></div>
                    <p>In the world of web development, I've found my passion in crafting dynamic and interactive web applications using the MERN stack – <span>MongoDB</span>, <span>Express.js</span>, <span>React.js</span> and <span>Node.js</span>. These technologies have not only empowered me to build robust and scalable solutions but also ignited my curiosity to explore new possibilities in the realm of full-stack development <br /> <br /> A passionate developer having expertise in Web, API, and Database and the ability to adapt in
                        both self-starting and collaborative
                        environments while staying focused on
                        achieving high-quality results under strict
                        deadlines.</p>
                    <p className='second-para'></p>
                </div>
            </section>
            <section className="skills">
                <h1>My Skills</h1>
                <div className="cards">
                    <div className="skill-card">
                        <img src={html} alt="Python logo" />
                        <h2>Html</h2>
                    </div>
                    <div className="skill-card">
                        <img src={css} alt="Python logo" />
                        <h2>CSS</h2>
                    </div>
                    <div className="skill-card">
                        <img src={JavaScript} alt="Python logo" />
                        <h2>JavaScript</h2>
                    </div>
                    <div className="skill-card">
                        <img src={reactjs} alt="Python logo" />
                        <h2>React.js</h2>
                    </div>
                    <div className="skill-card">
                        <img src={nodejs} alt="Python logo" />
                        <h2>Node.js</h2>
                    </div>
                    <div className="skill-card">
                        <img src={python} alt="Python logo" />
                        <h2>Express.js</h2>
                    </div>
                    <div className="skill-card">
                        <img src={mongodb} alt="Python logo" />
                        <h2>MongoDB</h2>
                    </div>
                    <div className="skill-card">
                        <img src={mongoose} alt="Python logo" />
                        <h2>Mongoose</h2>
                    </div>
                    <div className="skill-card">
                        <img src={aws} alt="Python logo" />
                        <h2>AWS</h2>
                    </div>
                    <div className="skill-card">
                        <img src={git} alt="Python logo" />
                        <h2>Git</h2>
                    </div>


                </div>
            </section>


            <section className="experience">
                <div className="darker-div"></div>
                <h1>Experience</h1>
                <div className="lighter-div">
                    <div className="exp">
                        <h2>Research and Development intern </h2>
                        <div className="exp-desc">
                            <h3>Pune , Maharastra</h3>
                            <p>Worked as UI/UX Engineer and contributed to the development of v24, and upgraded version of v23 antivirus available in market. Collaborated with the team to design and implement the user interface using React js ensuring a seamless and responsive user experience
                                Actively participated in the entire software development lifecycle, from concept to delivery, including requirement gathering, design, development, testing and deployment.
                                Utilized various software tools such as JIRA ,Git and Bitbucket</p>
                        </div>
                    </div>
                    <div className="exp">
                        <h2>Senior Python Developer</h2>
                        <div className="exp-desc">
                            <h3>Scottech, Toledo</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore, repellat! Mollitia nostrum,
                                dolor repellat deleniti officiis voluptatem quas labore cupiditate iure ullam doloribus aliquam
                                voluptates. Ratione earum reprehenderit iure, esse assumenda minima vero delectus consequuntur.
                                Laborum eligendi nisi, doloremque, ab sint id enim in vel molestias, nihil vero suscipit a?
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore, repellat! Mollitia nostrum,
                                dolor repellat deleniti officiis voluptatem quas labore cupiditate iure ullam doloribus aliquam
                                voluptates. Ratione earum reprehenderit iure, esse assumenda minima vero delectus consequuntur.
                                Laborum eligendi nisi, doloremque, ab sint id enim in vel molestias, nihil vero suscipit a?</p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default About
