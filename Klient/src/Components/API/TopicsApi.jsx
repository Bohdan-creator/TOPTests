import Swal from "sweetalert2"
import Api from "./Api";
import axios from 'axios'
export default class SubjectApi extends Api{

        constructor(){
                super();
        }
        async AllTopics(id){
                try{
                const res = await this.baseAxios.get('https://localhost:44323/api/topic/'+id)
                return res.data;
                }
                catch (error) {
                        Swal.fire("Oops...", "You don't have anyone topic", "error");
                      }
        }
        async RegisterTopic(field){
                try{
                const res = await this.baseAxios.post('https://localhost:44323/api/topic/register',field)
                Swal.fire({icon: 'success',
                title: 'You have added topic',
                title:'You have added topic'});
                setTimeout(()=>window.location.assign("/topics/"+sessionStorage.getItem("SubjectId")),1000);
                return res.data;
                }catch (error) {
                        Swal.fire("Oops...","Something wrong")
                      }
                
        }
        
        async EditTopic(fields) {
                try {
                   const res = await axios.patch('https://localhost:44323/api/topic/edit',fields)  
                   Swal.fire({icon: 'success',
                            title: 'You have edit topic',
                            title:'You have edit topic'});
                            setTimeout(()=>window.location.assign("/topics/"+sessionStorage.getItem("SubjectId")),1000);
               
                  return res.data;
                } catch (error) {
                  Swal.fire("Oops...", "You don't have anyone subject", "error");
                }
              }
              async DeleteTopic(id){
                try {
                  await axios.delete('https://localhost:44323/api/topic/'+id)  
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
                      setTimeout(()=>window.location.assign("/topics/"+sessionStorage.getItem("SubjectId")),1000);
                    }
            
                  })
                      )    
               } catch (error) {
                 Swal.fire("Oops...", "You don't have anyone subject", "error");
               }
              
}
}