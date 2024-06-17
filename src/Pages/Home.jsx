import React, {useEffect, useState} from "react";
import { Link } from "react-router-dom";
import Typewriter from 'typewriter-effect';
import tnt from '../assets/tnt.jpg';
import tnt1 from '../assets/tnt1.jpg';
import tnt2 from '../assets/tnt2.jpg';
export default function Home() {

    const [currentImage, setCurrentImage] = useState(0);
    
    const [intervalId, setIntervalId] = useState(null);

    const images = [tnt, tnt1, tnt2];

    const handleMouseEnter = () => {
        if (intervalId) return; // Prevent multiple intervals
        let index = 0;
        const id = setInterval(() => {
          setCurrentImage(index);
          index = (index + 1) % images.length; // Loop back to the start
        }, 300); // Thay đổi hình ảnh sau mỗi 1000ms (1 giây)
        setIntervalId(id);
      };
    
      const handleMouseLeave = () => {
        clearInterval(intervalId);
        setIntervalId(null);
        setCurrentImage(0); // Reset về hình ảnh đầu tiên khi rời chuột
      };

    return (
        <div>
            <div class ="flex px-24 text-white">
                <div class="w-2/3 flex flex-col justify-center items-center h-screen">
                    <div class="text-center ">
                        <span class="text-white font-bold text-4xl animate-pulse transition duration-500 hover:text-black pr-4">
                            TRUONG THANH NHAN
                        </span>
                        <span class="text-black font-bold text-4xl animate-pulse transition duration-500 hover:text-white">
                            NIGEL
                        </span>
                    </div>  
                    <div class="text-white text-2xl pb-4 pt-4">
                        <Typewriter 
                            options={{
                                strings: ['Nigel','Software Engineer','Researcher','Developer'],
                                autoStart: true,
                                loop: true,
                                deleteSpeed: 50,
                            }}
                            style = {{color: 'white'}}
                        />
                    </div> 
                    <div class="lg:pl-36 items-center justify-center">
                        <p>
                        I am currently a student in Software Engineering, at VNUHCM - University of Science. 
                        I am passionate about Software Development. Besides that, I am also interested in Research and Computer Science. 
                        I am always curious about new things and always willing to learn new knowledge. 
                        </p>
                        <br />
                        <p>
                            I have many dreams and am still striving to realize them. Additionally, 
                            I also want to contribute to the community and the people around me. 
                        </p>
                        <br />
                        <p>
                            Hope to bring you interesting things and the opportunity to work together in the future.
                        </p>
                    </div>
                </div>
                <div className="w-1/2 flex justify-center items-center">
                    <img src={images[currentImage]} alt="" className="h-1/2 w-100 rounded-2xl lg:rotate-2 transition-all duration-500 ease-in-out" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}/>
                </div>
            </div>        
        </div>
    );
}