import React from "react";
interface ISTATE{
    name: string;
    title: string;
}
export default class HandleStateClass extends React.Component<{},ISTATE>{
    constructor(props: {}){
        super(props);
        this.state={
            name:"Sachin Sharma",
            title:"Frontend Developer"
            }
    }
    render(){
        const {name,title} = this.state;
        return(
            <>
            <h1>This is handle by class component</h1>
            <h1>Name is {name}</h1>
            <h1>Title is {title}</h1>
            </>
        )
    }
}