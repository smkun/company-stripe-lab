import React from 'react';
import styles from './ContactUs.module.css';

const ContactUs = () => {
  return (
    <div className={styles.contactUs}>
      <h2>Contact Us</h2>
      <p>Have questions? Contact us at:</p>
      <ul>
        <li>Email: contact@example.com</li>
        <li>Phone: 123-456-7890</li>
      </ul>
    </div>
  );
};

export default ContactUs;
