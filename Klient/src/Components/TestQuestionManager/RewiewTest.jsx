import TestManager from '../TestQuestionManager/TestQuestionManager.utils';
import React, {useEffect} from "react";
import Loader from "react-loader-spinner";
import { Formik, Field, Form, ErrorMessage } from "formik";
import Api from '../API/CheckTestApi'
import Result from '../Results/Result.utils';


export default function Rewiew(){


 const {fetchTestQuestions,NextQuestion,PreviousQuestion,data,isLoading,userRole} = TestManager();
 useEffect(() => {fetchTestQuestions()},[]);  

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
        ):(data&&userRole==="user"?
        
   
        <div class="grid-container-Starttest">
        {data.map( (item,index) => {
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
                {item.option.map( (items,index) =>{
                  if(index===0){
                 return( <div class="answers-test">
                      <label class="answer-test">{items}</label>
                    <Field 
                type="checkbox"
                name="isCorrectA"
                className={
                "info-test"
                 //+
              // (errors.OptionA && touched.OptionA ? " is-invalid" : "")
                  }>
                    
               </Field>
                
               </div>
                 )
                  }
                  if(index===1){
                   return( <div class="answers-test">
                        <label class="answer-test">{items}</label>
                      <Field 
                  type="checkbox"
                  name="isCorrectB"
                  className={
                  "info-test"
                   //+
                // (errors.OptionA && touched.OptionA ? " is-invalid" : "")
                    }>
                      
                 </Field>
                  
                 </div>
                   )
                    }
                    if(index===2){
                     return( <div class="answers-test">
                          <label class="answer-test">{items}</label>
                        <Field 
                    type="checkbox"
                    name="isCorrectC"
                    className={
                    "info-test"
                     //+
                  // (errors.OptionA && touched.OptionA ? " is-invalid" : "")
                      }>
                   </Field>
                    
                   </div>
                     )
                      }
                })}
              <br></br>
              <button
               type="submit"
               id="buttonPrevious"
               onClick={()=>PreviousQuestion(minutes,seconds)}
             >
               Previous
             </button>
          
          <button
               type="submit"
               id="buttonNext"
               onClick={()=>NextQuestion(minutes,seconds)}
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
     :<div>   </div>
         )
         
     }
   </div>
   );
        }

