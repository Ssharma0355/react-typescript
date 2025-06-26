import React from "react";
interface IPROPS{
    userId: number;
}
export default class UsersClass extends React.Component <IPROPS>{
    constructor(props:IPROPS){
        super(props)
    }
    render() {
        return(
            <h1>Class Component in TypeScript {this.props.userId}</h1>
        )
    }
}