import React, { useState } from "react";
interface ISTATE{
    name:string;
    title:string
}
export let HandleState: React.FC =()=>{
    const [state, setState] = useState<ISTATE>({name:"Saxhin",title:"Developer"});
    return (
      <>
      <h1>Here we handle state in TypeScript</h1>
        <h1>Name is {state.name}</h1>
        <h1>Title is {state.title}</h1>
      </>
    );
}