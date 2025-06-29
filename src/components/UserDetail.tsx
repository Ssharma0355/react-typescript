import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { IUserInterface } from "../PracticeFeching/IUserInterface";
import { User } from "lucide-react";
import { Userapiservice } from "../services/Userapiservice";
import { error } from "console";

interface IParams {
    id:number;
}
interface Istate{
    loading:boolean;
    errormsg:"";
    user:IUserInterface;

}


export const UserDetail: React.FC = () => {
    const {id} = useParams<IParams | any>();
    const [state,setState] = useState<Istate>({
        loading:true,
        user:{} as IUserInterface,
        errormsg:""
    })
    useEffect(() => {
      if (id) {
        setState({...state,loading:false,errormsg:""})
        Userapiservice.getSingleUser(id)
        .then((res) => {
          setState({
            ...state,
            loading:false,
            user:res.data
          });
        })
        .catch((error)=>{
            setState({
                ...state,
                loading:true,
                errormsg:error.message
            })
        })
      }
    }, [id]);
    const {loading, user,errormsg} = state
    return(
        <>
        <Link to={'/'}>GO Back</Link>
        <h1 className="text-color-black">Single user deatils </h1>
        <h4>URL Params : {id}</h4>
        <div>
            {/* {state.users.length > 0 && } */}
            {loading && <h1>Loading...</h1>}
            {errormsg && <h1>{errormsg}</h1>}
            {
                Object.keys(user).length >0 && (
                    <div>
                        <h1>{user.name}</h1>
                    </div>
                )
            }
        </div>
        </>
    )
}