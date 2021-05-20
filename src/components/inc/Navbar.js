import React from 'react';
import {Link} from 'react-router-dom';

function Navbar() {
  return (
<nav className="navbar navbar-expand-lg navbar-light bg-light shadow">
  
  <Link to="/" className="navbar-brand ms-auto" >I Love IT)</Link>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav ms-auto">
      <li className="nav-item ">
              <Link to="/" className="nav-link active" >Home</Link>
      </li>
      <li className="nav-item ">
              <Link to="/about" className="nav-link active" >About</Link>
      </li>
      <li className="nav-item ">
              <Link to="/contact" className="nav-link active" >Contact</Link>
      </li>
     
       
    </ul>
  </div>
</nav>
  );
}

export default Navbar;