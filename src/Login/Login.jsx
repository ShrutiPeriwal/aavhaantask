import React, {useState} from 'react';

const Login = () => {
  return (
    <div className="App">
        <div className="login">
          <h1>Login Page</h1>
          <input type="text" placeholder="username" />
          <input type="password" placeholder="password" />
          <button>Login</button>
        </div>
    </div>
  )
}

export default Login