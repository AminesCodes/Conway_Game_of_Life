import React, { useState } from 'react';

import './assets/bootstrap/css/bootstrap.min.css';

import Grid from './components/Grid'

function App() {
  const [ rows, setRows ] = useState(0);
  const [ columns, setColumns ] = useState(0);
  const [ ratio, setRatio ] = useState(1);

  const handleGridSize = (event) => {
    console.log(event.target.value);
    setRows(event.target.value);
    setColumns(event.target.value);
  }

  return (
    <div className='container-fluid text-center bg-light m-3'>
      <label htmlFor='gridSize'>
        <input type='range' className='custom-range' id='gridSize' min='30' max='1000'  onChange={handleGridSize} />
      </label>
      <Grid rows={rows} columns={columns} setRatio={setRatio} />
      
    </div>
  );
}

export default App;
