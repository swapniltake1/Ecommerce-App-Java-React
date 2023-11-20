import React from 'react';
import { createRoot } from 'react-dom/client'; // Updated import
import App from './App';

const root = document.getElementById('root');
const rootContainer = createRoot(root);
rootContainer.render(<App />);
