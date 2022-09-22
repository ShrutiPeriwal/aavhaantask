import React, { useState } from "react";
import Drawer from "./Drawer";
import "./Styles.css";

const Hero = () => {
  const [isDrawerShowing, setDrawerShowing] = useState(false);

  const handleToggleDrawer = () => {
    setDrawerShowing(!isDrawerShowing);
  };

  return (
    <div className="bg-indigo-900 relative overflow-hidden h-screen">
      <div className="inset-0 bg-black opacity-25 absolute"></div>
      <header className="absolute top-0 left-0 right-0 z-20">
        <nav className="container mx-auto px-6 md:px-12 py-4">
          <div className="md:flex justify-between items-center">
            <div className="flex justify-between items-center">
              <a href="#" className="text-white">
                <svg
                  className="w-8 mr-2 fill-current"
                  xmlns="http://www.w3.org/2000/svg"
                  data-name="Capa 1"
                  viewBox="0 0 16.16 12.57"
                >
                  <defs></defs>
                  <path d="M14.02 4.77v7.8H9.33V8.8h-2.5v3.77H2.14v-7.8h11.88z"></path>
                  <path d="M16.16 5.82H0L8.08 0l8.08 5.82z"></path>
                </svg>
              </a>
            </div>
          </div>
        </nav>
      </header>
      <div className="container mx-auto px-6 md:px-12 relative z-10 flex items-center py-32 xl:py-40">
        <div className="lg:w-3/5 xl:w-2/5 flex flex-col items-start relative z-10">
          <h1 className="font-bold text-xl sm:text-7xl text-white leading-tight mt-4">
            Welcome to Home Page
            <button className="openButton" onClick={handleToggleDrawer}>
              {isDrawerShowing ? "Close" : "Open"}
            </button>
            <Drawer show={isDrawerShowing} />
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Hero;