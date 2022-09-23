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
      <div className="container mx-auto px-6 md:px-12 relative z-10 flex items-center py-32 xl:py-40">
        <div className="lg:w-3/5 xl:w-2/5 flex flex-col items-start relative z-10">
          <h1 className="font-bold text-xl sm:text-7xl text-white leading-tight mt-4">
            Welcome to Home Page
          </h1>
          <button
            className="openButton"
            style={{ marginTop: "50px" }}
            onClick={handleToggleDrawer}
          >
            {isDrawerShowing ? "Close" : "Open"}
          </button>
          <Drawer show={isDrawerShowing} />
        </div>
      </div>
    </div>
  );
};

export default Hero;
