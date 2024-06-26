import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from '../Pages/Home';
import About from '../Pages/About';
import Projects from '../Pages/Projects';
import Photos from '../Pages/Photos';
import Poetry from '../Pages/Poetry';
import Contact from '../Pages/Contact';
import PoetryDetail from '../Pages/PoetryDetail';
export default function IndexRoute() {
    return (
        <Routes>
            {/* Public */}
            <Route path='/' element={<Home/>} />
            <Route path='/about' element={<About/>} />
            <Route path='/projects' element={<Projects/>} />
            <Route path='/photos' element={<Photos/>} />
            <Route path='/poetry' element={<Poetry/>} />
            <Route path='/poetry/:title' element={<PoetryDetail/>} />
            <Route path='/contact' element={<Contact/>} />
        </Routes>
    );
}