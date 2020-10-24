import Swal from "sweetalert2"
import Api from "./Api";
import axios from 'axios'
export default class SubjectApi{

  constructor()
  {
  }
  async createSubject(params) {
        try {
                await this.baseAxios.post('https://localhost:44323/api/subject/registerSubject',params)
                Swal.fire({icon: 'success',
                title: 'You have added subject',
                title:'You have added subject'});
              } catch (error) {
                Swal.fire("Oops...","Something wrong")
              }
  }
  
  async fetchSubjects() {
    try {
      const res = await axios.get('https://localhost:44323/api/subject/getAll');
      return res.data;
    } catch (error) {
      Swal.fire("Oops...", "Something went wrong!", "error");
    }
  }
}