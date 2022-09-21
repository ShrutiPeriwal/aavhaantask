import React, {useState} from 'react';
import axios from 'axios';

const Login = () => {

  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");

  const login = async (req, res) => {
    const response = await axios.post("http://localhost:3001/login", {
      username: username,
      password: password,
    })
    console.log(response);
  }
  
  return (
    <div className="App">
        <div className="login">
          <h1>Login Page</h1>
          <input type="text" placeholder="username" onChange={(e) => { 
            setUserName(e.target.value);
          }}/>
          <input type="password" placeholder="password" onChange={(e) => {
            setPassword(e.target.value);
          }}/>
          <button onClick={() => {login()}}>Login</button>
        </div>
    </div>
  )
}

export default Login