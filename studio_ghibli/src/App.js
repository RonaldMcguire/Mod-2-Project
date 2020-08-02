import React from 'react';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect
} from "react-router-dom";
import Login from './Components/Login';
import Home from './Components/Home';
import Ghibli from './Components/Ghibli';
import Nav from './Components/Nav';


function App() {
  return (
    <Router>
      <Nav />
<Switch>

  
<Route path = "/Ghibli" component = { Ghibli } />
<Route exact path = "/" component = { Home } />
<Route path = "/Login" component = { Login } />
  
</Switch>
</Router>


  );
} 
export default App;
