import React, { useMemo, useState } from "react";
import{useParams} from "react-router-dom"
import Api from '../API/TestApi'

export default function TestManager() {

        const[isLoading,setIsLoading] = useState(false);
        const[data,setdata] = useState([]);
        //const { id } = useParams();

        async function AllTests(){
                
                let api = new Api();
                setIsLoading(true);
                let res = await api.AllTests(sessionStorage.getItem("TopicId"));

                setdata(res);
                console.log(res);
                setIsLoading(false);

        }
        async function deleteTest(id){
                let api = new Api();
                api.DeleteTest(id);
              }
        async function redirectToEditTest(id,name){
                sessionStorage.setItem("TestName",name);
             window.location.assign("/editTest/"+id);
        }
        async function redirectToTests(id){
                sessionStorage.setItem("TopicId",id);
                window.location.assign("/tests/"+id);
           }
           async function redirectToAddQuestions(id){
                sessionStorage.setItem("TestId",id);
                window.location.assign("/addTestQuestions/"+id);
           }
        return{redirectToEditTest,redirectToTests,AllTests,deleteTest,redirectToAddQuestions,isLoading,data};
}