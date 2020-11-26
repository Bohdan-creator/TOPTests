  import Swal from "sweetalert2"
  import Api from "./Api";
  import axios from 'axios'
  export default class SubjectApi extends Api{

  constructor()
  {
    super();
  }
  async createSubject(params) {
        try {
                await this.baseAxios.post('https://localhost:44323/api/subject/registerSubject',params)
                Swal.fire({icon: 'success',
                title: 'You have added subject',
                title:'You have added subject'});
                setTimeout(()=>window.location.assign("/subjects"),1000);
              } catch (error) {
                Swal.fire("Oops...","Something wrong")
              }
  }
  
  async fetchSubjects() {
    try {
       const res = await this.baseAxios.get('https://localhost:44323/api/subject/getAll');     
      return res.data;
    } catch (error) {
      Swal.fire("Oops...", "You don't have anyone subject", "error");
    }
  }
  
  async EditSubject(fields) {
    try {
       const res = await axios.patch('https://localhost:44323/api/subject/editSubject/'+fields.Code,fields)  
       Swal.fire({icon: 'success',
                title: 'You have edit subject',
                title:'You have edit subject'});
                setTimeout(()=>window.location.assign("/subjects"),1000);
   
      return res.data;
    } catch (error) {
      Swal.fire("Oops...", "You don't have anyone subject", "error");
    }
  }
  delete = async (id) => {
    let api = new Api();
    await axios.delete('https://localhost:44323/api/subject/delete/'+id) ;
  }    
  async DeleteSubject(id){
      Swal.fire({
        title: 'Are you sure?',
        text: "You won't be able to revert this!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, delete it!'
      }).then((result) => {
        if (result.isConfirmed) {
          try{ 
          this.delete(id);
          Swal.fire(
            'Deleted!',
            'Your file has been deleted.',
            'success'
          )
          setTimeout(()=>window.location.assign("/subjects"),1000);
          }catch(Exception){
            Swal.fire("Oops...", "You don't have anyone subject", "error");
          
          }
        }

      })
    
  
}
}