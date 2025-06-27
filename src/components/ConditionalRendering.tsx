import React, { useState } from 'react'
import { Login } from './Login';
interface IState{
    isLoggedIn:boolean;
}

export const ConditionalRendering: React.FC=()=> {
    const [state, setState] = useState<IState>({
        isLoggedIn: false
    })
    const changeCondition =():void=>{
        setState({isLoggedIn:!state.isLoggedIn})

    }
  return (
    <div>
      {state.isLoggedIn && state.isLoggedIn ? (
        <h1>Welcom on Board</h1>
      ) : (
        <div>
          <h1>PLease Login</h1>
          <Login />
        </div>
      )}
      <div>
        <button onClick={() => changeCondition()} className="btn btn-success">
          Login
        </button>
        <button onClick={() => changeCondition()} className="btn btn-danger">
          Logout
        </button>
      </div>
    </div>
  );
}

