import React, { useEffect } from 'react';
import TestManager from "../TestManager/TestManager.utils";
import TestQuestionManager from '../TestQuestionManager/TestQuestionManager.utils'
import style from "../TopicsManager/TopicsStyle.css"
import Loader from "react-loader-spinner";
import plus from "../img/plus.png"
import edit from "../img/edit.png"
import jwt_decode from "jwt-decode";

export default function AllTests(){
const {data,isLoading,userRole,redirectToEditTest,AllTests,deleteTest} = TestManager();
const{redirectToTestModify,redirectToStartTest}=TestQuestionManager();
useEffect(() => {AllTests()},[]);  

console.log(data);

return(
    <div>
    {isLoading ? (
          <div class="loader">
        <Loader
         type="TailSpin"
         color="#00BFFF"
         height={100}
         width={100}
       ></Loader>
      </div>
    ):(data&&userRole==="Admin"?
    <div class="grid-container-subjects">
    {data.map( item => (
      <div class="item">
                  <a class="icon" onClick={()=>redirectToEditTest(item.id,item.name)}>
           <img class="edit"src={edit}  ></img>
           </a>
      <p class="SubjectTitle" key={item.id}>  {item.name}</p>
      <a  role="button " class="btn btn-info" onClick={()=>redirectToTestModify(item.id)} >Go ahead</a>
      <br></br>
      <br></br>
      <a class="icon" onClick={()=>deleteTest(item.id)}>
 <svg class="icon-delete"width="22" height="22" viewBox="0 0 1024 1024">
    <path d="M192 1024h640l64-704h-768zM640 128v-128h-256v128h-320v192l64-64h768l64 64v-192h-320zM576 128h-128v-64h128v64z"></path>
  </svg>
  </a>
      </div>
      
    ))}
     <a href="http://localhost:3000/registerTest">
       <img class="plus" src={plus}></img>
       </a>
  </div>:data&&userRole==="User"?
  <div>
    <h1 style={{marginTop:20+'px',color:"whitesmoke",textDecoration:"underline"}}>Tests</h1>
  <div class="grid-container-subjects">
  {data.map( item => (
    <div class="item">
    <p class="SubjectTitle" key={item.id}>  {item.name}</p>
    <a  role="button " class="btn btn-info" onClick={()=>redirectToStartTest(item.id)}>Let's start test</a>
    </div>
  ))}
</div>
</div>:<div></div>
    )}
  </div>
      );
}

