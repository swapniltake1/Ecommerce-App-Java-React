// DynamicText.js
import React, { useState, useEffect } from 'react';
import './DynamicText.css';

const DynamicText = () => {
  const [text, setText] = useState('Welcome to Our Website!');
  const [textColor, setTextColor] = useState('#000'); // Initial color, you can set it to any default color

  useEffect(() => {
    const interval = setInterval(() => {
      setText((prevText) => {
        if (prevText === 'Welcome to Our Website!') {
          return 'We have the best offers for you!';
        } else {
          return 'Welcome to Our Website!';
        }
      });

      setTextColor(getRandomColor()); // Call function to get random color
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  // Function to generate random color
  const getRandomColor = () => {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  };

  return (
    <div className="text-container">
      <div className="dynamic-text" style={{ color: textColor }}>{text}</div>
    </div>
  );
};

export default DynamicText;
