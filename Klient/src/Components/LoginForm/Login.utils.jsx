import * as Yup from 'yup';
import API from "../API/UserAPI"
import React, { Component } from 'react';
import Swal from 'sweetalert2';
import Api from '../API/AuthorizationApi';

export default function Login() {
        let initialValues = {
          Email: "",
          Password: "",
        };
        const validationSchema = Yup.object().shape({
                  Password: Yup.string()
                  .required("Required"),
                  Email: Yup.string().email("Invalid email").required("Required"),
              });
              
              function onSubmit(fields, { setSubmitting }) {
                // window.location.assign("/home")  
                // console.log(fields);
                //    createUser(fields, setSubmitting);  
                signIn(fields)
              }
              async function signIn(params) {
                try{
                    let api = new Api();
                    const response = await api.signIn(params);
                }
                catch(error){
                  Swal.fire("OOps",error.message,"Bad password");
                }
              }
              return {
                initialValues,
                validationSchema,
                onSubmit,
              };
      }