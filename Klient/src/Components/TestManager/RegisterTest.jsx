import React from "react"
import * as Yup from 'yup';
import { Formik, Field, Form, ErrorMessage } from "formik";
import Api from '../API/TestApi'
import TestManager from "./TestManager.utils";

export default function RegisterTest(){

        const{redirectToTests}=TestManager();

        let initialValues = {
                Name: "",
                AdditionalInfo:"",
                TypeOfTest:"0",
                TimeOfTest:0,
                SubjectId:sessionStorage.getItem("SubjectId"),
              };
              
              const validationSchema = Yup.object().shape({
                Name: Yup.string()
                        .min(1, "Too short!")
                        .max(20, "Too long!")
                        .required("Required"),
                    },
                    {
                AdditionalInfo: Yup.string()
                        .min(10, "Too short!")
                        .max(100, "Too long!")
                        .required("Required"),
                    },
                    
                    )
                   
                    function onSubmit(fields) {
                        console.log(fields);
                        createTest(fields); 
                        sessionStorage.setItem("TypeTest",fields.TypeOfTest); 
                      }
                      async function createTest(fields) {
                        try {
                          let api = new Api();
                          api.registerTest(fields);
                        } catch (error) {
                          console.log(error);
                         }
                      }
                      return (

                        <Formik
                        initialValues={initialValues}
                        validationSchema={validationSchema}
                        enableReinitialize
                        onSubmit={onSubmit}
                      >
                        {({ errors, touched }) => {
                          return (
                            <Form className="upsertformsShowTest">
                              <h1>Add Test</h1>
                  
                              <label>Title</label>
                              <Field
                                name="Name"
                                className={
                                  "form-control" +
                                  (errors.Name && touched.Name ? " is-invalid" : "")
                                }
                              />
                              <ErrorMessage
                                name="Name"
                                component="div"
                                className="invalid-feedback"
                              />
                               <label>Information</label>
                              <Field
                                name="AdditionalInfo"
                                placeHolder="Type something about test"
                                className={
                                  "form-control" +
                                  (errors.Name && touched.Name ? " is-invalid" : "")
                                }
                              />
                              <ErrorMessage
                                name="AdditionalInfo"
                                component="div"
                                className="invalid-feedback"
                              />
                              <br></br>
                              <label>Choose type of test</label>

                              <Field as="select" name="TypeOfTest" class="form-control">
                                <option value="0">Multiple choises of test</option>
                                <option value="1">Single test selection</option>
                                <option value="2">Calculation test</option>
                              </Field>
                              <label>Time of test</label>
                              <Field
                                name="TimeOfTest"
                                placeHolder="Enter time of test"
                                className={
                                  "form-control" +
                                  (errors.TimeOfTest && touched.TimeOfTest ? " is-invalid" : "")
                                }
                              />
                              <div className="pt-3">
                                <button
                                  type="submit"
                                  className="btn btn-primary"
                                >
                                  Save
                                </button>
                                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                { <a role="button " class="btn btn-danger" onClick={()=>redirectToTests(sessionStorage.getItem("SubjectId"))}  >     
                                Cancel
                                </a> }
                              </div>
                            </Form>
                          );
                              }
                        }
                      </Formik>
                      );

}