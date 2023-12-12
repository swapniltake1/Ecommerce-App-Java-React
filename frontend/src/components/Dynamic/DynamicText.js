import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import './DynamicText.css';

const TextContainer = styled.div`
  font-size: 24px;
`;

const DynamicText = () => {
  const [text, setText] = useState('Welcome to Our Website!');
  const [textFont, setTextFont] = useState('Arial, sans-serif'); // Initial font family
  const [textColor, setTextColor] = useState('#000');

  useEffect(() => {
    const fonts = [
      'Arial, sans-serif',
      'Times New Roman, serif',
      'Georgia, serif',
      'Courier New, monospace',
      'Roboto, sans-serif',
      'Open Sans, sans-serif',
      'Lato, sans-serif',
      'Montserrat, sans-serif',
      'Roboto Condensed, sans-serif',
      'Oswald, sans-serif',
      'Raleway, sans-serif',
      'PT Sans, sans-serif',
      'Noto Sans, sans-serif',
      'Source Sans Pro, sans-serif',
      'Roboto Slab, serif',
      'Merriweather, serif',
      'Playfair Display, serif',
      'Ubuntu, sans-serif',
      'Droid Serif, serif',
      'Cabin, sans-serif'
    ];
    

    const interval = setInterval(() => {
      setText((prevText) => {
        if (prevText === 'Welcome to Our Website!') {
          return 'We have the best offers for you!';
        } else {
          return 'Welcome to Our Website!';
        }
      });

      setTextFont(fonts[Math.floor(Math.random() * fonts.length)]);
      setTextColor(getRandomColor());
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
    <div className='text-container '>
    <TextContainer className='dynamic-text' style={{  color: textColor,fontFamily: textFont }}>
      {text}
    </TextContainer>
    </div>
  );
};

export default DynamicText;
