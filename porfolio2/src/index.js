import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import { HashRouter } from 'react-router-dom';

import './fonts/Franchise-Free-Bold.ttf'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>

    <HashRouter>
    <App />
    </HashRouter>
    
  </React.StrictMode>
);


