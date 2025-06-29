import React, { useEffect, useState } from "react";
import { Iusers } from "../practice/IUsers";
import { User } from "lucide-react";
import { Userapiservice } from "../services/Userapiservice";
import { Link } from "react-router-dom";
interface IState{
    loading:boolean;
    users:Iusers[];
    error:string;
}

export const ShowUsers: React.FC=()=>{
    const [state, setState] = useState<IState>({
        loading:false,
        users:[] as Iusers[], //empty array as initial state
        error:""
    })

    //netwrok req

    useEffect(()=>{
        setState({...state, loading:true});
        Userapiservice.getAllUsers()
        .then((res)=>setState({
            ...state,
            loading:false,
            users:res.data
        }))
        .catch((err)=>{
            setState({
                ...state,
                loading:false,
                error:err.message
            })

        })
    },[]);

    const {loading, users, error} = state;
    return(
        <div>
            <h1>Fetching data from the api</h1>
            {error && (<p>{error}</p>)}
            {loading && (<p>Loading...</p>)}
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
                    {users.length >0 && users.map((user)=>{
                        return (
                          <tr key={user.id}>
                            <td>{user.id}</td>
                            <Link to={`users/${user.id}`} className="text-decorection-none">{user.username}</Link>
                            <td>{user.name}</td>
                        
                            <td>{user.email}</td>
                          </tr>
                        );
                    })}
                </tbody>
            </table>
        </div>
    )
}