import TestManager from '../TestQuestionManager/TestQuestionManager.utils';
import React, {useEffect} from "react";
import Loader from "react-loader-spinner";
import { Formik, Field, Form, ErrorMessage } from "formik";
import Api from '../API/CheckTestApi'
import Result from '../Results/Result.utils';

export default function Start(){
  const [minutes, setMinute] = React.useState(localStorage.getItem("Minutes"));
  const [seconds, setSeconds] = React.useState(localStorage.getItem("Seconds"));
  const [timer_style, setStyle] = React.useState();
  // Second Attempts
  React.useEffect(() => {
    const timer =
    seconds > 0 && setInterval(() => setSeconds(seconds - 1), 1000);
    if(minutes===0&&seconds===0){
      CheckTest();
      // alert("sdf");  
    } 
    if(seconds===0&&minutes>0){
     // CheckTest();
       setSeconds(60);
       setMinute(minutes-1);
      }
    return () => clearInterval(timer);
  }, [seconds,timer_style]);
        const initialValues={
           QuestionId:sessionStorage.getItem("QuestionId"),
           UserId:sessionStorage.getItem("userID"),
           isCorrectA:false,
           isCorrectB:false,
           isCorrectC:false
        }
        async function onSubmit(fields){
               console.log(fields);
               let obj = JSON.stringify(fields);
               localStorage.setItem("Number"+sessionStorage.getItem("NumberOfQuestion"),obj);
        }
        async function CheckTest(){
          let list = new Array();
          if(localStorage.length-2===0){
            var obj = JSON.stringify({
              QuestionId:sessionStorage.getItem("QuestionId"),
              UserId:sessionStorage.getItem("userID"),
              isCorrectA:false,
              isCorrectB:false,
              isCorrectC:false
            })
            list.push(JSON.parse(obj))
          }else{
          for(var i =localStorage.length-2 ;i>0;i--){
             list.push(JSON.parse(localStorage.getItem("Number"+i)))
          }
        }
        //  localStorage.clear();

          let api = new Api();
          api.SendToCheckTest(list) 
        }
        const {fetchTestQuestions,NextQuestion,PreviousQuestion,data,isLoading,userRole} = TestManager();
        useEffect(() => {fetchTestQuestions()},[]);  
        return(
                <div>
                <p className="timer_start">Time remaining {minutes} : {seconds}</p> 
                {isLoading ? (
                  <div class="loader">
                    <Loader
                     type="TailSpin"
                     color="#00BFFF"
                     height={100}
                     width={100}
                   ></Loader>
                  </div>
                ):
                   (data&&userRole==="user" ?
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
                 return(
                 <button
                id="buttonNext"
                onClick={()=>CheckTest()}
              >
                Check
              </button>
                 )          
})}
               </div>
                :<div>   </div>
                    )
                    
                }
              </div>
              );
        
}