import React from "react";
import { Link } from "react-router-dom";

export const Navbar : React.FC =()=>{
    return(
   <nav>
    <Link to={'/'}>Home</Link>
    <Link to={"/userlist"}>User list</Link>
    <Link to={"/copy"}>Copy</Link>
   </nav>

    )
}