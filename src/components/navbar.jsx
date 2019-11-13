import React from "react";
import { NavLink } from "react-router-dom";

const NavBar = () => {
  //return <></>;

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <NavLink className="navbar-brand" to="/">
        Demo auth
      </NavLink>
      <div
        className="collapse navbar-collapse"
        style={{ justifyContent: "space-between" }}
      >
        <ul className="navbar-nav">
          <li className="nav-item">
            <NavLink className="nav-link" to="/" exact>
              Home
            </NavLink>
          </li>
        </ul>
        <ul className="navbar-nav align-self-end">
          <li className="nav-item">
            <NavLink className="nav-link" to="/login">
              Login
            </NavLink>
          </li>
          <li className="nav-item">
            <button
              className="nav-link"
              style={{ border: "none", background: "none" }}
            >
              Logout
            </button>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/admin">
              Admin
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
