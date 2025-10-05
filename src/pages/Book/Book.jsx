import React from 'react';
import { FaStar } from 'react-icons/fa';
import { Link } from 'react-router';

const Book = ({ singleBook }) => {
    const {bookId, bookName, category, image, author, rating, tags } = singleBook
    return (
        <Link to={`/bookDetails/${bookId}`}>
            <div className='border-2 border-gray-100 shadow-lg rounded-xl overflow-hidden'>
                <div className='m-5 py-5 flex justify-center items-center bg-gray-100 rounded-xl'>
                    <img src={image} alt="" className='w-[200px] h-[260px] rounded-xl overflow-hidden' />
                </div>
                <div className='px-5 space-y-5 mt-4'>
                    <div className='flex gap-4'>
                        <h3 className='bg-green-200 border-1 border-green-600 rounded-full px-3 py-1 text-[14px]'>{tags[0]}</h3>
                        <h3 className='bg-green-200 border-1 border-green-600 rounded-full px-3 py-1 text-[14px]'>{tags[1]}</h3>
                    </div>
                    <h2 className='text-lg md:text-xl lg:text-2xl font-bold text-gray-700'>{bookName}</h2>
                    <h2 className='text-md md:text-lg lg:text-xl font-medium text-gray-600'>By: {author}</h2>
                    <hr />
                    <div>
                        <div className='flex justify-between items-center pb-6'>
                            <h3 className='font-bold text-gray-500'>{category}</h3>
                            <div className='flex gap-2 items-center'>
                                <span className='font-semibold text-gray-500'>{rating}</span>
                                <span className='text-yellow-500'><FaStar /></span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Link>
    );
};

export default Book;