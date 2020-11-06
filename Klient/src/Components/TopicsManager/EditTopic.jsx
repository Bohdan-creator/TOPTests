import React from 'react'
import { Form, Formik,Field,ErrorMessage } from "formik";
import { useParams } from "react-router-dom";
import API from "../API/TopicsApi"


export default function EditTopic() {

const{id} = useParams();

        let initialValues = {
                Id: id,
                name:sessionStorage.getItem("TopicName")
              }

        function onSubmit(fields){
                try{
                        console.log(fields);
                        EditTopic(fields);
                }
                catch(error){
                        console.log("error");
                }  
        }
        async function EditTopic(fields){
            let api = new API();
            api.EditTopic(fields);
        }
        return (

                <Formik 
                  onSubmit={onSubmit}
                  initialValues={initialValues}
                >
                      <Form class="editSubject">
                        <h1>Edit Topic</h1>
                        <br></br>
                        <Field
                        name="name"
                        maxLength = "9"
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