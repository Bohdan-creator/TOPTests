import SubjectManagerUtils from "../SubjectManager/SubjectManager.utils";
import SubjectManagerTable from "../SubjectManagerTable/SubjectManagerTable"
import React, {useEffect} from "react";
import Loader from "react-spinner-loader";
import { render } from "@testing-library/react";



export default function SubjectManager(){
  const {data,fetchSubject,isLoading} = SubjectManagerUtils();
  useEffect(() => {fetchSubject()},[]);    
  console.log(data,"heyyy");
      
  return(
    <div>
    {isLoading ? (
      <div className="loader">
        <Loader type="Oval" color="#00BFFF" />
      </div>
    ) : ( data ?
      <ul>
      {data.map( item => (
        <li key={item.id}> Name : {item.name}</li>
      ))}
    </ul>
      : "You don't have cars in database"
    )}
  </div>
    );
  }
      