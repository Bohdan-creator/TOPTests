import React, { useMemo, useState } from "react";
import Api from '../API/TestQuestionsApi'
import Alert from 'react-bootstrap/Alert'
import jwt_decode from "jwt-decode";
export default function TestManager() {

 async function SendFile(filePath){
         let api = new Api();
         api.SendTestQuestions(filePath);
 }
 
 const[data,setdata] = useState([]);
 const [isLoading, setIsLoading] = useState(false);
 const [userRole,setRole] = useState();
 const[userId,setUserId]=useState();
 const[question,setQuestion]=useState();

 async function fetchTestQuestions() {
        try
        {
      let api = new Api();
      setIsLoading(true);
      let decoded=null;
      let role=null;
      let userId=null;
  if(sessionStorage.getItem("accessToken")!==null){
   decoded = jwt_decode(sessionStorage.getItem("accessToken"));
  role =  decoded[
          "http://schemas.microsoft.com/ws/2008/06/identity/claims/role"
        ];
        userId=decoded[
          "sub"
        ] ;
       }
       console.log("decode",decoded);
      setRole(role);
      setUserId(userId);
      const res = await api.fetchTestQuestions(userId);
      console.log(res);
      setdata(res);
      setIsLoading(false);
      console.log(data);

        }
        catch(error)
        {
            console.log(error);
        }
    }
    async function redirectToEditTestQuestionsAnswer(id,subjectName,option){
      console.log(subjectName);
      var arr = ['Test','OptionA','OptionB','OptionC']; 
      sessionStorage.setItem("QuestionId",id);
      var index=0;  
      sessionStorage.setItem("SubjectName",subjectName);
         option.map((item,index)=>(
          sessionStorage.setItem(arr[index+1],item.option)
         ))
         window.location.assign("/editTestQuestions/"+id);
    }
    async function redirectToTests(){
      window.location.assign("/tests/"+sessionStorage.getItem("TestId"));
    }

    async function redirectToDeletedQuestions(){
      window.location.assign("/showDeletedQuestions/"+sessionStorage.getItem("TestId"));
    }
    async function redirectToTestModify(id,type){
      sessionStorage.setItem("TestId",id);
      sessionStorage.setItem("TypeTest",type)
      window.location.assign("/showTestModify/"+sessionStorage.getItem("TestId"));
    }
    async function redirectToStartTest(id){
      localStorage.clear();
      if(sessionStorage.getItem("accessToken")===null){
          setTimeout(()=>window.location.assign("/login"),200);
      }
      else{
      sessionStorage.setItem("TestId",id);
      sessionStorage.setItem("NumberOfQuestion",0);
      window.location.assign("/test/"+sessionStorage.getItem("TestId"));
      }
    }
    async function redirectToAddQuestion(){
      if(parseInt(sessionStorage.getItem("TypeTest"))== 0)
      {
      window.location.assign("/addTestQuestion");
      }
      else if(parseInt(sessionStorage.getItem("TypeTest"))==1)
      {
      window.location.assign("/addTestQuestionSingleTest");
      }
    }
    async function deleteTestQuestion(id){
      let api = new Api();
      api.DeleteTestQuestion(id);
    }
    async function restoreTestQuestion(id){
      let api = new Api();
      api.restoreTestQuestion(id);
      window.location.reload(false);
        }
    async function fetchDeletedQuestions(){
      try
      {
    let api = new Api();
    setIsLoading(true);
    let decoded=null;
    let role=null;
if(sessionStorage.getItem("accessToken")!==null){
 decoded = jwt_decode(sessionStorage.getItem("accessToken"));
role =  decoded[
        "http://schemas.microsoft.com/ws/2008/06/identity/claims/role"
      ]; 
     }
    setRole(role);
    const res = await api.showDeletedQuestions (sessionStorage.getItem("TestId"));
    console.log(res);
    setdata(res);
    setIsLoading(false);
    console.log(data);

      }
      catch(error)
      {
          console.log(error);
      }
    }
 return {
   SendFile,fetchTestQuestions,restoreTestQuestion,redirectToTestModify,redirectToEditTestQuestionsAnswer,
  redirectToDeletedQuestions, deleteTestQuestion,redirectToTests,fetchDeletedQuestions,data,isLoading,userRole,userId,
  redirectToAddQuestion,redirectToStartTest
};
}