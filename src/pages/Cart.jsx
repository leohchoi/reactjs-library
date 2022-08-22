import React from 'react';
import { Link } from 'react-router-dom'
import EmptyCart from '../assets/empty_cart.svg'

const Cart = (props) => {
  
  return (
    <div id='books__body'>
      <main id="books__main">
        <div className="books__container">
          <div className="row">
            <div className="book__selected--top">
              <h2 className="cart__title">
                Cart
              </h2>
            </div>
            <div className="cart">
              <div className="cart__header">
                <span className="cart__book">Book</span>
                <span className="cart__quantity">Quantity</span>
                <span className="cart__total">Total</span>
              </div>
              <div className="cart__body">
                {
                  props.cart.map((book) => {
                    return (
                      <div className="cart__item" key={book.id}>
                        <div className="cart__book">
                          <img src={book.url} alt="" className="cart__book--img" />
                          <div className="cart__book--info">
                            <span className="cart__book--title">
                              {book.title}
                            </span>
                            <span className="cart__book--price">
                              ${(book.salePrice || book.originalPrice).toFixed(2)}
                            </span>
                            <button className="cart__book--remove" onClick={() => props.remove(book)}>
                              Remove
                            </button>
                          </div>
                        </div>
                        <div className="cart__quantity">
                          <input 
                            type="number" 
                            min='0' 
                            max='99' 
                            className='cart__input' 
                            value={book.quantity}
                            onChange={(event) => props.changeQuantity(book, Number(event.target.value))} />
                        </div>
                        <div className="cart__total">
                          ${(book.quantity * (book.salePrice || book.originalPrice)).toFixed(2)}
                        </div>
                      </div>
                    )
                  })
                }
              </div>
              {
                props.cart.length === 0 && <div className="cart__empty">
                  <img src={EmptyCart} alt="" className="cart__empty--img" />
                  <h2>You Don't Have Any Books In Your Cart!</h2>
                  <Link to='/books'>
                    <button className="btn">Browse Now</button>
                  </Link>
                </div>
              }
            </div>
            {
              props.cart.length > 0 && <div className="total">
                <div className="total__item total__sub-total">
                  <span>Subtotal</span> 
                  <span>${props.total.subtotal}</span> 
                </div>
                <div className="total__item total__tax">
                  <span>Tax</span> 
                  <span>${props.total.tax}</span> 
                </div>
                <div className="total__item total__price">
                  <span>Total</span> 
                  <span>${props.total.final}</span> 
                </div>
                <button className="btn btn__checkout no-cursor" onClick={() => alert('Have Not Implemented Yet')}>
                  Proceed to Checkout
                </button>
              </div>
            }  
          </div>
        </div> 
      </main>
    </div>
  );
}

export default Cart;
