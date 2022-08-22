import React from 'react'
import { useState } from 'react'
import Book from '../components/UI/Book.jsx'

function Books(props) {
  const [books, setBooks] = useState(props.book);

  function filterBooks(event) {
    const optionValue = event.target.value;
    //splice(index, # of elements removed) <- this returns the removed elements and leaves original array with the leftovers
    //slice(start index, end index(exclusive)) <- returns a copy of the original array between the indicies. leaves original array intact
    if (optionValue === 'LOW_TO_HIGH') {
        setBooks(books.slice().sort((a,b) => (a.salePrice || a.originalPrice) - (b.salePrice || b.originalPrice)));
        console.log(books);
    }
    else if (optionValue === 'HIGH_TO_LOW') {
        setBooks(books.slice().sort((a,b) => (b.salePrice || b.originalPrice) - (a.salePrice || a.originalPrice)));      
    }
    else {
        setBooks(books.slice().sort((a,b) => b.rating - a.rating));
    }
  }
  return (
    <div id="books__body">
      <main id="books__main">
        <section>
          <div className="books__container">
            <div className="row">
              <div className="books__header">
                <h2 className="section__title books__header--title">
                  All Books
                </h2>
                <select id="filter" defaultValue='DEFAULT' onChange={filterBooks}>
                  {/* or you can do onChange={(event)=>filterBooks(event)} */}
                  <option value="DEFAULT" disabled>Sort</option>
                  <option value="LOW_TO_HIGH">Price, Low to High</option>
                  <option value="HIGH_TO_LOW">Price, High to Low</option>
                  <option value="RATING">Rating</option>
                </select>
              </div>
              <div className="books">
                {books.map((book) => <Book key={book.id} info={book}/>)}
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}

export default Books