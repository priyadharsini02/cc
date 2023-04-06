import React from 'react';
import './Company.css';

function Header() {
  return (
    <header>
    <h2 id='title'>ALDRIN FURNITURES</h2>
      <img src="https://img.freepik.com/premium-vector/professional-logo-design_695730-12.jpg?w=2000" alt="Company logo" id="logo"/>
      
      <nav class="topnav">
      
          <a href="#">Home</a>
          <a href="#">Products</a>
          <a href="#about">About</a>
          <a href="#phn">Contact</a>
        
      </nav>
    </header>
  );
}

export default Header;