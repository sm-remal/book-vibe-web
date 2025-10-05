import React from 'react';
import { useLoaderData, useParams } from 'react-router';

const BookDetails = () => {
    const {id} = useParams();
    const bookId = parseInt(id);
    const data = useLoaderData()
    const singleBook = data.find(book => book.bookId === bookId);
    console.log(singleBook)

    const {bookName, rating, image, author, tags, review, totalPages, publisher, yearOfPublishing} = singleBook
    
    return (
        <div className='flex flex-col md:flex-row items-center gap-6 m-4 md:m-10'>
            <div className='flex-1 flex justify-center bg-gray-200 py-12 px-10 md:px-0 rounded-2xl'>
                <img src={image} alt="" className='w-[380px] md:h-[560px]' />
            </div>
            <div className='flex-1 space-y-3.5'>
                <h1 className='text-lg md:text-xl lg:text-2xl font-bold text-gray-700'>{bookName}</h1>
                <h3 className='text-md md:text-lg lg:text-xl font-medium text-gray-600'>{author}</h3>
                <hr />
                <p className='text-md md:text-lg lg-text-xl font-medium text-gray-500'>{tags[0]}</p>
                <hr />
                <p> <span className='font-bold text-gray-500'>Review:</span> <span className='text-gray-500 text-[15px]'>{review}</span></p>
                <h3><span className='font-bold text-gray-500'>Tag:&nbsp; &nbsp; </span> <span className='text-[14px] text-green-600'>#Young Adult</span>&nbsp; &nbsp;  <span className='text-[14px] text-green-600'>#Identity</span></h3>
                <hr />
                <p><span className='text-gray-500 text-[15px]'>Number of page:</span> &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; {totalPages}</p>
                <p> <span className='text-gray-500 text-[15px]'>Publisher:</span> &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; {publisher}</p>
                <p> <span className='text-gray-500 text-[15px]'>Year of Publishing:</span>&nbsp; &nbsp; &nbsp; &nbsp;  {yearOfPublishing}</p>
                <p> <span className='text-gray-500 text-[15px]'>Rating:</span>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;  {rating}</p>
                <div className='flex gap-3'>
                    <button className='btn'>Mark as Read</button>
                    <button className='btn btn-info text-white'>Add to Wishlist</button>
                </div>
            </div>
        </div>
    );
};

export default BookDetails;