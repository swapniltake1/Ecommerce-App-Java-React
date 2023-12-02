import React from 'react';
import { createRoot } from 'react-dom/client'; // Updated import
import App from './App';
import './index.css';

const root = document.getElementById('root');
const rootContainer = createRoot(root);
rootContainer.render(<App />);
