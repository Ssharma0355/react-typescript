import React from 'react';
import './App.css';
import Customer from './components/Customer';
import UsersClass  from './components/UsersClass';
import { HandleState } from './components/HandleState';
import HandleStateClass from './components/HandleStateClass';
import { Counter } from './components/Counter';
import { PracticeCounter } from './practice/PracticeCounter';
import { FunctionParameter } from './components/FunctionParameter';
import { Login } from './components/Login';
import { ConditionalRendering } from './components/ConditionalRendering';
import { Looping } from './components/Looping';
import { DisplayUsers } from './components/DisplayUsers';
import { ShowUsers } from './components/ShowUsers';
import { FetchUser } from './FetchingData/FetchUser';

function App() {
  let bg={
    backgroundColor:"blue",
    color:"red",
  }
  return (
    <div>
      <h1 className='bg-dark' style={bg}>Props</h1>
      {/* <Customer name="Sachin" age={23} />
      <UsersClass userId={123} />
      <HandleState />
      <HandleStateClass /> */}


      {/* <Counter />
      <PracticeCounter /> */}

      {/* <FunctionParameter /> */}

      {/* <Login /> */}
      {/* <ConditionalRendering /> */}
      {/* <Looping /> */}
      {/* <DisplayUsers /> */}

      <ShowUsers />
      <FetchUser />
    </div>
  );
}

export default App;
