import React from 'react'
import { Form, Formik,Field,ErrorMessage } from "formik";
import API from "../API/TestQuestionsApi"
import style from '../TestQuestionManager/TestQuestion.css'

export default function EditTestQuestion() {
        let initialValues = {
          Question:sessionStorage.getItem("SubjectName"),
          optionA:sessionStorage.getItem("OptionA"),
          optionB:sessionStorage.getItem("OptionB"),
          optionC:sessionStorage.getItem("OptionC")
        }
        function onSubmit(fields){
                try{
                        console.log(fields);
                        EditTestQuestion(fields);
                }
                catch(error){
                        console.log("error");
                }  
        }
        async function EditTestQuestion(fields){
            let api = new API();
            api.EditTestQuestion(fields);
        }
        return (

                <Formik 
                  onSubmit={onSubmit}
                  initialValues={initialValues}
                >
                      <Form class="editTestQuestionsforms">
                        <h1>Edit Question</h1>
                        <br></br>
                        <Field
                        name="Question"
                        maxLength = "9"
                        class="option"
                          />
                           <ErrorMessage
                          name="Question"
                          component="div"
                       className="invalid-feedback"
                          />
                            <Field
                        name="optionA"
                        maxLength = "9"
                        class="option"
                          />
                           <ErrorMessage
                          name="optionA"
                          component="div"
                       className="invalid-feedback"
                          />
                            <Field
                        name="optionB"
                        maxLength = "9"
                        class="option"
                          />
                           <ErrorMessage
                          name="optionB"
                          component="div"
                       className="invalid-feedback"
                          />
                            <Field
                        name="optionC"
                        maxLength = "9"
                        class="option"
                          />
                           <ErrorMessage
                          name="optionC"
                          component="div"
                       className="invalid-feedback"
                          />
                        <div className="pt-3">
                          <button
                            type="submit"
                            className="btn btn-primary"
                          >
                            Edit
                        </button>
                        </div>
                      </Form>
                </Formik>
              );
        }