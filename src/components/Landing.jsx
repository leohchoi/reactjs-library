import React from 'react';
import { Link } from 'react-router-dom'
import UndrawBooks from '../assets/Undraw_Books.svg'

const Landing = () => {
  return (
    <div>
      <section id="landing">
        <header>
          <div className="header__container">
            <div className="header__description">
              <h1><span className="purple">America's Most Awarded Library Platform</span></h1>
              <h2>Find Your Dream Book With <span className="purple">Library</span></h2>
              <a href="#features">
                <button className="btn">Browse Now</button>
              </a>
            </div>       
            <figure className="header__img--wrapper">
              <img src={UndrawBooks} alt="" />
            </figure>
          </div>
        </header>
      </section>
    </div>
  );
}

export default Landing;
