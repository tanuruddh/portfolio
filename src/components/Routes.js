import React from 'react';
import { Routes, Route, DefaultRoute } from 'react-router-dom';
import Home from './Home.js';
import About from './About.js';
import Contact from './Contact.js';
import Blog from './Blog.js';

const RouteNav = () => {
    return (
        <Routes>
            <Route path="portfolio/" element={<Home />} />
            <Route path="portfolio/about" element={<About />} />
            <Route path="portfolio/contact" element={<Contact />} />
            <Route path="portfolio/blogs" element={<Blog />} />
            <Route path="portfolio/*" element={<Home />} />

            {/* <DefaultRoute handler={<Home />} /> */}
        </Routes>

    )
}

export default RouteNav
