import React, { useState } from "react";
import "./nav.css";
import { Link } from "react-router-dom";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { GiHamburgerMenu } from "react-icons/gi";

const Navbar = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <header className="header">
        <nav className="navbar">
          <Link to="/hero" className="nav-logo">
            Home
          </Link>
          <ul className="nav-menu">
            <li className="nav-item">
              <Link to="/product" className="nav-link">
                Products
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/customer" className="nav-link">
                Customers
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/order" className="nav-link">
                Orders
              </Link>
            </li>
          </ul>
          <div className="hamburger">
            <Button
              id="basic-button"
              aria-controls={open ? "basic-menu" : undefined}
              aria-haspopup="true"
              aria-expanded={open ? "true" : undefined}
              onClick={handleClick}
            >
              <GiHamburgerMenu />
            </Button>
            <Menu
              id="basic-menu"
              anchorEl={anchorEl}
              open={open}
              onClose={handleClose}
              MenuListProps={{
                "aria-labelledby": "basic-button",
              }}
            >
              <MenuItem onClick={handleClose}>
                <Link to="/product">Products</Link>
              </MenuItem>
              <MenuItem onClick={handleClose}>
                <Link to="/customer">Customer</Link>
              </MenuItem>
              <MenuItem onClick={handleClose}>
                <Link to="/order">Order</Link>
              </MenuItem>
            </Menu>
          </div>
        </nav>
      </header>
    </>
  );
};

export default Navbar;
