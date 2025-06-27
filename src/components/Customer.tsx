import React from "react";
//props handling in Typescript
interface IPROPS{
    name:string;
    age:number;
    title?:string; //optional property
}
let Customer: React.FC<IPROPS> = ({name,age,title})=>{
    return (
      <div>
        <h1>Funtional Component in TypeScript</h1>
        <h2>Name: {name}</h2>
        <h2>Title: {title}</h2>
        <h2>Age: {age}</h2>
      </div>
    );
}
export default Customer;