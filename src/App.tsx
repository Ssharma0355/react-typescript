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
      <h1 className='bg-dark' style={bg}>Props</h1>
      <Customer name="Sachin" age={23} />
    </div>
  );
}

export default App;
