import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Rating from '../components/UI/Rating';
import Price from '../components/UI/Price';
import Book from '../components/UI/Book';

function BookInfo(props) {
  const { id } = useParams();
  const bookEle = props.book.find((obj) => +obj.id === +id);
// + converts string to number since id is from the url so its a string

  function bookExistsOnCart() {
    return props.cart.find((book) => book.id === +id);
  }

  return (
    <div id="books__body">
      <main id="books__main">
        <div className="books__container">
          <div className="row">
            <div className="book__selected--top">
              <Link to='/books' className='book__link'>
                <FontAwesomeIcon icon='arrow-left' />
              </Link>
              <Link to='/books' className='book__link'>
                <h2 className="book__selected--title--top">Books</h2>
              </Link>
            </div>
            <div className="book__selected">
              <figure className="book__selected--figure">
                <img src={bookEle.url} alt="" className="book__selected--img" />
              </figure>
            <div className="book__selected--description">
              <h2 className="book__selected--title">
                {bookEle.title}
              </h2>
              <Rating rating={bookEle.rating}/>
              <div className="book__selected--price">
                <Price sale={bookEle.salePrice} original={bookEle.originalPrice}/>
              </div>
              <div className="book__summary">
                <h3 className="book__summary--title">
                  Summary
                </h3>
                <p className="book__summary--para">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
                    Eveniet repudiandae possimus quaerat eligendi labore libero cumque ipsam, 
                </p>
                <p className="book__summary--para">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
                    Eveniet repudiandae possimus quaerat eligendi labore libero cumque ipsam, 
                </p>
              </div>
              {
                bookExistsOnCart() 
                ? <><button className="btn" onClick={() => props.addToCart(bookEle)}>Add Another</button>
                    <br />
                    <Link to={`/cart`} >
                      <button className="btn" style={{marginTop:'1rem'}}>Checkout</button>
                    </Link>
                  </>
                : <button className="btn" onClick={() => props.addToCart(bookEle)}>
                  Add to Cart
                  </button>
              }
            </div>
          </div>
        </div>
        <div className="books__container">
           <div className="row">
              <div className="book__selected--top">
                <h2 className="book__selected--title--top">
                Recommended Books
                </h2>
              </div>
              <div className="books">
                {props.book
                  .filter((element) => element.rating === 5 && element.id != bookEle.id)
                  .map((element, index) => <Book key={index} info = {element}/>)
                  .splice(0,4)
                }
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

export default BookInfo 