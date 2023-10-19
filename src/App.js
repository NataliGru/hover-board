import React, { useEffect, useState } from 'react';
import './App.css';
import { getModes } from './api';
import { Dropdown } from './dropdown';

export function App() {
  const [modes, setModes] = useState([]);
  const [curentSize, setCurrentSize] = useState('');

  useEffect(() => {
    getModes()
      .then((data) => {
        console.log(data, 'data');
        setModes(data);
      })
      .catch((error) => {
        console.error('There was a problem with the fetch operation:', error);
      });
  }, []);
  

  console.log(modes, 'modes');

  return (
    <div className="App">
      {modes.length > 0 && (
        <Dropdown modes={modes} onModeChange={setCurrentSize} />
      )}
    </div>
  );
}
