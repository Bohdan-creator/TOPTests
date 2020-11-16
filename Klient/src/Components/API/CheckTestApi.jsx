import Swal from "sweetalert2"
import Api from "./Api";
import axios from 'axios'
export default class TestQuestionApi extends Api{

  constructor()
  {
    super();
  }
  async SendToCheckTest(fields) {
        try {
           const res = await this.baseAxios.post
           ('https://localhost:44323/api/checkTest/'+sessionStorage.getItem("TestId"),fields);     
           console.log(res);
           window.location.assign("/result");
           return res.data;
        } catch (error) {
          Swal.fire("Oops...", "You don't have anyone subject", "error");
        }
      }
      async GetResultOfTest(){
        try{
              var userId =sessionStorage.getItem("userID");
              var testId=sessionStorage.getItem("TestId");
            
          const res = await this.baseAxios.get(
            'https://localhost:44323/api/checkTest/'+sessionStorage.getItem("userID")
          )
          return res;
        }catch(error){
          Swal.fire("Oops...", "Please try again", "error");

        }
      }
}