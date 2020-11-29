import React, { useEffect ,useState} from 'react';
import TestManager from "../TestManager/TestManager.utils";
import TestQuestionManager from '../TestQuestionManager/TestQuestionManager.utils'
import Loader from "react-loader-spinner";
import plus from "../img/plus.png"
import edit from "../img/edit.png"
import jwt_decode from "jwt-decode";
import css from '../TestManager/Test.css'
export default function AllTests(){
const {data,isLoading,userRole,redirectToEditTest,AllTests,deleteTest} = TestManager();
const{redirectToTestModify,redirectToStartTest}=TestQuestionManager();
useEffect(() => {AllTests()},[]);  
const [info,setInfo] =useState("")
const [name,setData] =useState()
const [id,setId] =useState(0)
const[style,setStyle]=useState("");
console.log(data);

function Change(info,name,id){
  console.log(info);
  setInfo(info)
  setData(name)
  setId(id);
  sessionStorage.setItem("TestId",id)
}
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
  <div class="test">
  {data.map( item => {

    if(item.id===parseInt(sessionStorage.getItem("TestId"))){
      if(info===""||name===""||id===null){
        setInfo(item.additionalInfo);
        setData(item.name);
        setId(item.id);
      }
      return(
      <div style={{width:100+'%'}}>
      <h1 class="title_test">About Test</h1>
       <p class="test_info" >{info}</p>
      <h1 class="title_test">How to count score</h1>
      <p class="text_score">You will get 1 point for each correct answer. At the end of the Quiz,
         your total score will be displayed. Maximum score is 10 points.</p> 
         <div class="box">
            <h3 class="title_test">{name}</h3>
            <p class="title_test">Good Luck</p>
            <div class='container'>
               <span class='pulse-button' onClick={()=>redirectToStartTest(id)}>Start</span>
              </div>
         </div>
    </div>
      )
    }
})}
</div>
 <div class="item_list">
   <h1 class="title_item_list" >References</h1>
   {data.map( item => {
      if(item.id===parseInt(sessionStorage.getItem("TestId"))){
        return(
          <div class="choosed_test">
             <p class="text_test">{item.name}</p>
             <p>Good Luck</p>
             <a type="button" style={{width:170+'px',fontSize:17+'px'}} class="btn btn-info">Choose test</a>
          </div>
        )
      }else{
        return(
        <div class="item_test">
            <p class="text_test">{item.name}</p>
            <p>Good Luck</p>
            <a type="button" style={{width:170+'px',fontSize:17+'px'}} class="btn btn-info"
            onClick={()=>Change(item.additionalInfo,item.name,item.id)}>Choose test</a>
    </div>
        );
        
      }
        
    
})}
</div>
</div>:<div></div>
    )}
  </div>
      );
}

