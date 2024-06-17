import React, {useState, useEffect} from "react";
import { Link } from "react-router-dom";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import About from '../Pages/About';
import Projects from '../Pages/Projects';
import Resume from '../Pages/Resume';
import Photos from '../Pages/Photos';
import Poetry from '../Pages/Poetry';
import Contact from '../Pages/Contact';

export default function Footer() {

    return (
        <footer class=" bg-black w-full h-20 bottom-0 left-0 right-0 text-white">
            <Link to="/" class="p-3 m-3" style={{ textDecoration: 'none', color: 'inherit' }}>
                Home
            </Link>
            <Link to="/about" class="p-3 m-3" >
                About
            </Link>
            <Link to="/projects" class="p-3 m-3" >
                Projects
            </Link>
            <Link to="/contact" class="p-3 m-3" >
                Contact
            </Link>
        </footer>
    );
}
