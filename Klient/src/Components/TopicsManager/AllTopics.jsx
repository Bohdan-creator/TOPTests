import React, { useEffect } from 'react';
import TopicsManager from "../TopicsManager/TopicManager.Utils";
import TestManager from "../TestManager/TestManager.utils";
import style from "../TopicsManager/TopicsStyle.css"
import Loader from "react-loader-spinner";
import plus from "../img/plus.png"
import edit from "../img/edit.png"

export default function AllTopics(){
const {data,isLoading,AllTopics,redirectToEditTopics,deleteTopic} = TopicsManager();
const {redirectToTests} = TestManager();
useEffect(() => {AllTopics()},[]);  
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
    ):(data&&sessionStorage.getItem("userRole")==="admin"?
    <div class="grid-container-subjects">
    {data.map( item => (
      <div class="item">
                  <a class="icon" onClick={()=>redirectToEditTopics(item.id,item.name)}>
           <img class="edit"src={edit}  ></img>
           </a>
      <p class="SubjectTitle" key={item.id}>  {item.name}</p>
      
      <a  role="button " class="btn btn-info" onClick={()=>redirectToTests(item.id)}>Go ahead</a>
      <br></br>
      <br></br>
      <a class="icon"  onClick={()=>deleteTopic(item.id)}>
 <svg class="icon-delete"width="22" height="22" viewBox="0 0 1024 1024">
    <path d="M192 1024h640l64-704h-768zM640 128v-128h-256v128h-320v192l64-64h768l64 64v-192h-320zM576 128h-128v-64h128v64z"></path>
  </svg>
  </a>
      </div>
      
    ))}
     <a href="http://localhost:3000/topics/register">
       <img class="plus" src={plus}></img>
       </a>
  </div>:data&&sessionStorage.getItem("userRole")==="user"?
  <div class="grid-container-subjects">
  {data.map( item => (
    <div class="item">
    <p class="SubjectTitle" key={item.id}>  {item.name}</p>
    <a  role="button " class="btn btn-info" onClick={()=>redirectToTests(item.id)}>Go ahead</a>
    </div>
  ))}
</div>: <div class="grid-container-subjects">
  {data.map( item => (
    <div class="item">
    <p class="SubjectTitle" key={item.id}>  {item.name}</p>
    <a  role="button " class="btn btn-info" onClick={()=>redirectToTests(item.id)}>Go ahead</a>
    </div>
  ))}
</div>
    )}
  </div>
      );
}

