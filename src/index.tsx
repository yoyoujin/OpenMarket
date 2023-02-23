import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Globalstyle from './styles/GlobalStyled';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);
root.render(
  <React.StrictMode>
    <Globalstyle />
    <App />
  </React.StrictMode>,
);
