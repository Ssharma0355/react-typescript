import React from 'react';
import './App.css';
import Customer from './components/Customer';
import UsersClass  from './components/UsersClass';

function App() {
  let bg={
    backgroundColor:"blue",
    color:"red",
  }
  return (
    <div>
      <h1 className='bg-dark' style={bg}>Props</h1>
      <Customer name="Sachin" age={23} />
      <UsersClass userId={123} />
    </div>
  );
}

export default App;
