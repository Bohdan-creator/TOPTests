import TestManager from '../TestQuestionManager/TestQuestionManager.utils';
import React, {useEffect} from "react";
import Loader from "react-loader-spinner";
import Api from '../API/CheckTestApi'
import Result from '../Results/Result.utils';
import { useState } from 'react';
import SingleSelectionTest from './SingleSelectionTest'
import MultipleChoicesTest from './MultipleChoicesTest'

export default function Start(){
  const {fetchTestQuestions,data,isLoading,userRole,userId} = TestManager();
  console.log(userId);
  useEffect(() => {fetchTestQuestions()},[]);
  console.log(data);  
  localStorage.setItem("CountOfQuestions",data.length);


  async function CheckTest(){
    let api = new Api();
    let list = new Array();
    if(localStorage.length-3===0){
      var obj = JSON.stringify({
        QuestionId:sessionStorage.getItem("QuestionId"),
        UserId:userId,
        isCorrectA:false,
        isCorrectB:false,
        isCorrectC:false
      })
      list.push(JSON.parse(obj))
    }
    api.SendToCheckTest(list); 
    window.location.assign("/result");
  }
  var test;
  if(parseInt(sessionStorage.getItem("TypeTest"))==0){
    test = <MultipleChoicesTest data={data} userId={userId} />
  }
  if(parseInt(sessionStorage.getItem("TypeTest"))==1){
    test = <SingleSelectionTest data={data} userId={userId} />
  }

        return(
               <div>
                       {test}
                    
                    </div>
                
              );
        
}