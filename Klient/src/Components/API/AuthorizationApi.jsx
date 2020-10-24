import Swal from "sweetalert2"
import Api from "./Api";
import axios from 'axios'
export default class AuthorizationApi {

  constructor()
  {
  }
  async signIn(params) {
        try {
          const response = await axios.post(
            "https://localhost:44323/api/authorize/signIn",
             params
          );
          sessionStorage.setItem("isLoggedIn", true)
          return response.data;
        } catch (error) {
          if (error.response) {
            console.log(error.response)
            Swal.fire("Oops...", error.response.data, "error");
          }
        }
      }
  async  confirmRegistration(id) {
      try {
        console.log("code");
        const response = await axios.patch(
          "https://localhost:44323/api/authorize/"+id);
          return response.data;
    }catch(error){
      console.log(error);
    }     
  }
  async  EmailToResetPassword(fields) {
    try {
      console.log(fields.Email);
      const response = await axios.post(
        "https://localhost:44323/api/authorize",fields);
        return response.data;
      }catch(error){
    console.log(error);
      }   
  }
  async sendPassword(fields) {
    try {
      const response = await axios.patch(
        "https://localhost:44323/api/authorize/forgotPassword/"+fields.code,fields);
        return response.data;
      }catch(error){
    console.log(error);
      }   
  }
}