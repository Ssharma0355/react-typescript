import React, { useState } from "react";
interface IState{
    user:{
        email:string;
        password:string
    }
}

export const Login: React.FC = () => {
    const [state, setState] = useState<IState>({
        user:{
            email: "",
            password: ""
        }
    })

    const handleForm = (e: React.ChangeEvent<HTMLInputElement>):void =>{
        setState({
            user:{
                ...state.user,
                [e.target.name]:e.target.value
            }
        })
    }
    return (
      <form>
        <div className="form-group">
          <label htmlFor="exampleInputEmail1">Email address</label>
          <input
            value={state.user.email}
            name="email"
            onChange={(e) => handleForm(e)}
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder="Enter email"
          />
        </div>
        <div className="form-group">
          <label htmlFor="exampleInputPassword1">Password</label>
          <input
            value={state.user.password}
            name="password"
            onChange={(e) => handleForm(e)}
            type="password"
            className="form-control"
            id="exampleInputPassword1"
            placeholder="Password"
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>

        <div>
          {/* <p>{JSON.stringify(state.user)}</p> */}
          {state.user.email && state.user.password ? (
            <>
              <p>state.user.email</p>
              <p>state.user.password </p>
            </>
          ) : (
            ""
          )}
        </div>
      </form>
    );
}