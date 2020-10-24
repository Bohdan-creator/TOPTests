import React, { useMemo, useState } from "react";
import { useHistory } from "react-router-dom";
import Api from "../API/SubjectApi";
import Swal from "sweetalert2";

export default function useSubjectManager() {

    const[data,setdata] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

  const columns = useMemo(
    () => [
      {
        Header: "Subject ID",
        accessor: "id",
      },
      {
        Header: "Subject Name",
        accessor: "name"
      },
    ]  );

  async function fetchSubject() {
      try
      {
    let api = new Api();
    setIsLoading(true);
    const res = await api.fetchSubjects();
    console.log(res);
    setdata(res);
    console.log(data);
    setIsLoading(false);
      }
      catch(error)
      {
          console.log(error);
      }
  }
  return {data,fetchSubject};
}
