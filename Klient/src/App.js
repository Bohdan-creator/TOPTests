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
import EditSubject from './Components/SubjectManager/EditSubject'
import AllTopics from './Components/TopicsManager/AllTopics'
import RegisterTopic from './Components/TopicsManager/RegisterTopic'
import EditTopic from './Components/TopicsManager/EditTopic'
import AddTest from './Components/TestManager/RegisterTest'
import AllTests from './Components/TestManager/AllTests'
import EditTest from './Components/TestManager/EditTest'
import AddTestQuestions from './Components/TestQuestionManager/AddTestQuestions'
import ShowTestToModify from './Components/TestQuestionManager/ShowTestModify'
import EditTestQuestionAnswer from './Components/TestQuestionManager/EditTestQuestionAnswer'
import DeletedQuestions from './Components/TestQuestionManager/DeletedQuestions'
import AddTestQuestion from './Components/TestQuestionManager/AddTestQuestion'
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
        <Route path="/home">
        <UserHeader></UserHeader>
        <Home style="backSlide"></Home>
        </Route>
        <Route path="/login">
        <UserHeader></UserHeader>
        <LoginForm style="upsertformsShow"></LoginForm>
        <Home style="blur"></Home>
        </Route>
        <Route path="/register">
        <UserHeader></UserHeader>
        <RegisterForm style="upsertformShow"></RegisterForm>
        <Home style="blur"></Home>
        </Route>
        <Route path="/confirm/:code">
        <UserHeader></UserHeader>
        <ConfirmRegistration style="upsertformShow"></ConfirmRegistration>
        <Home style="blur"></Home>
        </Route>
        <Route path="/subjects">
        <UserHeader></UserHeader>
        <AllSubjects></AllSubjects>
        </Route>
             </Switch>
           </div>
         )|| ( userRole==="admin"&&
           <div>
                         <Switch>
                         <Route path="/registerSubject">
        <UserHeader></UserHeader>
            <Subject style="upsertformsShow"></Subject>
        </Route>
        <Route path="/registerTest">
        <UserHeader></UserHeader>
        <AddTest style="upsertformsShow"></AddTest>
        </Route>
        <Route path="/tests/:id">
        <UserHeader></UserHeader>
        <AllTests ></AllTests>
        </Route>
        <Route path="/editTest/:id">
        <UserHeader></UserHeader>
        <EditTest ></EditTest>
        </Route>
        <Route path="/addTestQuestions">
        <UserHeader></UserHeader>
            <AddTestQuestions style="upsertformsShow"></AddTestQuestions>
        </Route>
        <Route path="/addTestQuestion">
        <UserHeader></UserHeader>
            <AddTestQuestion style="upsertformsShow"></AddTestQuestion>
        </Route>
        <Route path="/showTestModify/:id">
        <UserHeader></UserHeader>
            <ShowTestToModify style="upsertformsShow"></ShowTestToModify>
        </Route>
        <Route path="/showDeletedQuestions/:id">
        <UserHeader></UserHeader>
            <DeletedQuestions style="upsertformsShow"></DeletedQuestions>
        </Route>
        <Route path="/editTestQuestions/:id">
        <UserHeader></UserHeader>
            <EditTestQuestionAnswer style="editTestQuestionsforms"></EditTestQuestionAnswer>
        </Route>
        <Route path="/topics/register">
        <UserHeader></UserHeader>
        <RegisterTopic></RegisterTopic>
        </Route>
        <Route path="/topics/edit/:id">
        <UserHeader></UserHeader>
        <EditTopic></EditTopic>
        </Route>
             <Route path="/editSubject/:id">
        <UserHeader></UserHeader>
            <EditSubject></EditSubject>
        </Route>
        <Route path="/topics/:id">
        <UserHeader></UserHeader>
        <AllTopics></AllTopics>
        </Route>
        <Route path="/home">
        <UserHeader></UserHeader>
        <Home style="backSlide"></Home>
        </Route>
        <Route path="/login">
        <UserHeader></UserHeader>
        <LoginForm style="upsertformsShow"></LoginForm>
        <Home style="blur"></Home>
        </Route>
        <Route path="/register">
        <UserHeader></UserHeader>
        <RegisterForm style="upsertformShow"></RegisterForm>
        <Home style="blur"></Home>
        </Route>
        <Route path="/confirm/:code">
        <UserHeader></UserHeader>
        <ConfirmRegistration style="upsertformShow"></ConfirmRegistration>
        <Home style="blur"></Home>
        </Route>
        <Route path="/subjects">
        <UserHeader></UserHeader>
        <AllSubjects></AllSubjects>
        </Route>
        </Switch>
           </div>
         ) 
         ||
            <Switch>
        <Route path="/home">
        <UserHeader></UserHeader>
        <Home style="backSlide"></Home>
        </Route>
        <Route path="/login">
        <UserHeader></UserHeader>
        <LoginForm style="upsertformsShow"></LoginForm>
        <Home style="blur"></Home>
        </Route>
        <Route path="/register">
        <UserHeader></UserHeader>
        <RegisterForm style="upsertformShow"></RegisterForm>
        <Home style="blur"></Home>
        </Route>
        <Route path="/confirm/:code">
        <UserHeader></UserHeader>
        <ConfirmRegistration style="upsertformShow"></ConfirmRegistration>
        <Home style="blur"></Home>
        </Route>
        <Route path="/topics/:id">
        <UserHeader></UserHeader>
        <AllTopics></AllTopics>
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
