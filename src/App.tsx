import React from 'react';
import './App.css';
import Customer from './components/Customer';

function App() {
  let bg={
    backgroundColor:"blue",
    color:"red",
  }
  return (
    <div>
      <h1 className='bg-dark' style={bg}>Helo Sachin</h1>
      <h2>Sachin</h2>
      <Customer />
    </div>
  );
}

export default App;
