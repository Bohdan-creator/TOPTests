import React, { useState } from "react";
import axios from "axios";
import Swal from "sweetalert2"
import TestManager from "../TestQuestionManager/TestQuestionManager.utils"

export const FileUpload = () => {
  const [file, setFile] = useState();
  const [fileName, setFileName] = useState();
  const{SendFile}=TestManager();
  const saveFile = (e) => {
    console.log(e.target.files[0]);
    setFile(e.target.files[0]);
    setFileName(e.target.files[0].name);
  };

  const uploadFile = async (e) => {
    console.log(file);
    const formData = new FormData();
    formData.append("formFile", file);
    formData.append("SubjectId", sessionStorage.getItem("SubjectId"));
    SendFile(formData);
  };

  return (
    <>
      <input type="file" onChange={saveFile} />
      <input type="button" value="upload" onClick={uploadFile} />
    </>
  );
};
export default FileUpload;