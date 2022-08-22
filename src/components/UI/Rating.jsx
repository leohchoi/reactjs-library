import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Rating = (props) => {
  return (
      <div className='book__ratings'>
        {new Array(Math.floor(props.rating)).fill(0).map((_, index) => <FontAwesomeIcon icon='star' key={index}/>)}
        {props.rating % 1 != 0 //coulda used Math.isInteger()
          ? <><FontAwesomeIcon icon='star-half-alt' /></>
          : null
        }
      </div>
  );
}

export default Rating;
