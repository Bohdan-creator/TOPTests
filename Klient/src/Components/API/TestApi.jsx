import Swal from "sweetalert2"
import Api from "./Api";
import axios from 'axios'
export default class TestApi extends Api{

        constructor(){
                super();
        }
        async AllTests(id){
                try{
                const res = await this.baseAxios.get('https://localhost:44323/api/test/'+id)
                return res.data;
                }
                catch (error) {
                        Swal.fire("Oops...", "You don't have anyone test", "error");
                      }
        }
        async registerTest(field){
                try{
                        const res = await this.baseAxios.post('https://localhost:44323/api/test/register',field)
                        Swal.fire({icon: 'success',
                        title: 'You have added test',
                        title:'You have added test'});
                        setTimeout(()=>window.location.assign("/tests/"+sessionStorage.getItem("TopicId")),1000);
                        return res.data;
                        }catch (error) {
                                Swal.fire("Oops...","Something wrong")
                              }
        }
         
        async EditTest(fields) {
                try {
                        console.log(fields);
                   const res = await this.baseAxios.patch('https://localhost:44323/api/test/editTest',fields)  
                   Swal.fire({icon: 'success',
                            title: 'You have edit test',
                            title:'You have edit test'});
                            setTimeout(()=>window.location.assign("/tests/"+sessionStorage.getItem("TopicId")),1000);
               
                  return res.data;
                } catch (error) {
                  Swal.fire("Oops...", "You don't have anyone test", "error");
                }
              }
              async DeleteTest(id){
                try {
                  await axios.delete('https://localhost:44323/api/test/'+id)  
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
                      setTimeout(()=>window.location.assign("/tests/"+sessionStorage.getItem("TopicId")),1000);
                    }
            
                  })
                      )    
               } catch (error) {
                 Swal.fire("Oops...", "You don't have anyone subject", "error");
               }
              
}
}