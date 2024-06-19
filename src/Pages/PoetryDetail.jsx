import React from 'react';
import { useParams } from 'react-router-dom';
import { Poems } from './data'; 

const PoetryDetail = () => {
    const { title } = useParams();
    const poem = Poems.find(poem => poem.title.toLowerCase().replace(/\s+/g, '-') === title);

    if (!poem) {
        return <div>Poem not found</div>;
    }

    const poemStyles = {
        whiteSpace: 'pre-line',
    };

    const otherPoems = Poems.filter(item => item.title !== poem.title);

    return (
        <div className="dark:bg-black dark:text-white text-yellow-300">
            <div className="flex">
                <div className="flex-1 text-center items-center justify-center flex flex-col p-10">
                    <img src={poem.img} alt={poem.title} className="w-96 h-96 object-cover mb-3 rounded-lg m-auto" />
                    <h2 className="text-3xl pt-5">{poem.title}</h2>
                    <p className="text-xl text-left" style={poemStyles}>{poem.scripts}</p>
                    <p className="pl-60 pt-5 italic text-xl">{poem.date}</p>
                </div>
                <div className="w-1/4 p-5">
                    <h3 className="text-xl mb-3 text-yellow-400 dark:text-white">Other Poems</h3>
                    <ul className="divide-y divide-gray-300">
                    {otherPoems.map((item, index) => (
                        <li key={index} className="py-2">
                        <a
                            href={`/poetry/${item.title.toLowerCase().replace(/\s+/g, '-')}`}
                            className="text-yellow-400 hover:underline dark:text-white" 
                        >
                            {item.title}
                        </a>
                        </li>
                    ))}
                    </ul>
                </div>
            </div>
      </div>
    );
};

export default PoetryDetail;
