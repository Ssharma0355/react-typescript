import axios from "axios";
export class Userapiservice {
  private static URL: string = "https://jsonplaceholder.typicode.com/";

  public static getAllUsers(){
    let UserUrl:string = `${this.URL}users`;
    return axios.get(UserUrl);
  }

  public static getSingleUser(userId:string){
    let SingleUserURL: string = `${this.URL}users/${userId}`;
    return axios.get(SingleUserURL);

  }

}