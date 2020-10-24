import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import UserHeader from './Components/UserHeader/UserHeader';
import Home from './Components/Home/Home';
import RegisterForm from './Components/RegisterForm/RegisterForm'
import LoginForm from './Components/LoginForm/LoginForm'
import ConfirmRegistration from './Components/ConfirmRegistration/ConfirmRegistration'
import EmailToReset from './Components/EmailToResetPassword/EmailToResetPassword'
import ForgetPassword from './Components/ForgetPassword/ForgetPassword'
import Subject from './Components/SubjectForm/SubjectForm'
import AllSubjects from './Components/SubjectManager/AllSubjects'

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
let userRole=sessionStorage.getItem('userRole');
  let isLoggedIn=sessionStorage.getItem("isLoggedIn");
function App() {
  return (
    <Router>
       {
       isLoggedIn,
         ( userRole==="user"&&
           <div>
             <Switch>
        <Route path="/registerSubject">
        <UserHeader></UserHeader>
            <Subject style="upsertformsShow"></Subject>
        </Route>
             </Switch>
           </div>
         )||
            <Switch>
        <Route path="/home">
        <UserHeader></UserHeader>
        <Home style="backSlide"></Home>
        </Route>
        <Route path="/login">
        <UserHeader></UserHeader>
        <LoginForm style="upsertformsShow"></LoginForm>
        <Home style="backSlide"></Home>
        </Route>
        <Route path="/register">
        <UserHeader></UserHeader>
        <RegisterForm style="upsertformShow"></RegisterForm>
        <Home style="backSlide"></Home>
        </Route>
        <Route path="/confirm/:code">
        <UserHeader></UserHeader>
        <ConfirmRegistration style="upsertformShow"></ConfirmRegistration>
        <Home style="backSlide"></Home>
        </Route>
        <Route path="/subjects">
        <UserHeader></UserHeader>
        <AllSubjects></AllSubjects>
        </Route>
        </Switch>
}
    </Router>
       
  );
}


export default App;
