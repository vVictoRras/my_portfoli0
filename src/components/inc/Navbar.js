import React from 'react';


import {
  BrowserRouter as Router

} from "react-router-dom";
import { Navbar,Nav } from 'react-bootstrap'

class BootNavbar extends React.Component{

  render(){
    return(
        <div>
          <div className="row">
            <div className="col-md-12">
              <Router>
                <Navbar bg="light" variant="light" expand="lg" sticky="top">
                  <Navbar.Brand href="/">My Portfolio</Navbar.Brand>
                  <Navbar.Toggle aria-controls="basic-navbar-nav" />
                  <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                      {/*<Nav.Link href="/">Home</Nav.Link>*/}
                      <Nav.Link href="/skills">Skills</Nav.Link>
                      <Nav.Link href="/about">About</Nav.Link>
                      <Nav.Link href="/contacts">Contacts</Nav.Link>
                    </Nav>

                  </Navbar.Collapse>
                </Navbar>

              </Router>
            </div>
          </div>
        </div>
    )
  }
}

export default BootNavbar;