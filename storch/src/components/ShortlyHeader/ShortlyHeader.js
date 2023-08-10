import React, { useState } from 'react';
import '../../App.css';
import logo from './logo.svg';

function ShortlyHeader () {
  return (
    <header className="navbar">
    <nav>
      <ul>
        <li><img src={logo}/></li>
        <li><a href="">Features</a></li>
        <li><a href="">Pricing</a></li>
        <li><a href="">Resources</a></li>
        <li><a href="">Login</a></li>
        <li><a href="">Sign Up</a></li>
      </ul>
    </nav>
  </header>
  );
}

export default ShortlyHeader;