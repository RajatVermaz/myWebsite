import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import { FaBars, FaTimes, FaHorse, FaPrayingHands } from "react-icons/fa";
import { RiContactsLine, RiHomeSmile2Line } from "react-icons/ri";
import { RiBankLine } from "react-icons/ri";

const Navbar = () => {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  // const closeMobileMenu = () => setClick(false);
  console.log(click);
  // if (click) {
  //   document.querySelector("body").classList.toggle("overflow");
  // }
  return (
    <>
      <div className="navbar">
        <div className="navbar-container ">
          <Link to="/" className="navbar-logo" onClick={handleClick}>
            <FaHorse />
            Shri Golu Ji
            <div className="logo">
              <span>
                स्वर्ण आभूषण निर्माता
                <FaPrayingHands />
              </span>
            </div>
          </Link>
          <div className="nav-menus">
            <div onClick={handleClick} className="menu-icon">
              {click ? <FaTimes /> : <FaBars />}
            </div>
            <ul className={click ? "nav-menu active" : "nav-menu"}>
              <Link to="/" className="nav-link" onClick={handleClick}>
                <li className="nav-item">
                  <RiHomeSmile2Line />
                  Home{" "}
                </li>
              </Link>
              <Link to="/calculate" className="nav-link" onClick={handleClick}>
                <li className="nav-item">
                  <RiBankLine />
                  Calculate Budget
                </li>
              </Link>
              <Link to="/contact" className="nav-link" onClick={handleClick}>
                <li className="nav-item">
                  <RiContactsLine />
                  Contact Us
                </li>
              </Link>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};
export default Navbar;
