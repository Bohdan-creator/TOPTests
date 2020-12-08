  import Swal from "sweetalert2"
  import Api from "./Api";
  import axios from 'axios'

export default class FileApi extends Api{

        constructor()
        {
          super();
        }
        async fetchAllTestFiles() {
                try {
                   const res = await this.baseAxios.get('https://localhost:44323/api/testsFile');     
                   return res.data;
                } catch (error) {
                  Swal.fire("Oops...", "You don't have anyone test files", "error");
                }
              }
              async DownloadTestFile(id) {
                try {
                   await this.baseAxios({
                    url: 'https://localhost:44323/api/testsFile/'+id,
                    method: 'POST',
                           
                    responseType: 'blob'
                  }).then((response) => {
                    const url = window.URL.createObjectURL(new Blob([response.data]));
                   const filename = response.headers['content-disposition'].split(" filename*=UTF-8''");
                   console.log(filename);
                    const link = document.createElement('a');
                    link.href = url;
                    link.setAttribute('download', filename[1]+'.csv');
                    document.body.appendChild(link);
                   link.click();
                  });     
                  
                } catch (error) {
                  Swal.fire("Oops...", "You can't download file", "error");
                }
              }
}