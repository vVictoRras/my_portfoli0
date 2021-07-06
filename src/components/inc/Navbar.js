import React from 'react';


// function Navbar() {
//   return (
// <nav className="navbar navbar-expand-lg navbar-light bg-light shadow">
//
//   <Link to="/" className="navbar-brand ms-auto" >My Portfolio</Link>
//   <button className="navbar-toggle" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
//     <span className="navbar-toggler-icon"></span>
//   </button>
//
//   <div className="collapse navbar-collapse" id="navbarSupportedContent">
//     <ul className="navbar-nav ms-auto">
//       <li className="nav-item ">
//               <Link to="/" className="nav-link active" >Home</Link>
//       </li>
//       <li className="nav-item ">
//               <Link to="/skills" className="nav-link active" >Skills</Link>
//       </li>
//       <li className="nav-item ">
//               <Link to="/about" className="nav-link active" >About</Link>
//       </li>
//       <li className="nav-item ">
//               <Link to="/contact" className="nav-link active" >Contact</Link>
//       </li>
//
//
//     </ul>
//   </div>
// </nav>
//   );
// }
//
// export default Navbar;

import {
  BrowserRouter as Router,
  Switch,
  Route,

} from "react-router-dom";
import { Navbar,Nav,NavDropdown,Form,FormControl,Button } from 'react-bootstrap'
import Home from '../pages/Home';
import AboutUs from '../pages/About';
import ContactUs from '../pages/Contact';

class BootNavbar extends React.Component{

  render(){
    return(
        <div>
          <div className="row">
            <div className="col-md-12">
              <Router>
                <Navbar bg="dark" variant="dark" expand="lg" sticky="top">
                  <Navbar.Brand href="#home">React Bootstrap Navbar</Navbar.Brand>
                  <Navbar.Toggle aria-controls="basic-navbar-nav" />
                  <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                      <Nav.Link href="/">Home</Nav.Link>
                      <Nav.Link href="/about-us">Contact Us</Nav.Link>
                      <Nav.Link href="/contact-us">About Us</Nav.Link>
                      <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                        <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                      </NavDropdown>
                    </Nav>
                    <Form inline>
                      <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                      <Button variant="outline-success">Search</Button>
                    </Form>
                  </Navbar.Collapse>
                </Navbar>
                <br />
                <Switch>
                  <Route exact path="/">
                    <Home />
                  </Route>
                  <Route path="/about-us">
                    <AboutUs />
                  </Route>
                  <Route path="/contact-us">
                    <ContactUs />
                  </Route>
                </Switch>
              </Router>
            </div>
          </div>
        </div>
    )
  }
}

export default BootNavbar;