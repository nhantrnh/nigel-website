import React, { useState } from 'react';

const Carousel = ({ images }) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const handlePrev = () => {
        const isFirstSlide = currentIndex === 0;
        const newIndex = isFirstSlide ? images.length - 1 : currentIndex - 1;
        setCurrentIndex(newIndex);
    };

    const handleNext = () => {
        const isLastSlide = currentIndex === images.length - 1;
        const newIndex = isLastSlide ? 0 : currentIndex + 1;
        setCurrentIndex(newIndex);
    };

    const getVisibleSlides = () => {
        if (images.length <= 3) {
            return images;
        }

        let visibleSlides = [];
        for (let i = 0; i < 3; i++) {
            visibleSlides.push(images[(currentIndex + i) % images.length]);
        }
        return visibleSlides;
    };

    return (
        <div className="relative w-full h-full">
            <div className="absolute inset-0 flex justify-between items-center">
                <button
                    onClick={handlePrev}
                    className="text-white p-2 rounded-full bg-opacity-50 hover:bg-opacity-75 transition hover:scale-125"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M21 16.811c0 .864-.933 1.406-1.683.977l-7.108-4.061a1.125 1.125 0 0 1 0-1.954l7.108-4.061A1.125 1.125 0 0 1 21 8.689v8.122ZM11.25 16.811c0 .864-.933 1.406-1.683.977l-7.108-4.061a1.125 1.125 0 0 1 0-1.954l7.108-4.061a1.125 1.125 0 0 1 1.683.977v8.122Z" />
                    </svg>

                </button>
                <button
                    onClick={handleNext}
                    className="text-white p-2 rounded-full bg-opacity-50 hover:bg-opacity-75 transition hover:scale-125"
                >
                   <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M3 8.689c0-.864.933-1.406 1.683-.977l7.108 4.061a1.125 1.125 0 0 1 0 1.954l-7.108 4.061A1.125 1.125 0 0 1 3 16.811V8.69ZM12.75 8.689c0-.864.933-1.406 1.683-.977l7.108 4.061a1.125 1.125 0 0 1 0 1.954l-7.108 4.061a1.125 1.125 0 0 1-1.683-.977V8.69Z" />
                    </svg>

                </button>
            </div>
            <div className="w-full h-full transition-transform duration-700 ease-in-out flex overflow-hidden">
                {getVisibleSlides().map((image, index) => (
                    <img
                        key={index}
                        src={image}
                        alt={`Slide ${index}`}
                        className="w-1/3 h-full object-cover transition-transform duration-700 ease-in-out p-2 "
                    />
                ))}
            </div>
        </div>
    );
};

export default Carousel;
