import React from 'react'
import { Form, Formik,Field,ErrorMessage } from "formik";
import { useParams } from "react-router-dom";
import API from "../API/TestApi"


export default function EditTest() {

const{id} = useParams();

        let initialValues = {
                Id:id,
                TypeOfTest:sessionStorage.getItem("TypeTest"),
                Name:sessionStorage.getItem("TestName")
              }

        function onSubmit(fields){
                try{
                        console.log(fields);
                        EditTest(fields);
                }
                catch(error){
                        console.log("error");
                }  
        }
        async function EditTest(fields){
            let api = new API();
            api.EditTest(fields);
        }
        return (

                <Formik 
                  onSubmit={onSubmit}
                  initialValues={initialValues}
                >
                      <Form class="editSubject">
                        <h1>Edit Test</h1>
                        <br></br>
                        <Field
                        name="Name"
                        maxLength = "9"
                        class="input"
                          />
                           <ErrorMessage
                          name="Name"
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