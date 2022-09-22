import React, {useState} from 'react';
import axios from 'axios';

const Login = () => {

  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");

  const [loginStatus, setLoginStatus] = useState("");

  const login = async (req, res) => {
    const response = await axios.post("http://localhost:3001/login", {
      username: username,
      password: password,
    })
    if(response.data.message) {
    setLoginStatus(response.data.message)
    } else {
      setLoginStatus(response.data[0].username)
    }
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
        <h1>{loginStatus}</h1>
    </div>
  )
}

export default Login