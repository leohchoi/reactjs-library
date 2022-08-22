import React, { useState, useEffect } from 'react'
import Footer from './components/Footer.jsx'
import Nav from './components/Nav.jsx'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home.jsx'
import Books from './pages/Books.jsx'
import { books } from './data.js'
import BookInfo from './pages/BookInfo.jsx'
import Cart from './pages/Cart.jsx'
// setCart is async 

function App() {
  const [cart, setCart] = useState([]);
  const [total, setTotal] = useState([]);

  function addToCart(book, num) {
    if (book && num) {
      const duplicate = cart.find((element) => element.id === book.id);
      setCart(cart.map((element) => element.id === duplicate.id ? {...element, quantity: num} : {...element}))
    }
    else {
      const duplicate = cart.find((element) => element.id === book.id);
      if (duplicate) {
        setCart(cart.map((element) => element.id === duplicate.id ? {...element, quantity: element.quantity + 1} : {...element}))
      }
      else {
        setCart([...cart, {...book, quantity: 1}]);
      }
    }
  }

  function remove(book) {
    setCart(cart.filter((element) => element.id != book.id));
  }

  function totalItems() {
    let counter = 0;
    for (let i = 0; i < cart.length; i++) {
      counter += cart[i].quantity;
    }
    //cart.forEach(item => counter += item.quantity) works same
    return counter;
  }

  useEffect(() => {
    console.log(cart)
    let checkout = {
      subtotal: 0,
      tax: 0,
      final: 0
    }
    for (let i = 0; i < cart.length; i++) {
      checkout.subtotal += ((cart[i].salePrice || cart[i].originalPrice) * cart[i].quantity);
    }
    checkout.subtotal = checkout.subtotal.toFixed(2);
    checkout.tax = Number((checkout.subtotal * 0.06)).toFixed(2);
    checkout.final = ((+checkout.subtotal) + (+checkout.tax)).toFixed(2);
    setTotal(checkout);
    console.log(total)
  }, [cart]);

  return (
    <Router>
      <div className="App">
        <Nav totalItems={totalItems()}/> 
        {/* using () without => since we want it to run 24/7.*/}
        <Routes>
          <Route path='/' exact 
           element={<Home />}/>
          <Route path='/books' exact 
           element={<Books book={books}/>}/>
          <Route path='/books/:id' 
           element={<BookInfo book={books} addToCart={addToCart} cart={cart}/>} />
          <Route path='/cart' 
           element={<Cart book={books} cart={cart} changeQuantity={addToCart} total={total} remove={remove}/>} />
        </Routes>
        <Footer />
      </div>
    </Router>
  )
}

export default App
