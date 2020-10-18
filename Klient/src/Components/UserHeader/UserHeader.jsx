import React from 'react'
import Nav from 'react-bootstrap/Nav'
import NavDropdown from 'react-bootstrap/NavDropdown'
import Navbar from 'react-bootstrap/NavBar'
import logIn from '../img/logIn.png'
import {Component} from 'react'
import style from "../UserHeader/UserHeader.css"
import RegisterUser from '../RegisterForm/RegisterForm'

class UserHeader extends Component{
  render(){
    return(   
         <Navbar collapseOnSelect expand="lg" style={{background:"RGBA(12,29,44,1)"}} variant="dark">
  <Navbar.Brand href="#home" style={{fontSize: 40 + 'px',color:'#ffebee'}}>Testex</Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="mr-auto">
      <Nav.Link href="/home" class="links">Home</Nav.Link>
      <Nav.Link href="#pricing" class="links">Tests</Nav.Link>
      <NavDropdown class="links" title="" id="collasible-nav-dropdown">
        <NavDropdown.Item href="/3.1">Contacts</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.2">Problems</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="#action/3.4">FeedBack</NavDropdown.Item>
      </NavDropdown>
    </Nav>
    <Nav>
      <a class="link-logo" href="http://localhost:3000/register"><img class="logo" src={logIn}></img></a>
    </Nav>
  </Navbar.Collapse>
</Navbar>
    );
  }
}

export default UserHeader;