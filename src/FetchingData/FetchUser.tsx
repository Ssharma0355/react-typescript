import React, { useEffect, useState } from "react";
import { UserServices } from "./UserServices";
import { IUserInterface } from "./IUserInterface";

interface IState {
  loading: boolean;
  errormsg: string;
  users: IUserInterface[];
}

export const FetchUser: React.FC = () => {
    const [state,setState] = useState<IState>({
        loading:false,
        users:[] as IUserInterface[], //empty array as initial state
        errormsg:""
    })

    // effect to fetch data
    useEffect(()=>{
        setState({
          ...state,
          loading: true
        });
        UserServices.getUsers()
        .then((res)=>setState({...state,loading:false, users:res.data}))
        .catch((error)=>{
            setState({
                ...state,
                loading:false,
                errormsg:error.message
            })
        })

    },[])
    return(
        <div>
            <h1>Fetching Data</h1>
            {state.errormsg && <p>{state.errormsg}</p>}
            {state.loading && <p>Loading...</p>}
            <table>
                <thead>
                    <tr>
                        <td>ID</td>
                        <td>Name</td>
                        <td>UserName</td>
                        <td>Email</td>
                    </tr>
                </thead>
                <tbody>
                    {state.users.length >0 && state.users.map((user)=>{
                        return (
                          <tr key={user.id}>
                            <td>{user.name}</td>
                          </tr>
                        );
                    })}
                   
                </tbody>
            </table>
        </div>
    )
}