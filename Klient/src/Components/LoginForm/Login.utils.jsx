import * as Yup from 'yup';
import API from "../API/UserAPI"
import React, { Component } from 'react';
import Swal from 'sweetalert2';
import Api from '../API/AuthorizationApi';
import jwt_decode from "jwt-decode";

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
                    if (sessionStorage.getItem("isLoggedIn")) {
                      let decodedToken = jwt_decode(response.accessToken);
                      sessionStorage.setItem(
                        "userRole",
                        decodedToken[
                          "http://schemas.microsoft.com/ws/2008/06/identity/claims/role"
                        ]
                      );
                      sessionStorage.setItem("userID", decodedToken.sub);
                      sessionStorage.setItem("accessToken", response.accessToken);
                      sessionStorage.setItem("refreshToken", response.refreshToken);
                      switch (sessionStorage.getItem("userRole")) {
                        case "User":
                          sessionStorage.setItem("userRole", "user");
                          window.location.reload()
                          break;
                        case "Admin":
                          sessionStorage.setItem("userRole", "admin");
                          window.location.reload()
                          break;
                        default:
                          throw new Error("Bad response from server");
                      }
                    }
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