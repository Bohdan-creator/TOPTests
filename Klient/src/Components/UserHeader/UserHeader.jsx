import React from 'react'
import Nav from 'react-bootstrap/Nav'
import NavDropdown from 'react-bootstrap/NavDropdown'
import Navbar from 'react-bootstrap/NavBar'
import logIn from '../img/logIn.png'
import details from '../img/details.png'
import logOut from '../img/shutDown.png'
import {Component} from 'react'
import style from "../UserHeader/UserHeader.css"
import RegisterUser from '../RegisterForm/RegisterForm'

class UserHeader extends Component{
  constructor(props){
    super();
     if(sessionStorage.getItem("isLoggedIn")===null){
       sessionStorage.setItem("isLoggedIn",false);
     }
  }

  render(){
    return(   
    <div>
    {sessionStorage.getItem("isLoggedIn")==="true" ? (
      <div>
  <Navbar collapseOnSelect expand="lg" style={{background:"RGBA(12,29,44,1)"}} variant="dark">
  <Navbar.Brand href="#home" style={{fontSize: 40 + 'px',color:'#ffebee'}}>Testex</Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="mr-auto">
      <Nav.Link href="/home" class="links">Home</Nav.Link>
      <Nav.Link href="/subjects" class="links">Subjects</Nav.Link>
      <NavDropdown class="links" title="" id="collasible-nav-dropdown">
        <NavDropdown.Item href="/3.1">Contacts</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.2">Problems</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="#action/3.4">FeedBack</NavDropdown.Item>
      </NavDropdown>
    </Nav>
    <Nav>     
    <p style={{color:"white",fontSize:20+'px',marginRight:40+'px',marginTop:10+'px'}}>
      {sessionStorage.getItem("name")}
    </p>
    </Nav>
  
    <Nav>
      <a class="link-logo" href="http://localhost:3000/login"><img class="details" src={details}></img></a>
      <a class="link-logo" href="/home"><img class="logOut" src={logOut} 
      onClick={()=>{
        sessionStorage.setItem("isLoggedIn",false);
      }}
      ></img></a>
    </Nav>
  </Navbar.Collapse>
</Navbar>
      </div>
    ) :sessionStorage.getItem("isLoggedIn")=== "false" ?<div>
             <Navbar collapseOnSelect expand="lg" style={{background:"RGBA(12,29,44,1)"}} variant="dark">
  <Navbar.Brand href="#home" style={{fontSize: 40 + 'px',color:'#ffebee'}}>Testex</Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="mr-auto">
      <Nav.Link href="/home" class="links">Home</Nav.Link>
      <Nav.Link href="/subjects" class="links">Subjects</Nav.Link>
      <NavDropdown class="links" title="" id="collasible-nav-dropdown">
        <NavDropdown.Item href="/3.1">Contacts</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.2">Problems</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="#action/3.4">FeedBack</NavDropdown.Item>
      </NavDropdown>
    </Nav>
    <Nav>
      <a class="link-logo" href="http://localhost:3000/login"><img class="logo" src={logIn}></img></a>
    </Nav>
  </Navbar.Collapse>
</Navbar>
    </div>:<div></div>
    }
    </div>
    );
  }
}

export default UserHeader;