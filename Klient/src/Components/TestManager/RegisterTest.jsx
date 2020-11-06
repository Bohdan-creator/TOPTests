import React from "react"
import * as Yup from 'yup';
import { Formik, Field, Form, ErrorMessage } from "formik";
import Api from '../API/TestApi'
import TestManager from "./TestManager.utils";

export default function RegisterTest(){

        const{redirectToTests}=TestManager();

        let initialValues = {
                Name: "",
                SubjectId:sessionStorage.getItem("SubjectId"),
                TopicId:sessionStorage.getItem("TopicId")
              };
              
              const validationSchema = Yup.object().shape({
                Name: Yup.string()
                        .min(1, "Too short!")
                        .max(20, "Too long!")
                        .required("Required"),
                    });
                    function onSubmit(fields) {
                        console.log(fields);
                        createTest(fields);  
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
                            <Form className="upsertformTopic">
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
                              <div className="pt-3">
                                <button
                                  type="submit"
                                  className="btn btn-primary"
                                >
                                  Save
                                </button>
                                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                { <a role="button " class="btn btn-danger" onClick={()=>redirectToTests(sessionStorage.getItem("TopicId"))}  >     
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