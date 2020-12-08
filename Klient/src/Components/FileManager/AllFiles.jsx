import React,{ Component } from "react";
import Api from "../API/FileApi";
import css from "../FileManager/Files.css"
import excel from "../img/excel.png"
import {Table} from 'react-bootstrap'
export default class AllFiles extends Component{
   constructor(){
           super();
           this.state={
                   files:[],
                   height:0
           }
           this.GetAllTestFiles();

   }
   GetAllTestFiles =async () => {
         let api = new Api();
         var result = await api.fetchAllTestFiles();
         console.log(result);
         if(result===undefined){
                 return(
                         <div>You don't have files</div>
                 )
         }
         this.setState({files:result});
   }
   DownloadFile =async (id) => {
        let api = new Api();
        var result = await api.DownloadTestFile(id);
        if(result===undefined){
                return(
                        <div>You don't have files</div>
                )
        }
  }
        render(){
                return(
                        <div>
                        <h1 style={{color:"white",fontSize:35+"px",marginTop:30+'px'}}>If you don't have a file, you can download.<br></br>
                          File to your type of test fitted, field this file and go back to the page</h1>
                   <div class="grid-container-files"> 
                           {this.state.files.map(item=>(
                   <div class="item-file">
                           <img class="excel" src={excel}></img>
                           <p style={{color:"#007bff",fontSize:30+"px"}}>{item.fileName}</p>
                           <p class="info_download">This is an example of multiple choices test. You can dowload this file
                              and field them. If you don't know how to field you just need to click the button 
                              <strong> " How to field "</strong> and find out.</p>
                           <button type="button" class="btn btn-info" href="" onClick={()=>this.DownloadFile(item.id)}>Download</button>
                           
                           <button style={{marginLeft:20+'px'}}type="button" href="" class="btn btn-warning"
                            onClick={()=>this.setState({height:100})}>
                                   How to field??</button>                   
                               </div>
                    ))}
                    </div>
                    <div id="myNav" style={{height:this.state.height+'%'}} class="overlay">
                    <a  rol="button"  class="closebtn" onClick={()=>this.setState({height:0})}>&times;</a>
                            <h1 style={{color:"whitesmoke",fontSize:35+"px",marginTop:30+'px'}}>
                                    How to field test
                            </h1>
                            <h3 style={{color:"whitesmoke",fontSize:30+"px"}}>Okay... let's start<br></br></h3>
                <table class="table table-dark">
                <thead>
                <tr>
                <th scope="col">#</th>
                <th scope="col">First</th>
                <th scope="col">Last</th>
                <th scope="col">Handle</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                <th scope="row">1</th>
                <td>Mark</td>
                <td>Otto</td>
                <td>@mdo</td>
                </tr>
                <tr>
                <th scope="row">2</th>
                <td>Jacob</td>
                <td>Thornton</td>
                <td>@fat</td>
                </tr>
                <tr>
                <th scope="row">3</th>
                <td>Larry</td>
                <td>the Bird</td>
                <td>@twitter</td>
                </tr>
                </tbody>
                </table>
                         </div>
                    </div>
                );
        }
}