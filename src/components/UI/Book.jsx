import React from 'react';
import { Link } from 'react-router-dom'
import Price from './Price';
import Rating from './Rating';
// import { books } from '../../data';

function Book(props) {
  return (
    <div className="book">
      <Link to={`/books/${props.info.id}`}>
        <figure className="book__img--wrapper">
          <img src={props.info.url} alt="" className="book__img" />
            </figure>
      </Link>
      <div className="book__title">
        <Link to={`/books/${props.info.id}`} className="book__title--link">
          {props.info.title}
        </Link>
      </div>
      <Rating rating={props.info.rating}/>
      <Price sale={props.info.salePrice} original={props.info.originalPrice} />
    </div>
  );
}

export default Book;
