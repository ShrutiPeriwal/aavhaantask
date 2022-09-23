import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <header className="absolute top-0 left-0 right-0 z-20">
      <nav className="container mx-auto px-6 md:px-12 py-4">
        <div className="md:flex justify-between items-center">
          <div className="hidden md:flex items-center">
            <Link to="/hero">
              <div className="text-lg uppercase mx-3 text-white cursor-pointer hover:text-gray-300">
                Home
              </div>
            </Link>
            <Link to="/product">
              <div className="text-lg uppercase mx-3 text-white cursor-pointer hover:text-gray-300">
                Product
              </div>
            </Link>
            <Link to="/customer">
              <div className="text-lg uppercase mx-3 text-white cursor-pointer hover:text-gray-300">
                Customer
              </div>
            </Link>
            <Link to="/order">
              <div className="text-lg uppercase mx-3 text-white cursor-pointer hover:text-gray-300">
                Order
              </div>
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
