import Swal from "sweetalert2"
import Api from "./Api"

export default class UserApi extends Api{
   
        async createUser(params) {
            try {
              await this.baseAxios.post('https://localhost:44323/api/authorize/register',params)
              Swal.fire("Success", "Email has been sent. Please confirm your registration", "success");
            } catch (error) {
              if(error.response.status===400 || 401 || 403)
              Swal.fire("Oops...","User with the same email existed")
            }
          }
        }    