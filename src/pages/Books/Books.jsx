import React, { Suspense } from 'react';
import Book from '../Book/Book';

// const booksPromise = fetch('bookData.json').then(res => res.json())

const Books = ({bookData}) => {
    return (
        <div className='my-10'>
            <h2 className='text-4xl font-bold text-center'>Books</h2>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-6 mt-8'>
                <Suspense fallback={<span>Loading...</span>}>
                {
                    bookData.map(singleBook => <Book key={singleBook.bookId} singleBook={singleBook} ></Book>)
                }
            </Suspense>
            </div>
        </div>
    );
};

export default Books;