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
        <h1>Name: {name}</h1>
        <h1>Title: {title}</h1>
        <h1>Age: {age}</h1>
      </div>
    );
}
export default Customer;