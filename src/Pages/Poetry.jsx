import React from 'react';
import { Link } from 'react-router-dom';
import {Poems} from './data';

const Poetry = () => {
    return (
        <div className="container mx-auto px-4 dark:bg-black">
            <h1 className="text-3xl font-bold py-3 dark:text-white text-yellow-300 ">Poetry Collection</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 pb-10">
                {Poems.map((poem, index) => (
                    <Link to={`/poetry/${poem.title.toLowerCase().replace(/\s+/g, '-')}`} className="bg-white p-2 bg-opacity-30 dark:text-white dark:bg-gray-800 dark:border-2 text-yellow-300 rounded-lg shadow-lg flex flex-col justify-center items-center transition-all duration-300 ease-in-out hover:scale-110 hover:translate-y-1" key={index}>
                        <img src={poem.img} alt={poem.title} className="w-96 h-96 object-cover mb-3 rounded-lg" />
                        <h2 className="text-xl font-bold mb-2">{poem.title}</h2>
                        <p className="text-white dark:text-white">
                            {`${poem.scripts.split(' ').slice(0, 20).join(' ')}${poem.scripts.split(' ').length > 10 ? ' ...' : ''}`}
                        </p>
                        <Link
                            to={`/poetry/${poem.title.toLowerCase().replace(/\s+/g, '-')}`}
                            className="mt-4 inline-block text-yellow-200 dark:text-white hover:underline"
                        >
                            Read more
                        </Link>
                    </Link>
                ))}
                </div>

        </div>
    );
};

export default Poetry;
