// DynamicText.js
import React, { useState, useEffect } from 'react';
import './DynamicText.css';

const DynamicText = () => {
  const [text, setText] = useState('Welcome to Our Website!');

  useEffect(() => {
    const interval = setInterval(() => {
      setText((prevText) => {
        if (prevText === 'Welcome to Our Website!') {
          return 'We have the best offers for you!';
        } else {
          return 'Welcome to Our Website!';
        }
      });
    }, 2000); 

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="text-container">
      <div className="dynamic-text">{text}</div>
    </div>
  );
};

export default DynamicText;
