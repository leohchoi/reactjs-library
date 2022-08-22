import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import LibraryLogo from '../assets/Library.svg'
import { Link } from 'react-router-dom'

class Nav extends React.Component {
  constructor() {
    super();
    this.state = {

    }
    this.openMenu = this.openMenu.bind(this);
  }

  openMenu() {
    document.body.classList += ' menu--open';
  }

  closeMenu = () => {
    document.body.classList.remove('menu--open');
  }

  render() {
    return (
      <nav>
        <div className="nav__container">
          <Link to="/">
            <img src={LibraryLogo} alt="" className="logo" />
          </Link>
          <ul className="nav__links">
            <li className="nav__list">
              <Link to="/reactjs-library/" className="nav__link">Home</Link>
            </li>
            <li className="nav__list">
              <Link to="/books" className="nav__link">Books</Link>
            </li>
            <button className="btn__menu" onClick={() => this.openMenu()}>
              <FontAwesomeIcon icon='bars' />
            </button>
            <li className="nav__icon">
              <Link to="/cart" className='nav__link'>
                <FontAwesomeIcon icon='shopping-cart' />
              </Link>
              {this.props.totalItems ? <span className="cart__length">{this.props.totalItems}</span> : null}
            </li>
          </ul>
          <div className="menu__backdrop">
            <button className="btn__menu btn__menu--close" onClick={this.closeMenu}> 
              {/* cant do this.closeMenu() or else itll be stuck also cant do ()=>this.closeMenu without () or it'll be stuck */}
              <FontAwesomeIcon icon='times'/>
            </button>
            <ul className="menu__links">
              <li className="menu__list">
                <Link to="/reactjs-library/" className="menu__link">Home</Link>
              </li>
              <li className="menu__list">
                <Link to="/books" className="menu__link">Books</Link>
              </li>
              <li className="menu__list">
                <Link to="/cart" className="menu__link">Cart</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    )
  }
}
export default Nav;
