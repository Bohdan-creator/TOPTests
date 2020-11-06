import React from "react"
import * as Yup from 'yup';
import { Formik, Field, Form, ErrorMessage } from "formik";
import Api from '../API/TestQuestionsApi'
import TestManager from '../TestQuestionManager/TestQuestionManager.utils';

export default function AddTestQuestion(){
let initialValues = {
        Question: "",
        OptionA: "",
        OptionB: "",
        OptionC: "",
        isCorrectOptionA: false,
        isCorrectOptionB: false,
        isCorrectOptionC: false,
        SubjectId:sessionStorage.getItem("SubjectId"),
        TopicId:sessionStorage.getItem("TopicId"),
        TestId:sessionStorage.getItem("TestId")
      };
      
      const validationSchema = Yup.object().shape({
        Question: Yup.string()
                .min(1, "Too short!")
                .max(20, "Too long!")
                .required("Required"),
            });
            
            function onSubmit(fields) {
              try{
                console.log(fields);
                createTest(fields);   
              }
              catch(error){
                  console.log("error");
          } 
              }
              async function createTest(fields) {
                try {
                  let api = new Api();
                  api.registerQuestion(fields);
                } catch (error) {
                  console.log(error);
                 }
              }
              return (
               
                <Formik 
                  onSubmit={onSubmit}
                  initialValues={initialValues}
                >
                      <Form className="upsertformTestQuestion">
                      <h1>Add Test Question</h1>
                      
                      <label>Title</label>
                      <Field
                        name="Question"
                        className={
                          "form-control"// +
                        //  (errors.Name && touched.Name ? " is-invalid" : "")
                        }
                      />
                      <ErrorMessage
                        name="Question"
                        component="div"
                        className="invalid-feedback"
                      /> 
                      <div style={{float:"left" ,width:49+'%'}}>
                       <label>First Answer</label>
                      <Field
                        name="OptionA"
                        className={
                          "form-control"// +
                          //(errors.Name && touched.Name ? " is-invalid" : "")
                        }
                      />
                      <ErrorMessage
                        name="OptionA"
                        component="div"
                        className="invalid-feedback"
                      />
                      <br></br>
                         <Field 
                      type="checkbox"
                        name="isCorrectOptionA"
                        className={
                          "info" //+
                          //(errors.Name && touched.Name ? " is-invalid" : "")
                        }
                      />
                      <ErrorMessage
                        name="isCorrectOptionA"
                        component="div"
                        className="invalid-feedback"
                      />
                      </div>
                      <div style={{float:"right",width:49+'%'}}>
                      <label>Second Answer</label>
                      <Field
                        name="OptionB"
                        className={
                          "form-control"// +
                         // (errors.Name && touched.Name ? " is-invalid" : "")
                        }
                      />
                      <ErrorMessage
                        name="OptionB"
                        component="div"
                        className="invalid-feedback"
                      />
                      <br></br>
                       <Field
                        name="isCorrectOptionB"
                        type="checkbox"
                        className={
                          "info"// +
                          //(errors.Name && touched.Name ? " is-invalid" : "")
                        }
                      />
                      <ErrorMessage
                        name="isCorrectOptionB"
                        component="div"
                        className="invalid-feedback"
                      />
                      </div>
                       <label>Third Answer</label>
                      <Field
                        name="OptionC"
                        className={
                          "form-control" //+
                         // (errors.Name && touched.Name ? " is-invalid" : "")
                        }
                      />
                      <ErrorMessage
                        name="OptionC"
                        component="div"
                        className="invalid-feedback"
                      />
                      <br></br>
                      <Field
                        name="isCorrectOptionC"
                        type="checkbox"
                        className={
                          "info" //+
                         // (errors.Name && touched.Name ? " is-invalid" : "")
                        }
                      />
                      <ErrorMessage
                        name="isCorrectOptionC"
                        component="div"
                        className="invalid-feedback"
                      />
                      <button
                          type="submit"
                          className="btn btn-primary"
                        >
                          Save
                        </button>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                         <a role="button " class="btn btn-danger" >     
                        Cancel
                        </a> 
                    </Form>
                </Formik>
              );
}
              