import React from 'react';
import './Company.css';

function Footer() {
  return (
    <footer>
      <div className="contact">
        <h4>Reach Us</h4>
        <p id="phn">No 39,Cross Street</p>
        <p>Gandhipuram,Coimbatore-641005</p>
        
        <p>Email: aldrin@company.com</p>
      </div>
      <div className="social">
        <h4>Connect With Us</h4>
        <ul>
          <a href="#">Facebook</a><br></br>
          <a href="#">Twitter</a><br></br>
          <a href="#">Instagram</a><br></br>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;