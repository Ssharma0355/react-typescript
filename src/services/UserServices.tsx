import { UsersList } from "../practice/UserList";

export class UserServices {
  private static user: UsersList[] = [
    {
      id: 123,
      name: "Sachin",
      email: "ssharm@gmail.com",
    },
    {
      id: 22323,
      name: "dzfsdfdsf",
      email: "ssharm@sdfsdfsdfsdf.com",
    },
    {
      id: 21323,
      name: "zdxfsdfare",
      email: "fzvxgsdgfsdg@gmail.com",
    },
    {
      id: 323323,
      name: "Sazzdvfzdfchin",
      email: "zdfsdfx vxcvsdg@gmail.com",
    },
  ];

  public static getUsers(){
    return this.user;
  }
}