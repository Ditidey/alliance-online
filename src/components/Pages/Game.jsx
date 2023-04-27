import React from 'react';
import Marquee from "react-fast-marquee";
const Game = () => {
    return (
        <div className='container'>
            <button className='border bg-blue-300 p-2 w-28 rounded-lg lg:ms-52 sm:ms-4 me-2 hover:bg-blue-600'>29</button>
            <button className='border bg-green-300 p-2 w-28 rounded-lg me-2 hover:bg-green-600'>FIFA</button>
            <button className='border bg-red-300 p-2 w-28 rounded-lg me-2 hover:bg-red-600'>Chess</button>
            <button className='border bg-yellow-300 p-2 w-28 rounded-lg me-2 hover:bg-yellow-600'>Ludo</button>
              <div className='mx-auto my-20 bg-green-100 h-56 w-96 border-red-600 rounded-lg shadow-xl'>
                      <p className='h-14 w-14 rounded-full bg-yellow-300 shadow-md animate-bounce'></p>
              </div>
            <Marquee speed={100}  >
                <h3 className='text-4xl mt-10 text-blue-900 font-semibold'>Play which one you love and make your playmate!
                    <span className='text-red-800 font-bold'>Chill Dear Chill!!</span> </h3>
            </Marquee>

        </div>
    );
};

export default Game;