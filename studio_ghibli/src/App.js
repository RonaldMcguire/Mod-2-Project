import React from 'react';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect
} from "react-router-dom";
import Login from './Components/Login';
import Home from './Components/home';

function App() {
  return (
    <Router>

{/* This is the nav bar */}
<nav class="navbar navbar-expand-lg navbar-light bg-light">
  
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav mr-auto">
      <li class="nav-item active">
        <Link class="nav-link" to="/">Home</Link>
      </li>
      <li class="nav-item">
        <Link class="nav-link" to="/Login">Login</Link>
      </li>
      <li class="nav-item dropdown">
        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Dropdown
        </a>
        <div class="dropdown-menu" aria-labelledby="navbarDropdown">
          <Link class="dropdown-item" href="#">Action</Link>
          <Link class="dropdown-item" href="#">Another action</Link>
          <div class="dropdown-divider"></div>
          <Link class="dropdown-item" href="#">Something else here</Link>
        </div>
      </li>
      <li class="nav-item">
        <Link class="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</Link>
      </li>
    </ul>
    <a class="navbar-brand" href="#">Navi Mei</a>
    <form class="form-inline my-2 my-lg-0">
    <img src = {require("./photos/logo.png")} alt=" " width="130"/>
    </form>
  </div>
</nav>

<Switch>

<Route exact path = "/" component = {Home} />
<Route path = "/Login" component = {Login} />
{/* <Route path ="/home" component = {Home} / > */}
  
</Switch>
</Router>


  );
} 
{/* <Switch>
          <Route path ="/Login" >
            <Login />
            </Route>
            
</Switch>
    </Router> */}
export default App;
