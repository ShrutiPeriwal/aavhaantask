import React, { useState } from "react";
import axios from "axios";

const Register1 = () => {

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
    <div className="flex flex-col w-full max-w-md px-4 py-8 bg-white rounded-lg shadow dark:bg-gray-800 sm:px-6 md:px-8 lg:px-10">
    <div className="self-center mb-6 text-xl font-light text-gray-600 sm:text-2xl dark:text-white">
      Register Your Account
    </div>
    <div className="mt-8">
      <form action="#" autoComplete="off">
        <div className="flex flex-col mb-2">
          <div className="flex relative ">
            
            <input
              type="text"
              id="sign-in-email"
              className=" rounded-r-lg flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
              placeholder="Your username"
              onChange={(e) => {
            setUsernameReg(e.target.value);
          }}
            />
          </div>
        </div>
        <div className="flex flex-col mb-6">
          <div className="flex relative ">
            
            <input
              type="password"
              id="sign-in-email"
              className=" rounded-r-lg flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
              placeholder="Your password"
              onChange={(e) => {
            setPasswordReg(e.target.value);
          }}
            />
          </div>
        </div>
        
        <div className="flex w-full">
          <button
            type="submit"
            className="py-2 px-4  bg-purple-600 hover:bg-purple-700 focus:ring-purple-500 focus:ring-offset-purple-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg "
            onClick={register}
          >
            Register
          </button>
        </div>
      </form>
    </div>
    
  </div>
);
};


export default Register1