import React from 'react';
import ReactDOM from 'react-dom';
import '../css/style.css';
import App from './App.jsx';


// Render the application by placing the App component into the 'root' HTML element.
ReactDOM.render(
  <React.StrictMode>
    {/* 
      Render the 'App' component inside a 'React.StrictMode' wrapper.
      The 'isRegisterMode' prop is set to 'false' to initially show the login mode.
    */}
    <App isRegisterMode={false} />
  </React.StrictMode>,
  document.getElementById('root') // Render the application in the root HTML element.
);


const navToggle = document.querySelector('.nav-toggle');
navToggle.addEventListener('click', () => {
    document.body.classList.toggle('nav-open'); 
});


