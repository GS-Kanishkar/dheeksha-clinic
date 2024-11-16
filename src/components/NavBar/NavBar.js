import { Link } from "react-scroll";
import React, { useState, Fragment, useEffect } from "react";
import "./navbar.css";
import { FaBars } from "react-icons/fa";
import logo from "./logo.png"


const NavBar = (props) => {
  const [colorChange, setColorchange] = useState(false);
  const [toggle, setToggle] = useState(false);
  const [galleryExpanded, setGalleryExpanded] = useState(false);
  const [width, setWidth] = useState(window.innerWidth);
  const [value, setValue] = useState(props.active);
  const changeNavbarColor = () => {
    if (window.scrollY >= 50) {
      setColorchange(true);
    } else if (toggle) {
      setColorchange(true);
    } else {
      setColorchange(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", changeNavbarColor);
  });

  const closeNav = (value) => {
    setValue(value);
    document.getElementById("navbarSupportedContent").className =
      "collapse navbar-collapse justify-content-end transition";
  };
  useEffect(() => {
    window.addEventListener("resize", () => setWidth(window.innerWidth));
  });
  return (
    <Fragment>
      <nav
        id="navBar"
        className={
          window.location.pathname === "/"
            ? colorChange || width < 992
              ? "navbar navbar-expand-lg fixed-top navbar-dark colorChange"
              : "navbar navbar-expand-lg fixed-top navbar-dark  transition"
            : "navbar navbar-expand-lg fixed-top navbar-light colorChange transition"
        }
      >
        <div className="container">
          <Link to="/">
          <img src={logo} style={{ height: "40px" }} alt="Logo" />
          </Link>
          <div
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <FaBars color="#ff7000" />
          </div>

          <div
            className={"collapse navbar-collapse justify-content-end"}
            id="navbarSupportedContent"
          >
            <ul className="navbar-nav mr-auto ">
              <Link to="/">
                <li
                  key="home"
                  onClick={() => closeNav("home")}
                  
                  className={`nav-item hover-underline-animation new ${
                    window.location.pathname === "/"
                      ? "hover-underline-animation1 new1"
                      : ""
                  }`}
                >
                  <span
                    className="nav-link"
                    style={{
                      color: "white",
                    }}
                  >
                    Home
                  </span>
                </li>
              </Link>
            </ul>






            <ul className="navbar-nav ml-auto">
      <Link to="services" smooth={true} duration={500}>
        <li
          key="services"
          className={`nav-item hover-underline-animation new ${
            window.location.pathname === "/about"
              ? "hover-underline-animation1 new1"
              : ""
          }`}
        >
          <span
            className="nav-link"
            style={{
              color: "white",
            }}
          >
            services
          </span>
        </li>
      </Link>
    </ul>



    <ul className="navbar-nav ml-auto">
      <Link to="doctorprofile" smooth={true} duration={500}>
        <li
          key="doctorprofile"
          className={`nav-item hover-underline-animation new ${
            window.location.pathname === "/about"
              ? "hover-underline-animation1 new1"
              : ""
          }`}
        >
          <span
            className="nav-link"
            style={{
              color: "white",
            }}
          >
            Doctor Profile
          </span>
        </li>
      </Link>
    </ul>

    <ul className="navbar-nav ml-auto">
      <Link to="Galleries" smooth={true} duration={500}>
        <li
          key="Galleries"
          className={`nav-item hover-underline-animation new ${
            window.location.pathname === "/about"
              ? "hover-underline-animation1 new1"
              : ""
          }`}
        >
          <span
            className="nav-link"
            style={{
              color: "white",
            }}
          >
            Galleries
          </span>
        </li>
      </Link>
    </ul>


    <ul className="navbar-nav ml-auto">
      <Link to="ClinicBenefits" smooth={true} duration={500}>
        <li
          key="ClinicBenefits"
          className={`nav-item hover-underline-animation new ${
            window.location.pathname === "/about"
              ? "hover-underline-animation1 new1"
              : ""
          }`}
        >
          <span
            className="nav-link"
            style={{
              color: "white",
            }}
          >
            About
          </span>
        </li>
      </Link>
    </ul>



   


    <ul className="navbar-nav ml-auto">
      <Link to="footer" smooth={true} duration={500}>
        <li
          key="about"
          className={`nav-item hover-underline-animation new ${
            window.location.pathname === "/about"
              ? "hover-underline-animation1 new1"
              : ""
          }`}
        >
          <span
            className="nav-link"
            style={{
              color: "white",
            }}
          >
            Contact Us
          </span>
        </li>
      </Link>
    </ul>

           
          </div>
        </div>
      </nav>
    </Fragment>
  );
};

export default NavBar;
