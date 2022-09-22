import React, { useState } from "react";
import axios from "axios";

const Register = () => {
  const [usernameReg, setUsernameReg] = useState("");
  const [passwordReg, setPasswordReg] = useState("");

  const register = () => {
    axios.post('http://localhost:3001/register', {
        username: usernameReg,
        password: passwordReg,
    }).then((response) =>{
        console.log(response);
    })
  }
  return (
    <div>
      <div>
        <h1>Register</h1>
        <label>UserName</label>
        <input
          type="text"
          onChange={(e) => {
            setUsernameReg(e.target.value);
          }}
        />
        <label>Password</label>
        <input type="text" 
          onChange={(e) => {
            setPasswordReg(e.target.value);
          }}
        />
        <button onClick={register}>Register</button>
      </div>
    </div>
  );
};

export default Register;
