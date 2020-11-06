import React, { useMemo, useState } from "react";
import { Redirect, useHistory } from "react-router-dom";
import Api from "../API/SubjectApi";
import Swal from "sweetalert2";

export default function useSubjectManager() {

    const[data,setdata] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [userRole,setRole] = useState();
    const [Name,setName]=useState();

  async function fetchSubject() {
      try
      {
    let api = new Api();
    setIsLoading(true);
    setRole(sessionStorage.getItem('userRole'));
    console.log(sessionStorage.getItem('userRole'));
    const res = await api.fetchSubjects();
    setTimeout(() => {
      console.log('you can see me after 2 seconds')
  }, 2000);
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
        async function redirect(id,name){
              sessionStorage.setItem("SubjectName", name);
              window.location.assign("/editSubject/"+id);
          }
          async function deleteSubject(id){
            let api = new Api();
            api.DeleteSubject(id);
          }

  return {data,fetchSubject,redirect,deleteSubject,isLoading,userRole};

}

