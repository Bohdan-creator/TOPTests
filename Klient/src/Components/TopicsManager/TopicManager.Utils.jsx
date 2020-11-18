
import React, { useMemo, useState } from "react";
import{useParams} from "react-router-dom"
import Api from '../API/TopicsApi'
import jwt_decode from "jwt-decode";

export default function TopicsManager() {

        const[isLoading,setIsLoading] = useState(false);
        const[data,setdata] = useState([]);
        const[userRole,setRole]=useState();
        const { id } = useParams();


        async function AllTopics(){
                
                let api = new Api();
                setIsLoading(true);
                let res = await api.AllTopics(sessionStorage.getItem("SubjectId"));
                let decoded=null;
                let role=null;
                if(sessionStorage.getItem("accessToken")!==null){
                 decoded = jwt_decode(sessionStorage.getItem("accessToken"));
                role =  decoded[
                        "http://schemas.microsoft.com/ws/2008/06/identity/claims/role"
                      ]; 
                }
                    setRole(role);
                
                setdata(res);
                console.log(res);
                setIsLoading(false);

        }
        async function redirectToTopics(id){
                sessionStorage.setItem("SubjectId", id);
             window.location.assign("/topics/"+id);
        }
        async function redirectToEditTopics(id,name){
                sessionStorage.setItem("TopicName",name);
             window.location.assign("/topics/edit/"+id);
        }
        async function deleteTopic(id){
                let api = new Api();
                api.DeleteTopic(id);
              }

        return{data,isLoading,userRole,AllTopics,redirectToTopics,redirectToEditTopics,deleteTopic}

}