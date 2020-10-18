import Swal from "sweetalert2"
import Axios from "axios";
import Api from "./Api";

export default class AuthorizationApi extends Api{

  constructor(){
          super();
    this.baseAxios = Axios.create({
      baseURL: process.env.REACT_APP_BASE_URL
    })
  }
  async signIn(params) {
        try {
          const response = await this.baseAxios.post(
            "https://localhost:44323/api/authorize/signIn",
             params
          );
          //sessionStorage.setItem("isLoggedIn", true)
          return response.data;
        } catch (error) {
          if (error.response) {
            console.log(error.response)
            Swal.fire("Oops...", error.response.data, "error");
          }
        }
      }
}