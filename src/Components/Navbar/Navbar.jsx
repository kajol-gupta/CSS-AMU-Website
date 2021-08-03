import React, { useState } from "react";
import logo from "./pp.jpg";
import "./navbar.css";
import {
  FaFacebookSquare,
  FaInstagramSquare,
  FaYoutubeSquare,
} from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";

const Navbar = () => {
  const [showMediaIcons, setShowMediaIcons] = useState(false);
  return (
    <>
      <nav className="main-nav">
        <div className="logo">
          <img src={logo} alt="logo" />
          <div className="heading">
            <h2>Computer Science Society</h2>
          </div>
        </div>

        <div
          className={
            showMediaIcons ? "menu-link mobile-menu-link" : "menu-link"
          }
        >
          <ul>
            <li>
              <a href="#a"> Home</a>
            </li>
            <li>
              <a href="#a"> About</a>
            </li>
            <li>
              <a href="#a"> Education</a>
            </li>
            <li>
              <a href="#a"> Research</a>
            </li>
          </ul>
        </div>

        <div className="social-media">
          <ul className="social-media-desktop">
            <li>
              <a href="#1" target="_">
                <FaFacebookSquare className="facebook" />
              </a>
            </li>
            <li>
              <a href="#2" target="_">
                <FaInstagramSquare className="instagram" />
              </a>
            </li>
            <li>
              <a href="#3" target="_">
                <FaYoutubeSquare className="youtube" />
              </a>
            </li>
          </ul>
          <div className="hamburger-menu">
            <a href="#d" onClick={() => setShowMediaIcons(!showMediaIcons)}>
              <GiHamburgerMenu />
            </a>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
