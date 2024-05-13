import React from 'react';
import styles from './ExternalLinks.module.css';

const ExternalLinks = () => {
  return (
    <div className={styles.externalLinks}>
      <h2>External Links</h2>
      <p>Explore more about our interests:</p>
      <ul>
        <li><a href="https://www.example.com" target="_blank" rel="noopener noreferrer">Example Link 1</a></li>
        <li><a href="https://www.anotherexample.com" target="_blank" rel="noopener noreferrer">Example Link 2</a></li>
      </ul>
    </div>
  );
};

export default ExternalLinks;
