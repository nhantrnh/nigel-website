import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from '../Pages/Home';
import About from '../Pages/About';
import Projects from '../Pages/Projects';
import Resume from '../Pages/Resume';
import Photos from '../Pages/Photos';
import Poetry from '../Pages/Poetry';
import Contact from '../Pages/Contact';

export default function IndexRoute({darkMode}) {
    return (
        <Routes>
            {/* Public */}
            <Route path='/' element={<Home darkMode={darkMode}/>} />
            <Route path='/about' element={<About/>} />
            <Route path='/projects' element={<Projects/>} />
            <Route path='/resume' element={<Resume/>} />
            <Route path='/photos' element={<Photos/>} />
            <Route path='/poetry' element={<Poetry/>} />
            <Route path='/contact' element={<Contact/>} />
        </Routes>
    );
}