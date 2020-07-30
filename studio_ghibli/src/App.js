import React from 'react';


import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    <Router>
      <div>
        <section>
          <header>
            <img src = {require("./photos/eye.jpeg")} alt=" "/>
          </header>
        </section>

      </div>
 

    
    </Router>

  );
} 

export default App;
