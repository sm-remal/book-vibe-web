import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { getStoredBook } from '../../utility/addToBD';
import Book from '../Book/Book';

const ReadList = () => {
    const [readList, setReadList] = useState([])
    const data = useLoaderData();
    useEffect(() => {
        const storedBookData = getStoredBook();
        const convertedStoreBooks = storedBookData.map(id => parseInt(id));
        const myReadList = data.filter(book => convertedStoreBooks.includes(book.bookId));
        setReadList(myReadList)
    }, [])
    return (
        <Tabs>
            <details className="dropdown">
                <summary className="btn m-1">sort by: </summary>
                <ul className="menu dropdown-content bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
                    <li><a>Pages</a></li>
                    <li><a>Rating</a></li>
                </ul>
            </details>
            <TabList>
                <Tab>Read Book List</Tab>
                <Tab>My Wish List</Tab>
            </TabList>

            <TabPanel>
                <h2>Book I Read: {readList.length}</h2>
                {
                    readList.map(book => <Book key={book.bookId} singleBook={book}></Book>)
                }
            </TabPanel>
            <TabPanel>
                <h2>My Wish List</h2>
            </TabPanel>
        </Tabs>
    );
};

export default ReadList;