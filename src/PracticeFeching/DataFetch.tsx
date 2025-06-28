import React, { useEffect, useState } from "react";
import { IUserInterface } from "./IUserInterface";
import { Dataservice } from "./Dataservice";
import { stat } from "fs";
interface IState{
    loading:boolean;
    errormsg: string;
    users: IUserInterface[];
}

export const DataFetch: React.FC =()=>{
    const [state, setState] = useState<IState>({
      loading: true,
      errormsg: "",
      users: [] as IUserInterface[],
    });

    useEffect(()=>{
        setState({
            ...state,
            loading:true,
        })
        Dataservice.getUsers()
       .then((response)=>{
        setState({
            ...state,
            loading:false,
            users:response.data
        })
       })
       .catch((err)=>{
        setState({
            ...state,
            errormsg: err.message,
        })
       })
    },[])
    return(
        <div>
            {state.errormsg && <h1>{state.errormsg}</h1>}
            {state.loading && <h1>Loading...</h1>}
            <table>
                <thead>
                    <tr>
                        <td>Id</td>
                        <td>Name</td>
                        <td>email</td>
                        <td>userName</td>
                    </tr>
                </thead>
                <tbody>
                    {state.users.length >0 && state.users.map((users,id)=>{
                        return (
                          <tr key={id}>
                            <td>{users.id}</td>
                            <td>{users.name}</td>
                            <td>{users.email}</td>
                            <td>{users.username}</td>
                          </tr> 
                        );
                    })}
                   

                </tbody>
            </table>

        </div>
    )
}