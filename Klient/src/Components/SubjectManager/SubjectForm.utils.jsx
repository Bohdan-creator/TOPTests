import * as Yup from 'yup';
import API from "../API/SubjectApi"
import Swal from 'sweetalert2';
import React, { Component } from 'react';


export default function RegisterFormUser() {
        let initialValues = {
          Name: "",
        };

        const validationSchema = Yup.object().shape({
          Name: Yup.string()
                  .min(3, "Too short!")
                  .max(20, "Too long!")
                  .required("Required"),
              });
              
  function onSubmit(fields, { setSubmitting }) {
    console.log(fields);
    createSubject(fields, setSubmitting);  
  }
  async function createSubject(fields, setSubmitting) {
    try {
      let api = new API();
      api.createSubject(fields);
      setSubmitting(false);
    } catch (error) {
      console.log(error);
     }
  }
              return {
                initialValues,
                validationSchema,
                onSubmit,
              };
            }