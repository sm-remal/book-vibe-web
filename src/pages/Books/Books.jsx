import React, { Suspense } from 'react';
import Book from '../Book/Book';

// const booksPromise = fetch('bookData.json').then(res => res.json())

const Books = ({bookData}) => {
    return (
        <div>
            <h2>Books</h2>
            <Suspense fallback={<span>Loading...</span>}>
                {
                    bookData.map(singleBook => <Book key={singleBook.bookId} singleBook={singleBook} ></Book>)
                }
            </Suspense>
        </div>
    );
};

export default Books;