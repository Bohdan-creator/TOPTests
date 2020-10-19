import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import UserHeader from './Components/UserHeader/UserHeader';
import Home from './Components/Home/Home';
import RegisterForm from './Components/RegisterForm/RegisterForm'
import LoginForm from './Components/LoginForm/LoginForm'
import ConfirmRegistration from './Components/ConfirmRegistration/ConfirmRegistration'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
function App() {
  return (
    <Router>
    <div className="App">
      <header className="App-header">
      <Switch>
        <Route path="/home">
        <UserHeader></UserHeader>
        <Home style="backSlide"></Home>
        </Route>
        <Route path="/register">
        <UserHeader></UserHeader>
        <RegisterForm style="upsertformsShow"></RegisterForm>
        <Home style="blur"></Home>
        </Route>
        <Route path="/login">
        <UserHeader></UserHeader>
        <LoginForm style="upsertformsShow"></LoginForm>
        <Home style="blur"></Home>
        </Route>
        <Route path="/confirm/:code">
        <UserHeader></UserHeader>
        <ConfirmRegistration></ConfirmRegistration>
        </Route>
        </Switch>
      </header>
    </div>
    </Router>
  );
}

export default App;
