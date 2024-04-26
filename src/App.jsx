import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Nav from './components/nav';
import Footer from './components/footer'
import Body from './components/body';
import About from './pages/about';
import Contact from './pages/contact';
import Resume from './pages/resume';
import Projects from './pages/projects';
import './App.css';

function App() {
    return (
        <>
            <BrowserRouter>
                <Nav />
                <Routes>
                    <Route exact path="/" element={<Body />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="/resume" element={<Resume />} />
                    <Route path="/projects" element={<Projects />} />
                </Routes>
                <Footer />
            </BrowserRouter>
        </>
    );
}

export default App;
