import React from 'react';

function App() {
  return (
    <form>
  <div class="form-group">
    <label for="exampleInputEmail1">Email address</label>
    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"></input>
    <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
  </div>
  <div class="form-group">
    <label for="exampleInputPassword1">Password</label>
    <input type="password" class="form-control" id="exampleInputPassword1"></input>
  </div>

  <button type="submit" class="btn btn-primary" to='./Components/Login'>Submit</button>
  <input type="submit" onClick="myFunction()"/>
     <script>
       function myFunction() {
         window.location.href="/Components/Login.js"
       }
     </script>
</form>
    
  );
} 


export default Login;
