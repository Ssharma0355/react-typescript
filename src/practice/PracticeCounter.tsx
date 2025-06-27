import React, { useState } from "react";
interface IState{
    count:number;
}
export let PracticeCounter: React.FC =()=>{
    const [state, setState] = useState<IState>({count:0})
    const Increment =():void=>{
        setState({count:state.count+1});
    }
    const Decrement=():void=>{
        setState({count:state.count-1});
    }
 return (
   <>
     <h1>{state.count}</h1>
     <button onClick={() => Increment()}>Increment</button>
     <button onClick={() => Decrement()}>Decrement</button>
   </>
 );   
}