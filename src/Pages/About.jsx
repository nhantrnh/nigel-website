import React, {useEffect, useState} from "react";
import { Link } from "react-router-dom";
import tnt3 from '../assets/tnt3.jpg';

export default function About() {

    return (
        <div className="dark:bg-black dark:text-white min-h-screen flex items-center justify-center">
            <div className="max-w-3xl p-8 dark:text-white shadow-xl rounded-lg">
                <h2 className="dark:text-white text-3xl font-bold mb-4">Hi Everyone!</h2>
                <p className="text-xl font-bold dark:text-white text-black leading-relaxed">
                My name is Truong Thanh Nhan, but you can call me Nhan or Nigel.
                </p>
                <p className="text-lg dark:text-white text-black leading-relaxed mt-4">
                I am a senior student majoring in Software Engineering. Over the years, I've had the opportunity to work on a wide range of projects that have helped me grow both personally and professionally. I'm proud of the progress I've made and the knowledge I've gained through these experiences.
                </p>
                <p className="text-lg dark:text-white text-black leading-relaxed mt-4">
                Many of the projects I've worked on are open-source and available for the community to explore and contribute to. I believe in the power of collaboration and the value it brings to the learning process. If you are interested in any of the projects I've been a part of, I invite you to check out the code. Your suggestions for improvements or enhancements are always welcome.
                </p>
                <p className="text-lg dark:text-white text-black leading-relaxed mt-4">
                Working with others not only helps in refining the projects but also fosters an environment of continuous learning and growth. I'm always open to new ideas and constructive feedback. Let's connect, share our knowledge, and create something amazing together.
                </p>
                <a href="https://drive.google.com/file/d/1Nflm3H8OApeXeIriv9a2zwk7Sb4y93x9/view?usp=sharing" className="inline-block mt-8 border-black bg-blue-750 hover:bg-blue-950 dark:border-2 dark:bg-white dark:text-black dark:hover:bg-gray-500 text-white py-2 px-4 rounded-lg transition duration-300 ease-in-out">Download My CV</a>

            </div>
            <div className="w-1/3">
                <img src={tnt3} alt="Profile" className="rounded-lg shadow-lg m-5 w-full"/>
                <div className="p-2 rounded-lg m-5 justify-center items-center shadow-xl">
                    <h3 className="text-lg font-semibold mb-2">
                        <Link to="https://www.linkedin.com/in/nhantrnh/">Follow me on Linkedin</Link>
                    </h3>
                    <h3 className="text-lg font-semibold mb-2">
                        <Link to="https://www.github.com/nhantrnh">Follow me on Github</Link>
                    </h3>
                    <p className="text-lg font-semibold mb-2 flex-row">
                    <a href="nhantrnh03@gmail.com" >                        
                        Contect me via Gmail
                    </a>
                    </p>
                </div>
            </div>
      </div>
        
    );
}