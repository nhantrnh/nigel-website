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
        <footer class="bg-blue-950 w-full h-12 text-lg text-white text-center justify-center pt-2 dark:bg-black dark:bg-opacity-90 dark:text-white dark:border-t-2">
                © 2024
        </footer>
    );
}
