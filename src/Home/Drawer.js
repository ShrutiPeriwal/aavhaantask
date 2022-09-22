import * as React from "react";
import { useSpring, animated } from "react-spring";
import { Link } from "react-router-dom";
import "./Styles.css";

const Drawer = ({ show }) => {
  const props = useSpring({
    left: show ? window.innerWidth - 500 : window.innerWidth,
    position: "absolute",
    top: "-130px",
    backgroundColor: "#806290",
    height: "100vh",
    width: "300px",
  });

  return (
    <animated.div style={props}>
      <div className="drawer">
        <div className="hidden md:flex items-center">
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
    </animated.div>
  );
};

export default Drawer;
