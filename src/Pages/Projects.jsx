import React, {useEffect, useState} from "react";
import { Link } from "react-router-dom";
import { SEProjects, CSProjects } from "./data";
export default function Projects() {

    return (
        <div className="dark:bg-black dark:text-white pb-5">
            <h2 className="dark:text-white text-3xl text-yellow-300 font-bold p-2 text-center">Software Development Projects</h2>
            <div class="flex flex-wrap justify-center">
                
                {SEProjects.map((project, index) => (
                    <div key={index} className="dark:border-2 border-sky-500 border-2  max-w-sm rounded overflow-hidden shadow-lg m-4 text-center transition-all duration-300 ease-in-out hover:scale-110 hover:translate-y-1">
                        <div className="px-6 py-4">
                            <div className="font-bold text-xl mb-2">{project.title}</div>
                            <p className="text-yellow-300 dark:text-white text-base">{project.description}</p>
                        </div>
                        <div className="px-6 py-4">
                            <a href={project.link} target="_blank" rel="noopener noreferrer" className="bg-yellow-200 hover:bg-yellow-700 text-black font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline dark:bg-white dark:text-black dark:hover:bg-slate-400">
                                View Project
                            </a>
                        </div>
                    </div>
                ))}
            </div>

            <h2 className="dark:text-white text-3xl text-yellow-300 font-bold p-2 text-center">Computer Science Projects</h2>
            <div class="flex flex-wrap justify-center">
                {CSProjects.map((project, index) => (
                    <div key={index} className="dark:border-2 border-sky-500 border-2  max-w-sm rounded overflow-hidden shadow-lg m-4 text-center transition-all duration-300 ease-in-out hover:scale-110 hover:translate-y-1">
                        <div className="px-6 py-4">
                            <div className="font-bold text-xl mb-2">{project.title}</div>
                            <p className="text-yellow-300 dark:text-white text-base">{project.description}</p>
                        </div>
                        <div className="px-6 py-4">
                        <a href={project.link} target="_blank" rel="noopener noreferrer" className="bg-yellow-200 hover:bg-yellow-700 text-black font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline dark:bg-white dark:text-black dark:hover:bg-slate-400">
                            View Project
                            </a>
                        </div>
                    </div>
                ))}
            </div>

        </div>
    );
}