import React, {useEffect, useState} from "react";
import { Link } from "react-router-dom";
import { allProjects } from "./AllProjects";
export default function Projects() {

    return (
        <div className="dark:bg-black dark:text-white flex flex-wrap justify-center">
            {allProjects.map((project, index) => (
                <div key={index} className="dark:border-2 max-w-sm rounded overflow-hidden shadow-lg m-4">
                    <img className="w-full" src={project.image} alt={project.title} />
                    <div className="px-6 py-4">
                        <div className="font-bold text-xl mb-2">{project.title}</div>
                        <p className="text-gray-700 dark:text-white text-base">{project.description}</p>
                    </div>
                    <div className="px-6 py-4">
                        <a href={project.link} target="_blank" rel="noopener noreferrer" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
                            View Project
                        </a>
                    </div>
                </div>
            ))}
        </div>
    );
}