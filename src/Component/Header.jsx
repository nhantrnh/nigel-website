import React, {useState, useEffect} from "react";
import { Link } from "react-router-dom";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import About from '../Pages/About';
import Projects from '../Pages/Projects';
import Photos from '../Pages/Photos';
import Poetry from '../Pages/Poetry';
import Contact from '../Pages/Contact';

export default function Header({setdarkMode, darkMode}) {
    const [show, setShow] = useState(false);

    const [isScrolling, setIsScrolling] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 0) {
                setIsScrolling(true);
            } else {
                setIsScrolling(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        
        return () => {  
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);
    
    return (
        <header className={`bg-gradient-to-r from-sky-900 dark:border-b-2 to-emerald-800 text-xl w-full h-16 text-yellow-300 text-center dark:text-white sticky top-0 z-50 flex items-center justify-center dark:bg-gradient-to-r dark:from-black dark:to-black ${isScrolling ? 'bg-opacity-75' : ''}`}>
            <Link to="/" class="p-10 m-5 hover:scale-110" style={{ textDecoration: 'none', color: 'inherit' }}>
                Home
            </Link>
            <Link to="/about" class="p-10 m-5 hover:scale-110" >
                About
            </Link>
            <Link to="/projects" class="p-10 m-5 hover:scale-110" >
                Projects
            </Link>
            <div to="/interest" class="p-10 m-5 hover:scale-110"  onClick={()=> setShow(!show)} onMouseEnter={()=>setShow(true)}  onMouseLeave={()=>setShow(false)}>
                Interest
                {show && (
                    <div className="absolute bg-white divide-y divide-gray-100 rounded-lg shadow-lg text-lg mb-2 text-blue-950 dark:bg-black dark:border-2">
                        <div >
                            <div class="p-2 hover:scale-110  dark:text-white">
                                <Link to="/photos" >Photos</Link>
                            </div>
                            <div class="dark:border-b-2"></div>
                            <div class="p-2 hover:scale-110 dark:text-white">
                                <Link to="/poetry" >Poetry</Link>
                            </div>
                        </div>
                    </div>
                )}
            </div>
            <Link to="/contact" class="p-10 m-5 hover:scale-110" >
                Contact
            </Link>
            <button onClick={()=>{setdarkMode(!darkMode)}} class="border-white text-white px-2 py-2 hover:text-opacity-50">
                {!darkMode ? 
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-7 fill-yellow-300 stroke-yellow-300">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z" />
                </svg>
                : 
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-7">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M21.752 15.002A9.72 9.72 0 0 1 18 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 0 0 3 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 0 0 9.002-5.998Z" />
                </svg>
                }
            </button>
        </header>
    );
}
