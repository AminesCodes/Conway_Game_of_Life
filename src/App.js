import React, { useState } from 'react';

import './assets/bootstrap/css/bootstrap.min.css';

import Grid from './components/Grid'

function App() {
  // eslint-disable-next-line
  const [ rows, setRows ] = useState(10);
  // eslint-disable-next-line
  const [ columns, setColumns ] = useState(10);

  return (
    <div className='container-fluid text-center bg-light m-3'>
      <Grid rows={rows} columns={columns} />
      
    </div>
  );
}

export default App;
