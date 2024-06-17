import React, {useState, useEffect} from "react";
import { Link } from "react-router-dom";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import About from '../Pages/About';
import Projects from '../Pages/Projects';
import Resume from '../Pages/Resume';
import Photos from '../Pages/Photos';
import Poetry from '../Pages/Poetry';
import Contact from '../Pages/Contact';

export default function Header() {
    const [show, setShow] = useState(false);

    return (
        <header class=" bg-black w-full h-12 text-white text-center">
            <Link to="/" class="p-3 m-3" style={{ textDecoration: 'none', color: 'inherit' }}>
                Home
            </Link>
            <Link to="/about" class="p-3 m-3" >
                About
            </Link>
            <Link to="/projects" class="p-3 m-3" >
                Projects
            </Link>
            <button to="/interest" class="p-3 m-3"  onClick={()=> setShow(!show)} onMouseEnter={()=>setShow(true)}  onMouseLeave={()=>setShow(false)}>
                Interest
                {show && (
                    <div className="absolute bg-white divide-y divide-gray-100 rounded-lg shadow-lg mt-1 py-2 text-sm text-gray-700">
                        <div >
                            <div class="p-2">
                                <Link to="/photos" >Photos</Link>
                            </div>
                            <div class="p-2">
                                <Link to="/poetry" >Poetry</Link>
                            </div>
                        </div>
                    </div>
                )}
            </button>
            <Link to="/contact" class="p-3 m-3" >
                Contact
            </Link>
        </header>
    );
}
