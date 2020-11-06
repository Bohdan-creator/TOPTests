import React, {useEffect} from "react";
import Loader from "react-loader-spinner";
import style from "../SubjectManager/SubjectsStyle.css"
import edit from "../img/edit.png"
import back from "../img/back.png"
import TestQuestions from '../TestQuestionManager/TestQuestionManager.utils'
import styleTest from '../TestQuestionManager/TestQuestion.css'
export default function ShowTestQuestion(){
        const {fetchTestQuestions,redirectToTests,redirectToEditTestQuestionsAnswer,
               redirectToDeletedQuestions,deleteTestQuestion,data,isLoading,userRole,
               redirectToAddQuestion} = TestQuestions();
        useEffect(() => {fetchTestQuestions()},[]);  
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
    ) :
       (data&&userRole==="admin" ?
       <div class="grid-container-test">
         <h1 style={{margin:20+'px'}}>Please rewiew the test and confirm</h1>
         <div class="modify-test">
           <div >
           <h1 style={{color:'whitesmoke'}}>Modify your Test</h1>
           <a>
             <img class="back"src={back}></img>
           </a>
           <a type="button" class="btn btn-info" id="right-side" 
           onClick={()=>redirectToDeletedQuestions()}>Restore questions
           </a>
           <br></br>
           <br></br>
           <a type="button" class="btn btn-info" id="right-side" onClick={()=>redirectToAddQuestion()}>
             Add question
             </a>
          </div>
         </div>
       {data.map( (item,index) => (
         <div class="item-test" >
         <a class="icon">
           <img class="edit-test"src={edit} onClick={()=>redirectToEditTestQuestionsAnswer(item.questionId,
             item.question,item.option)}></img>
           </a>
       <p class="number" key={item.id}>{index+1}</p>
       <p class="question" >{item.question}</p>
          {item.option.map(items=>(
         <div class="answers">
         <input type="radio" id ={items}/>
          <label class="answer" for={items}>{items}</label>
         </div>
          ))} 
         <br></br>
         <br></br>
         <a class="icon"onClick={()=>deleteTestQuestion(item.questionId)}   >
 <svg class="icon-delete" width="22" height="22" viewBox="0 0 1024 1024">
    <path d="M192 1024h640l64-704h-768zM640 128v-128h-256v128h-320v192l64-64h768l64 64v-192h-320zM576 128h-128v-64h128v64z"></path>
  </svg>
  </a>
         </div>
       ))}
       <a type="button" class="btn btn-info" id="confirm" onClick={()=>redirectToTests()} >Confirm</a>
     </div>
      :<div></div>
    )}
  </div>
    );

}