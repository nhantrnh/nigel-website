import React from 'react';
import Carousel from '../Component/Carousel';
import { Photo } from './data';

const Photos = () => {
    return (
        <div className="container mx-auto px-4 py-8 dark:bg-black dark:text-white text-yellow-300">
            <h1 className="text-3xl font-bold mb-4">Photo Gallery</h1>
            {Photo.map((category, index) => (
                <div key={index} className="mb-8 ">
                    <h2 className="text-2xl font-bold mb-4">{category.title}</h2>
                    <Carousel images={category.link} />
                </div>
            ))}
        </div>
    );
};

export default Photos;
