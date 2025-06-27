import React, { useState } from "react";
import { UsersList } from "../practice/UserList";
import { UserServices } from "../services/UserServices";

interface UsersListState {
    users: UsersList[];
}

export const DisplayUsers: React.FC =()=>{
const [state, setState] = useState<UsersListState>({
  users: UserServices.getUsers()
});
    return(
        <table>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Email</th>
                </tr>
            </thead>
            <tbody>
                {state.users.map((user) => (
                    <tr key={user.id}>
                        <td>{user.id}</td>
                        <td>{user.name}</td>
                        <td>{user.email}</td>
                    </tr>
                ))}
            </tbody>

        </table>
    )
}