import * as React from "react";
import { useSpring, animated } from "react-spring";
import { Link } from "react-router-dom";
import "./Styles.css";

const Drawer = ({ show }) => {
  const props = useSpring({
    left: show ? window.innerWidth - 300 : window.innerWidth,
    position: "absolute",
    top: 0,
    backgroundColor: "#806290",
    height: "100vh",
    width: "300px",
  });

  return (
    <animated.div style={props}>
      <div className="drawer">
      <div className="hidden md:flex items-center">
        <a className="text-lg uppercase mx-3 text-white cursor-pointer hover:text-gray-300">
          <Link to="/product">Product</Link>
        </a>
        <a className="text-lg uppercase mx-3 text-white cursor-pointer hover:text-gray-300">
          <Link to="/customer">Customer</Link>
        </a>
        <a className="text-lg uppercase mx-3 text-white cursor-pointer hover:text-gray-300">
          <Link to="/order">Order</Link>
        </a>
      </div>
      </div>
    </animated.div>
  );
};

export default Drawer;
