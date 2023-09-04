import React from 'react';
import ReactDOM from 'react-dom';
import './style.css';
import App from './App.jsx';

ReactDOM.render(
  <React.StrictMode>
    <App isRegisterMode={false} /> {/* Set to true to show registration mode */}
  </React.StrictMode>,
  document.getElementById('root')
);

const navToggle = document.querySelector('.nav-toggle');

navToggle.addEventListener('click', () => {
    document.body.classList.toggle('nav-open');
});

