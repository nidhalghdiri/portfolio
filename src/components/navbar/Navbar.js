import React, {Component} from 'react';
import  {Navbar,Nav} from 'react-bootstrap';
import {   Link, NavLink } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import './Navbar.css';
// import { Link, animateScroll as scroll } from "react-scroll";
class OurNavbar extends Component{
    render(){
      const logo = "{NG}";
        return(
            <Navbar expand="lg">
  <Navbar.Brand href="#home" className="logo">{logo}</Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="mx-auto">
      {/* <Nav.Link href="#home">Home</Nav.Link> */}
      {/* <Nav.Link href="#link"> */}
      {/* <Link
            activeClass="active"
            to="about"
            spy={true}
            smooth={true}
            offset={-100}
            duration={500}
            className="nav-link"
            
          >
           About me
          </Link> */}
          {this.props.routes.map(route => (
              <Nav.Link
                key={route.path}
                as={NavLink}
                to={route.path}
                activeClassName="active"
                exact
              >
                {route.name}
              </Nav.Link>
            ))}
        

    
    </Nav>
  </Navbar.Collapse>
</Navbar>
        );
    }
}
export default OurNavbar;