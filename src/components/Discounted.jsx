import React from 'react'
import Book from './UI/Book';
import { books } from '../data.js'

class Discounted extends React.Component {
  constructor() {
    super();
    this.state = {
      
    }
  }

  render() {
    return (
      <section id="recent">
        <div className="container">
          <div className="row">
            <h2 className="section__title">
              Discounted <span className="purple">Books</span>
            </h2>
            <div className="books">
              {
                books.map((book, index) => book.salePrice && <Book key={index} info = {book}/>)
                // remember double ampersand means if first is true, render second. If first is false, then do nothing. same as below
                // book.salePrice ? <Book key={index} info = {book}/> : null 
                // or coulda done books.filter((book) => book.salePrice).map((book, index) => <book key={index} info = {book}/>)
              }
            </div>
          </div>
        </div>
      </section>
    )
  }
}

export default Discounted