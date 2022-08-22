import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom'
import Price from './Price';
import Rating from './Rating';
// import { books } from '../../data';
// wehn useState changes, whole component re=renders, when useRef changes, component does not re-render
// need to use ref .onload creates a memory leak cause it's getting called regardless of whether the component id mounted or not
// when it mounts, dont want re-rendering so using useref 
// now onload setImg only happens if mountedRef is true, which happens when it gets mounted

function Book(props) {
  const [img, setImg] = useState();
  const mountedRef = useRef(true);

  useEffect(() => {
    const image = new Image();
    image.src = props.info.url;
    image.onload = () => {
      setTimeout(() => {
        if (mountedRef.current) {
          setImg(image);
        }
      }, 300)
    };
    return () => {
      mountedRef.current = false;
    };
  });

  return (
    <div className="book">
      {
        img 
        ? <>
            <Link to={`/books/${props.info.id}`}>
              <figure className="book__img--wrapper">
                <img src={img.src} alt="" className="book__img"/>
              </figure>
            </Link>
            <div className="book__title">
              <Link to={`/books/${props.info.id}`} className="book__title--link">
                {props.info.title}
              </Link>
            </div>
            <Rating rating={props.info.rating}/>
            <Price sale={props.info.salePrice} original={props.info.originalPrice} />
          </>
        : <>
            <div className="book__img--skeleton"></div>
            <div className="skeleton book__title--skeleton"></div>
            <div className="skeleton book__rating--skeleton"></div>
            <div className="skeleton book__price--skeleton"></div>
          </>
      }
    </div>
  );
}

export default Book;
