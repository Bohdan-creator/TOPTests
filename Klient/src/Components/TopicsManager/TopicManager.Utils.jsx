
import React, { useMemo, useState } from "react";
import{useParams} from "react-router-dom"
import Api from '../API/TopicsApi'

export default function TopicsManager() {

        const[isLoading,setIsLoading] = useState(false);
        const[data,setdata] = useState([]);
        const { id } = useParams();


        async function AllTopics(){
                
                let api = new Api();
                setIsLoading(true);
                let res = await api.AllTopics(sessionStorage.getItem("SubjectId"));

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

        return{data,isLoading,AllTopics,redirectToTopics,redirectToEditTopics,deleteTopic}

}