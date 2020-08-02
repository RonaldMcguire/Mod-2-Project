import React from 'react';
import './Nav.jsx';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    Redirect
  } from "react-router-dom";

class Nav extends React.Component{
    render(){
        return(

  
<nav className="navbar navbar-expand-lg navbar-light bg-light">

  
  
  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav mr-auto">
      <li className="nav-item active">
        <Link className="nav-link" to="/">Home</Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="/Login">Login</Link>
      </li>
      <li className="nav-item dropdown">
        <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Dropdown
        </a>
        <div className="dropdown-menu" aria-labelledby="navbarDropdown">
          <Link className="dropdown-item" to="/Ghibli">Studio Ghibli Movies</Link>
          <Link className="dropdown-item" href="#">Another action</Link>
          <div className="dropdown-divider"></div>
          <Link className="dropdown-item" href="#">Navi Mei</Link>
        </div>
      </li>
    </ul>
    <a className="navbar-brand" href="#">Navi Mei</a>
    <form className="form-inline my-2 my-lg-0">
    <img src = {require("../photos/logo.png")} alt=" " width="130"/>
    </form>
  </div>
  
</nav>
       );
    }
}

export default Nav;