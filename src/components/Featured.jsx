import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import Book from './UI/Book';
import { books } from '../data.js'

const Featured = () => {
  return (
    <div>
      <section id="features">
        <div className="container">
          <div className="row">
            <h2 className="section__title">
              Featured <span className="purple">Books</span>
            </h2>
            <div className="books">
              {books
                .filter((book) => book.rating === 5)
                .splice(0,4)
                .map((book) => <Book key={book.id} info={book}/>)
              }
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Featured;
