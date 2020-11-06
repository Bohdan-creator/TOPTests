import React,{Component} from 'react'
import { Formik, Field, Form, ErrorMessage } from "formik";
import TopicsManager from '../TopicsManager/TopicManager.Utils'
import style from "../TopicsManager/TopicsStyle.css"
import * as Yup from 'yup';
import Api from '../API/TopicsApi'



export default function RegisterTopic() {

        const {redirectToTopics} = TopicsManager();

        let initialValues = {
                Name: "",
                SubjectId:sessionStorage.getItem("SubjectId")
              };
      
              const validationSchema = Yup.object().shape({
                Name: Yup.string()
                        .min(1, "Too short!")
                        .max(20, "Too long!")
                        .required("Required"),
                    });
                    function onSubmit(fields) {
                        console.log(fields);
                        createTopic(fields);  
                      }
                      async function createTopic(fields) {
                        try {
                          let api = new Api();
                          api.RegisterTopic(fields);
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
                      <h1>Add Topic</h1>
          
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
                        <a role="button " class="btn btn-danger" onClick={()=>redirectToTopics(sessionStorage.getItem("SubjectId"))}>     
                        Cancel
                        </a>
                      </div>
                    </Form>
                  );
                      }
                }
              </Formik>
              );
}