
import { Formik, Field, Form, ErrorMessage } from "formik";
import React from 'react'
import Api from '../API/CheckTestApi'
import { useState } from 'react';
import TestManager from './TestQuestionManager.utils'
import Timer from '../Timer/TimerRemaining'

export default function MultipleChoicesTest(props){
        const {NextQuestion,PreviousQuestion} = TestManager();

        const initialValues={
                QuestionId:sessionStorage.getItem("QuestionId"),
                UserId:props.userId,
                isCorrectA:false,
                isCorrectB:false,
                isCorrectC:false
             }
          
               function onSubmit(fields){
                let api = new Api();
                    console.log(fields);
                    let obj = JSON.stringify(fields);
                    localStorage.setItem("Number"+sessionStorage.getItem("NumberOfQuestion"),obj);
                    console.log(localStorage.getItem("CountOfQuestions"));
                    if(parseInt(localStorage.getItem("CountOfQuestions")) === localStorage.length-3){
                     let list = new Array();
                     for(var i =localStorage.length-3 ;i>0;i--)
                     {
                       list.push(JSON.parse(localStorage.getItem("Number"+i)))
                     }
                     api.SendToCheckTest(list);
                   } 
                 }
      return(
        <div class="grid-container-Starttest">
              <Timer></Timer>
        {props.data.map( (item,index) => {
             
            
                if(index===parseInt(sessionStorage.getItem("NumberOfQuestion"))){
                  sessionStorage.setItem("QuestionId",item.questionId);
                                          
         return( 
           
         <div class="item-Starttest" >
           <Formik
            initialValues={initialValues}
            onSubmit={onSubmit}
           > 
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
                name="isCorrectA"
                className={
                "info-test"
                  }>
                    
               </Field>
                
               </div>
                 )
                  }
                  if(index_items===1){
                   return( 
                   <div class="answers-test">
                    <label class="answer-test">{items.option}</label>
                   <Field 
                  type="checkbox"
                  name="isCorrectB"
                  className={
                  "info-test"
                    }>
                      
                 </Field>
                  
                 </div>
                   )
                    }
                    if(index_items===2){
                     return( <div class="answers-test">
                          <label class="answer-test">{items.option}</label>
                        <Field 
                         type="checkbox"
                         name="isCorrectC"
                    
                    className={
                    "info-test"
                      }>
                   </Field>
                    
                   </div>
                     )
                      }
                })}
              <br></br>
              <button
               style={{border:0+'px',paddingBottom:15+'px'}}
               type="submit"
               id="buttonPrevious"
               onClick={()=>PreviousQuestion(props.minutes,props.seconds)}
             >
               Previous
             </button>
     
          <button 
               style={{border:0+'px',paddingBottom:15+'px'}}
               type="submit"
               id="buttonNext"
               onClick={()=>NextQuestion(props.minutes,props.seconds)}
             >
               Next
             </button>
            
             </Form>
             
           </Formik>
     </div>
        )          
      } 
})}
    </div>
      )

}