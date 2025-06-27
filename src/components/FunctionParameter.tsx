import React, { useState } from "react";
interface IState{
    message:string;
}
export const FunctionParameter: React.FC =()=>{
    const [state, setState] = useState<IState>({message:""}); // Initial value empty
    const handleClick =(greet:string) :void=> {
        setState({message:greet});
    }
    return (
      <div>
        <h1>{state.message}</h1>
        <button onClick={() => handleClick("LIKE")}>Like</button>
        <button onClick={() => handleClick("SHARE")}>Share</button>
        <button onClick={() => handleClick("SUBSCRIBE")}>Subscrice</button>
      </div>
    );
}



