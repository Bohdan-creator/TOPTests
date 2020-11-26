import React from 'react'
import { Form, Formik,Field,ErrorMessage } from "formik";
import { useParams } from "react-router-dom";
import API from "../API/SubjectApi"
import Swal from 'sweetalert2';
import {Button } from "reactstrap";
import { useEffect } from 'react';

export default function EditSubject() {
  const { id } = useParams();
        let initialValues = {
          Code: id,
          name:sessionStorage.getItem("SubjectName")
        }
          
        function onSubmit(fields){
                try{
                        console.log(fields);
                        EditSubject(fields);
                }
                catch(error){
                        console.log("error");
                }  
        }
        async function EditSubject(fields){
            let api = new API();
            api.EditSubject(fields);
        }
        return (

                <Formik 
                  onSubmit={onSubmit}
                  initialValues={initialValues}
                >
                      <Form class="editSubject">
                        <h1>Edit Subject</h1>
                        <br></br>
                        <Field
                        name="name"
                        class="input"
                          />
                           <ErrorMessage
                          name="name"
                          component="div"
                       className="invalid-feedback"
                          />
                        <div className="pt-3">
                          <button
                            type="submit"
                            className="confirm btn btn-primary"
                          >
                            Edit
                        </button>
                        </div>
                      </Form>
                </Formik>
              );

}