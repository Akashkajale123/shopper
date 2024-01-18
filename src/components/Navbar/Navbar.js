import React, { useState } from 'react';
import './Navbar.css';
import logo from '../../Assets/logo.png';
import cart_icon from '../../Assets/cart_icon.png';

const Navbar = () => {
  const [menu, setMenu] = useState('shop');

  return (
    <div className='navbar'>
      <div className="nav-logo">
        <img src={logo} alt="" />
        <p>SHOPPER</p>
      </div>
      <ul className="nav-menu">
        <li onClick={() => setMenu('shop')}>shop{menu==="shop"?<hr/>:<></>}</li>
        <li onClick={() => setMenu('mens')}>men{menu==="mens"?<hr/>:<></>}</li>
        <li onClick={() => setMenu('womens')}>women{menu==="womens"?<hr/>:<></>}</li>
        <li onClick={() => setMenu('kids')}>kids{menu==="kids"?<hr/>:<></>}</li>
      </ul>
      <div className="nav-login-cart">
        <img src={cart_icon} alt="" />
        <div className="nav-cart-count">0</div>
      </div>
    </div>
  );
}

export default Navbar;
