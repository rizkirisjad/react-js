/** @format */

import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { books } from './books';
import Book from './Book';

const Booklist = () => {
  return (
    <>
      <h1>amazon best sellers</h1>
      <section className="booklist">
        {books.map((item, index) => {
          return <Book {...item} key={item.id} number={index} />;
        })}
      </section>
    </>
  );
};

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<Booklist />);
