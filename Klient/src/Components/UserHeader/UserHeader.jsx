import React from 'react'
import Nav from 'react-bootstrap/Nav'
import NavDropdown from 'react-bootstrap/NavDropdown'
import Api from '../API/SubjectApi'
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
     this.state={
       subjects:[],
       height:0
     }
     this.GetSubjectTests();
  }
  GetSubjectTests = async () => {
    let api = new Api();
    console.log(this.id);
    const result =  await api.fetchSubjectsTests();
    console.log(result)
    this.setState({subjects:result});
}
 redirect(subjectId,testId){
  sessionStorage.setItem("SubjectId",subjectId);
  sessionStorage.setItem("TestId",testId)
                window.location.assign("/tests/"+subjectId);
}
  render(){
    return(   
    <div class="main_header">
    {sessionStorage.getItem("isLoggedIn")==="true" ? (
      <div>
  <Navbar collapseOnSelect expand="lg" style={{background:"RGBA(12,29,44,1)"}} variant="dark">
  <Navbar.Brand href="#home" style={{fontSize: 40 + 'px',color:'#ffebee'}}>Testex</Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="mr-auto">
      <Nav.Link href="/home" class="links">Home</Nav.Link> 
    
      <Nav.Link rol="button" onClick={()=>this.setState({height:100})}>What's learn?</Nav.Link>

      <div id="myNav" style={{height:this.state.height+'%'}} class="overlay">

      <a  rol="button"  class="closebtn" onClick={()=>this.setState({height:0})}>&times;</a>

       <div class="grid-container-subject-test">
           { this.state.subjects.map(item=>(
             <div>
               <p class="SubjectName">{item.name}</p>
               {item.tests.map(items=>(
                 <div>
                   <a class="TestsName" onClick={()=>this.redirect(item.id,items.id)}>{items.name}</a>
                   </div>
               ))}
             </div>
           ))}
       </div>

</div>
      <NavDropdown class="links" title="" id="collasible-nav-dropdown">Info
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
      <a class="link-logo" href="http://localhost:3000/myProfile"><img class="details" src={details}></img></a>
      <a class="link-logo" href="/home"><img class="logOut" src={logOut} 
      onClick={()=>{
        sessionStorage.clear();
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