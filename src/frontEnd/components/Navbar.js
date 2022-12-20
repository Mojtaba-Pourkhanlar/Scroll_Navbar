import React, { useEffect, useState } from "react";
import { Logo } from "../shared/Logo";
import { navList } from "./navLink";

const Navbar = () => {
  const [navbar, setNavbar] = useState(false);
  const changeBackground = () => {
    if (window.scrollY >= 100) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };

  useEffect(() => {
    changeBackground();
    window.addEventListener("scroll", changeBackground);
  });

  const nav = {
    height: "60px",
    transition: "all 0.5s ease",
  };

  const navActive = {
    height: "80px",
    transition: "all 0.5s ease",
    backgroundColor: "#192048",
  };

  return (
    <>
      {navbar ? (
        <nav
          className="navbar navbar-expand-lg position-fixed w-100 top-0"
          style={navActive}>
          <div className="container-lg">
            <Logo />
            <div className="collapse navbar-collapse" id="navbarText">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                {navList.map((item) => (
                  <li key={item.id}>
                    <button className="btn text-light">{item.title}</button>
                  </li>
                ))}
              </ul>

              <div className="d-flex ">
                <button type="button" class="btn btn-primary mx-2">
                  Register
                </button>
                <button type="button" class="btn btn-success">
                  Login
                </button>
              </div>
            </div>
          </div>
        </nav>
      ) : (
        <nav
          className="navbar navbar-expand-lg position-fixed w-100 top-0 navbar-dark bg-dark"
          style={nav}>
          <div className="container-lg">
            <Logo />
            <div className="collapse navbar-collapse" id="navbarText">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                {navList.map((item) => (
                  <li key={item.id}>
                    <button className="btn text-light">{item.title}</button>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </nav>
      )}
    </>
  );
};

export default Navbar;
