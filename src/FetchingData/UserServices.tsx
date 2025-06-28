import axios from "axios";
export class UserServices {
  private static URL: string = "https://jsonplaceholder.typicode.com/";

  public static getUsers() {
   let UserURL:string = `${this.URL}users`;
   return axios.get(UserURL);
  }
}