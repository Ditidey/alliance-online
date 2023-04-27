import React, { memo } from 'react';
import Marquee from 'react-fast-marquee';

const Footer = memo(() => {
    return (
        <div className='bg-black px-20 pt-10 pb-2'>
            <Marquee speed={80}>
            <p className='text-yellow-50 my-5'>All credit goes to Diti Rani Dey who designed, developed and worked for it.</p>
            </Marquee>
              
            <p className='text-white text-center text-sm'> &copy; Copy Right 2023!</p>
        </div>
    );
});

export default Footer;