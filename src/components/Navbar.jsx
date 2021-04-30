import React from 'react';
import {NavDropdown,Navbar, Nav,  } from "react-bootstrap";
import logo from "../../src/netflix_logo.png";
import capture from "../../src/Capture.PNG";
import { FaSearch } from "react-icons/fa";
import { BsBellFill } from "react-icons/bs";

class MyNavbar extends React.Component {
    state = {  }
    render() { 
      const mystyle = {
       width:"100px"
       // CSS CODE
       };
        return ( 
            <>
           <Navbar id="navbar" variant="dark" expand="lg">
  <Navbar.Brand href="#home"><img style={mystyle} src={logo} /></Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="mr-auto">
      <Nav.Link href="#home">Home</Nav.Link>
      <Nav.Link href="#link">Link</Nav.Link>
      <NavDropdown title="Dropdown" id="basic-nav-dropdown">
        <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
      </NavDropdown>
    </Nav>
    
      <FaSearch id="icon"></FaSearch>
      <Nav.Link id="kids" href="#link">KIDS</Nav.Link>
      <BsBellFill id="icon"></BsBellFill>
      <img className="ml-3" src={capture} style={{width:"35px"}}/>
      <NavDropdown id="basic-nav-dropdown" >
    
        <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
      </NavDropdown>
      
  </Navbar.Collapse>
</Navbar>
            </>
         );
    }
}
 
export default MyNavbar;