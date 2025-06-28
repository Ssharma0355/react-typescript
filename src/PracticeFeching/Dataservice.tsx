import axios from "axios";

export class Dataservice {
  private static URL:string = "https://jsonplaceholder.typicode.com/";

  public static getUsers() {
    let StaticURL: string = `${this.URL}users`;
    return axios.get(StaticURL);
  }
}