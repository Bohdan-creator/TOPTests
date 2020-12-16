import { Formik, Field, Form, ErrorMessage } from "formik";
import React, {useEffect} from "react";
import Api from '../API/CheckTestApi'
import { useState } from 'react';
import TestManager from './TestQuestionManager.utils'
import Swal from "sweetalert2"

export default function SingleSelectionTest(props){
        let[ans_one,setFirstChecked]=useState(false)
        let[ans_second,setSecondChecked]=useState(false)
        let[ans_third,setThirdChecked]=useState(false)
        let[a,as] = useState(false);
        let initialValues={
          QuestionId:sessionStorage.getItem("QuestionId"),
          UserId:props.userId,
          isCorrectA:ans_one,
          isCorrectB:ans_second,
          isCorrectC:ans_third
       };
        function NextQuestion(){
        let number = sessionStorage.getItem("NumberOfQuestion");
        ++number;
        sessionStorage.setItem("NumberOfQuestion",number);
        let question = localStorage.getItem(sessionStorage.getItem("NumberOfQuestion"));
        let ques = JSON.parse(question);
        console.log(ques);
        if(ques===null){
        }
        else{
        setFirstChecked(ques.isCorrectA);
        setSecondChecked(ques.isCorrectB);
        setThirdChecked(ques.isCorrectC); 
        }     
       // window.location.assign("/test/"+sessionStorage.getItem("TestId")); 
      }
  
      function PreviousQuestion(){
        let number = sessionStorage.getItem("NumberOfQuestion");
        --number;
        sessionStorage.setItem("NumberOfQuestion",number);
        let question = localStorage.getItem(sessionStorage.getItem("NumberOfQuestion"));
        let ques = JSON.parse(question);
        setFirstChecked(ques.isCorrectA);
        setSecondChecked(ques.isCorrectB);
        setThirdChecked(ques.isCorrectC);  
      }
             function singleSelection(a,b,c){
              setFirstChecked(a);
              setSecondChecked(b);
              setThirdChecked(c);  
               }

               function onSubmit(fields){
                let api = new Api();
                    let obj = JSON.stringify(fields);
                    localStorage.setItem(sessionStorage.getItem("NumberOfQuestion")-1,obj);
                    if(parseInt(localStorage.getItem("CountOfQuestions")) === parseInt(localStorage.length-1)){
                     alert("hey");
                      Swal.fire({
                        title: 'Are you ready to finish the test?',
                        icon: 'warning',
                        showCancelButton: true,
                        confirmButtonColor: '#3085d6',
                        cancelButtonColor: '#d33',
                        confirmButtonText: 'Finished'
                      }).then((result) => {
                        if (result.isConfirmed) {
                          alert("tut")
                          Swal.fire(
                            'Finished!',
                            'Your test has been finished.',
                            'success'
                          )
                          let list = new Array();
                          for(var i = localStorage.length-3 ;i>0;i--)
                          {
                            list.push(JSON.parse(localStorage.getItem(i-1)))
                          }
                          api.SendToCheckTest(list);
                          }
                          
                          else{
                            alert("dd")
                            sessionStorage.setItem("NumberOfQuestion",sessionStorage.getItem("NumberOfQuestion")-1)
                           // window.location.assign("/test/"+sessionStorage.getItem("TestId"))
                          }
                     
                   })
                     
                   } else{
                    window.location.assign("/test/"+sessionStorage.getItem("TestId"));
                   }
                   
                 }

      return(
        <div class="grid-container-Starttest">
        {props.data.map( (item,index) => {
             
            
                if(index===parseInt(sessionStorage.getItem("NumberOfQuestion"))){
                  sessionStorage.setItem("QuestionId",item.questionId);
                                          
         return( 
           
         <div class="item-Starttest" >
           <Formik
            initialValues={initialValues}
            onSubmit={onSubmit}
            enableReinitialize={true}
           > 
                              {({ errors, touched }) => {
                                return(
             <Form>
               <p class="number" >{index+1}</p>
                <p class="question-test" >{item.question}</p>
                {item.option.map( (items,index_items) =>{
                  if(index_items===0){
                 return(
                 <div class="answers-test">
                      <label class="answer-test">{items.option}</label>
                     <Field 
                      type="checkbox"
                      onClick={()=>singleSelection(true,false,false)}
                        name="isCorrectA"
                        className={
                          "info-test" +
                          (errors.isCorrectA && touched.isCorrectA ? " is-invalid" : "")
                        }
                      />                
               </div>
                 )
                  }
                  if(index_items===1){
                   return( 
                   <div class="answers-test">
                    <label class="answer-test">{items.option}</label>
                    <Field 
                      type="checkbox"
                        onClick={()=>singleSelection(false,true,false)}
                        name="isCorrectB"
                        className={
                          "info-test" +
                          (errors.isCorrectB && touched.isCorrectB ? " is-invalid" : "")
                        }
                      />
                      
                  
                 </div>
                   )
                    }
                    if(index_items===2){
                     return( <div class="answers-test">
                          <label class="answer-test">{items.option}</label>
                          <Field
                        type="checkbox"
                        onClick={()=>singleSelection(false,false,true)}
                        name="isCorrectC"
                        className={
                          "info-test" +
                          (errors.isCorrectC && touched.isCorrectC ? " is-invalid" : "")
                        }
                      />
                    
                   </div>
                     )
                      }
                })}
              <br></br>
              <button
               style={{border:0+'px',paddingBottom:15+'px'}}
               id="buttonPrevious"
               onClick={()=>PreviousQuestion()}
             >
               Previous
             </button>
     
          <button 
               style={{border:0+'px',paddingBottom:15+'px'}}
               type="submit"
               id="buttonNext"
               onClick={()=>NextQuestion()}
             >
               Next
             </button>
            
             </Form>
                                );
              }        
            }        
           </Formik>
     </div>
        )          
      } 
})}
    </div>
      )

}