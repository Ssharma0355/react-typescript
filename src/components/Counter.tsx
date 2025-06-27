import React, { useState } from "react"
interface ISTATE{
    count: number;
}
interface IPROPS{}
export const Counter: React.FC =()=>{
    const [state,setState] = useState<ISTATE>({count:0})
    const increment=()=>{
    setState({count:state.count+1})
    }
    const decrement =()=>{
    setState({ count: state.count - 1 });
    }
    return(
        <>
        <h1>Counter Event Handler</h1>
        <div className="row">
            <div className="col-md-4">
                <div className="card">
                    <h2 className="display-3">{state.count}</h2>
                    <button className="btn btn-success m-3" onClick={()=>increment()}>Increment</button>
                    <button className="btn btn-danger m-3" onClick={()=>decrement()}>Decrement</button>
                </div>
            </div>
        </div>
        </>
    )
}