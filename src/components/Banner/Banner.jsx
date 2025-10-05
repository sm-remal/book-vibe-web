import React from 'react';
import bookImage from '../../assets/books.jpg'

const Banner = () => {
    return (
        <div className='flex flex-col md:flex-row justify-between items-center p-3 md:px-20 md:py-16 bg-gray-100'>
            <div className='space-y-6 md:space-y-10 text-center md:text-left my-5'>
                <h1 className='text-3xl md:text-4xl lg:text-4xl xl:text-5xl font-bold md:leading-16'>Books to freshen up <br /> your bookshelf</h1>
                <button className='btn bg-green-600 hover:bg-green-700 text-white'>View The List</button>
            </div>
            <div className='pb-6 md:pb-0'>
                <img src={bookImage} alt="" className='md:w-[480px] rounded-2xl' />
            </div>
        </div>
    );
};

export default Banner;