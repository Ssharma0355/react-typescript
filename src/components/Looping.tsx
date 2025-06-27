import React, { useState } from "react";
import { UsersList } from "../practice/UserList";

interface TState{
    users:UsersList[];
}
export const Looping : React.FC=()=>{
    const [state, setState] = useState<TState>({
      users: [
        {
          id: 123,
          name: "Sachin Sharma",
          email: "ssharma0355@gmail.com",
        },
        {
          id: 124,
          name: "hin Sharma",
          email: "rma0355@gmail.com",
        },
      ],
    });
    return (
      <div>
        <table className="table">
          {state.users.length > 0 &&
            state.users.map((users, id) => {
              return (
                <tr key={id}>
                  <th scope="row">{users.id}</th>
                  <td>{users.name}</td>
                  <td>{users.email}</td>
                </tr>
              );})}
        </table>
      </div>
    );
}