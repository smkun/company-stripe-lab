import React from 'react';
import styles from './NavBar.module.css';

const NavBar = ({ handleClick }) => {
  return (
    <div className={styles.navBar}>
      <button onClick={() => handleClick('Home')}>Home</button>
      <button onClick={() => handleClick('CompanyHistory')}>Company History</button>
      <button onClick={() => handleClick('PastWork')}>Past Work</button>
      <button onClick={() => handleClick('Staff')}>Staff</button>
      <button onClick={() => handleClick('ContactUs')}>Contact Us</button>
      <button onClick={() => handleClick('ExternalLinks')}>External Links</button>
      <button onClick={() => handleClick('Shop')}>Shop</button>
    </div>
  );
};

export default NavBar;
