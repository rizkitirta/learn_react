import React from "react";
import { NavLink } from "react-router-dom";
import { useRecoilValue } from "recoil";
import { authenticated, authUser } from "../store";

function Navbar({ children }) {
  const { user } = useRecoilValue(authUser);
  const auth = useRecoilValue(authenticated);

  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
        <div className="container">
          <NavLink className="navbar-brand " to="/">
            My App
          </NavLink>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="collapse navbar-collapse justify-content-spacebetween "
            id="navbarNav"
          >
            <ul className="navbar-nav">
              <li className="nav-item">
                <NavLink exact className="nav-link " to="/">
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link " to="/about">
                  About
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link " to="/contact">
                  Contact
                </NavLink>
              </li>
              <li className="nav-item">
                {auth.check ? (
                  <NavLink className="nav-link " to="/users">
                    Users
                  </NavLink>
                ) : (
                  ""
                )}
              </li>
            </ul>
            {auth.check ? (
              <ul className="navbar-nav">
                <li className="nav-item ">
                  <div className="">{auth.user.name}</div>
                </li>
              </ul>
            ) : (
              <ul className="navbar-nav ">
                <li className="nav-item">
                  <NavLink className="nav-link " to="/login">
                    Login
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link " to="/register">
                    Register
                  </NavLink>
                </li>
              </ul>
            )}
          </div>
        </div>
      </nav>
      <div className="p-5">{children}</div>
    </div>
  );
}

export default Navbar;
