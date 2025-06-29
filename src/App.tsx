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
import { DataFetch } from './PracticeFeching/DataFetch';

import {Routes, Route} from "react-router-dom"
import { Navbar } from './components/Navbar';
import { UserDetail } from './components/UserDetail';

function App() {
  let bg={
    backgroundColor:"blue",
    color:"red",
  }
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<ShowUsers />} />
        <Route path="/users/:id" element={<UserDetail />} />
        <Route path="/userlist" element={<DataFetch />} />
      </Routes>
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

      {/* <ShowUsers />
      <FetchUser /> */}
    </>
  );
}

export default App;
