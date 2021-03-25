import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import { FaBars, FaTimes, FaHorse } from "react-icons/fa";
const Navbar = () => {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  return (
    <>
      <div className="navbar" style={{ backgroundColor: "red" }}>
        <div className="navbar-container container">
          <Link to="/" className="navbar-logo">
            <FaHorse />
            Jai Golu Dev
          </Link>

          <div onClick={handleClick} className="menu-icon">
            {click ? <FaTimes /> : <FaBars />}
          </div>
          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-items">
              <Link to="/" className="nav-links">
                Home
              </Link>
            </li>
            <li className="nav-items">
              <Link to="/PlusMinus" className="nav-links">
                PlusMinus
              </Link>
            </li>
            <li className="nav-items">
              <Link to="/Calculate" className="nav-links">
                Calculate
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};
export default Navbar;
