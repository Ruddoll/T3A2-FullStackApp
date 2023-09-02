import React from 'react';
import { useState, useEffect } from 'react';
import AvailableClasses from './AvailableClasses';

function App() {
  const [availableClasses, setAvailableClasses] = useState([]);

  useEffect(() => {
    fetch('/api/classes/available')
      .then(response => response.json())
      .then(data => {
        setAvailableClasses(data);
      })
      .catch(error => {
        console.error('Error fetching available classes:', error);
      });
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <h1>Gym App</h1>
      </header>
      <main>
        <AvailableClasses availableClasses={availableClasses} />
      </main>
    </div>
  );
}

export default App;






