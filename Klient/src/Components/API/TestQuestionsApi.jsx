import Swal from "sweetalert2"
import Api from "./Api";
import axios from 'axios'
export default class TestQuestionApi extends Api{

  constructor()
  {
    super();
  }
  async SendTestQuestions(formData){
        try {
                const res = await axios.post("https://localhost:44323/api/testQuestion/"+sessionStorage.getItem("TestId"), formData);
                console.log(res);
                Swal.fire({icon: 'success',
                          title: 'You have added test questions',
                          title:'You have added subject'});
                          setTimeout(()=>window.location.assign("/showTestModify/"+sessionStorage.getItem("TestId")),1000);
              } catch (ex) {
                Swal.fire({icon: 'error',
                          title: 'Some empty fields are empty',
                          title:'Some empty fields are empty'});
              }
  }
  async fetchTestQuestions() {
    try {
       const res = await this.baseAxios.get('https://localhost:44323/api/testQuestion/'+sessionStorage.getItem("TestId"));     
       console.log(res);
       return res.data;
    } catch (error) {
      Swal.fire("Oops...", "You don't have anyone subject", "error");
    }
  }
  async EditTestQuestion(data){
    try {
      const res = await this.baseAxios.patch('https://localhost:44323/api/testQuestion/'+sessionStorage.getItem("QuestionId"),data);     
      Swal.fire({icon: 'success',
      title: 'You have edit test question',
      title:'You have edit test question'});
      setTimeout(()=>window.location.assign("/showTestModify/"+sessionStorage.getItem("TestId")),1000);
      return res.data;
     
   } catch (error) {
     Swal.fire("Oops...", "You don't have anyone subject", "error");
   }
  }
  async DeleteTestQuestion(id){
    try {
      await axios.delete('https://localhost:44323/api/testQuestion/'+id)  
       .then(()=>Swal.fire({
        title: 'Are you sure?',
        text: "You won't be able to revert this!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, delete it!'
      }).then((result) => {
        if (result.isConfirmed) {
          Swal.fire(
            'Deleted!',
            'Your file has been deleted.',
            'success'
          )
          setTimeout(()=>window.location.assign("/showTestModify/"+sessionStorage.getItem("TestId")),1000);
        }

      })
          )    
   } catch (error) {
     Swal.fire("Oops...", "You don't have anyone subject", "error");
   }
  }
  async  showDeletedQuestions(id){
    try {
      console.log(id);
      const res = await this.baseAxios.get('https://localhost:44323/api/testQuestion/deletedQuestions/'+id);     
      console.log(res);
      return res.data;
     
   } catch (error) {
     Swal.fire("Oops...", "Error", "error");
   }
  }
  async restoreTestQuestion(id){
    try{
      console.log(id);
      const res = await this.baseAxios.get('https://localhost:44323/api/testQuestion/restore/'+id);     
      Swal.fire({icon: 'success',
      title: 'You have restored question',
      title:'You have restored question'});
      
    }catch(error){
      Swal.fire("Oops...", "Question not exist", "error");

    }
  }
  async registerQuestion(fields){
    try{
      console.log(fields);
    const res = await this.baseAxios.post('https://localhost:44323/api/testQuestion/addTestQuestion',fields);     
    Swal.fire({icon: 'success',
    title: 'You have added test question',
    title:'You have added test question'});
    setTimeout(()=>window.location.assign("/showTestModify/"+sessionStorage.getItem("TestId")));
  }
    catch(error){
      Swal.fire({icon: 'error',
      title: 'Please try again',
      title:'You have added test question'});
    }
  }
}