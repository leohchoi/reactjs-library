import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Highlight from './UI/Highlight';

function Highlights() {
  return (
    <section id="highlights">
      <div className="container">
        <div className="row">
          <h2 className="section__title">
            Why Choose <span className="purple">Library</span>
          </h2>
          <div className="highlight__wrapper">
            <Highlight info={{
              icon: <FontAwesomeIcon icon='bolt' />,
              title: 'Easy And Quick',
              para: 'Get Access To Book You Purchased Online Instantly'
            }} />
            <Highlight info={{
              icon: <FontAwesomeIcon icon='book-open' />,
              title: '10,000+ Books',
              para: 'Books In All Your Favorite Genre'
            }} />
            <Highlight info={{
              icon: <FontAwesomeIcon icon='tags' />,
              title: 'Affordable',
              para: 'At The Most Affordable Prices In The Market'
            }} />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Highlights;
