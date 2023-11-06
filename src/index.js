import React from 'react';
import ReactDOM from 'react-dom/client';
import './books.css'
import {books} from './books';
import Book from './Book';




const BookList = () => {
    return (
        <>
        <h1>Amazon BestSellers</h1>

        <section className='booklist'>
            {books.map((book, index) => {
                console.log(book.title)

                return (
                    <Book {...book} key={book.id} number={index}
                    /* <Book book={book} key={book.id} dispval = {dispVal} */
                    // we can also use spread operator in the above
                    // this will copy everything from book obj
                    />
                )})
            };
        </section>
        </>
    )
    
}




const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<BookList />);