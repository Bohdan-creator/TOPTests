import TestManager from '../TestQuestionManager/TestQuestionManager.utils';
import React, {useEffect} from "react";
import Loader from "react-loader-spinner";
import style from "../SubjectManager/SubjectsStyle.css"
import edit from "../img/edit.png"
import back from "../img/back.png"
import { Formik, Field, Form, ErrorMessage } from "formik";

export default function Start(){
  const [counter, setCounter] = React.useState(20);
  const [timer_style, setStyle] = React.useState();
  // Second Attempts
  React.useEffect(() => {
    const timer =
      counter > 0 && setInterval(() => setCounter(counter - 1), 1000);
      if(counter>18&&counter<=20){
        setStyle("timer_start");
      }
      if(counter>5&&counter<10){
        setStyle("timer_middle");
      }
      if(counter<5){
        setStyle("timer_end");
      }
     if(counter===0){
       NextQuestion("d");
      }
    return () => clearInterval(timer);
  }, [counter,timer_style]);
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
                ):
                   (data&&userRole==="user" ?
                   <div class="grid-container-Starttest">
                   {data.map( (item,index) => {
                           if(index===parseInt(sessionStorage.getItem("NumberOfQuestion"))){
                    return( 
                    <div class="item-Starttest" >
                     <p className={timer_style}>{counter} seconds left</p> 
                      <Formik>
                        <Form>
                          <p class="number" key={item.id}>{index+1}</p>
                           <p class="question-test" >{item.question}</p>
                           {item.option.map( (items,index) =>(
                             <div class="answers-test">
                                 <label class="answer-test">{items}</label>
                               <Field 
                           type="checkbox"
                           //name="OptionA"
                           className={
                           "info-test"
                            //+
                         // (errors.OptionA && touched.OptionA ? " is-invalid" : "")
                             }>
                               
                          </Field>
                           
                          </div>
                         ))}
                         <br></br>
                         <a type="button" class="button" id="buttonPrevious"
                      onClick={()=>PreviousQuestion()} >Previous</a>
                     <a type="button" class="button" id="buttonNext"
                      onClick={()=>NextQuestion(item)} >Next</a> 
                        </Form>
                        
                      </Formik>
                </div>
                   )                   
                }
})}
                </div>
                    :<div></div>
                
                    )
                }
              </div>
              );
        
}