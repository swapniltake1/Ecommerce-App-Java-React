import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

const ProgressBar = () => {
  const [progressWidth, setProgressWidth] = useState(0);
  const location = useLocation();

  useEffect(() => {
    const progressBar = () => {
      const timeout = setTimeout(() => {
        setProgressWidth(0);
      }, 400); 

      return () => clearTimeout(timeout);
    };

    const updateProgressBar = () => {
      setProgressWidth(100);
      progressBar();
    };

    updateProgressBar();

    return () => {
      setProgressWidth(0);
    };
  }, [location]);

  const progressBarStyle = {
    width: `${progressWidth}%`,
    height: '4px',
    backgroundColor: 'red',
    transition: 'width 0.2s ease-in-out',
  };

  return <div style={progressBarStyle} />;
};

export default ProgressBar;
