import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faSignOutAlt,
  faFileAlt,
  faUsers,
  faChartLine
} from "@fortawesome/free-solid-svg-icons";

class NavBaradmin extends Component {
  state = {};

  logout = () => {
    localStorage.removeItem("token");
    window.location = "/login";
  };

  render() {
    return (
      <nav className="navbar navbar-dark bg-dark">
        <ul className="navbar-nav">
          <li className="nav-item">
            <NavLink className="nav-link" to="/admin" exact>
              <FontAwesomeIcon icon={faChartLine} /> Dashboard
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/" exact>
              <FontAwesomeIcon icon={faHome} /> Retour Front
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/admin/posts">
              <FontAwesomeIcon icon={faFileAlt} /> Gestion Articles
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/admin/users">
              <FontAwesomeIcon icon={faUsers} /> Gestion Users
            </NavLink>
          </li>
          <li className="nav-item">
            <button
              className="nav-link"
              style={{ border: "none", background: "none" }}
              onClick={this.logout}
            >
              <FontAwesomeIcon icon={faSignOutAlt} /> Logout
            </button>
          </li>
        </ul>
      </nav>
    );
  }
}

export default NavBaradmin;
