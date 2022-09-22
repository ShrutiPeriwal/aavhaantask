import React from 'react'
import Login from "../Login/Login1";
import Register from "../Register/Register1";
import {Outlet} from 'react-router-dom';

const Home = () => {
  return (
    <>
        <div className="flex justify-center item-center mt-[7rem]">
        <Register />
        <Login />
      </div>
      <Outlet />
    </>
  )
}

export default Home