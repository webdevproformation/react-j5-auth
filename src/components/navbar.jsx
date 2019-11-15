import React, { Component } from "react";
import { NavLink } from "react-router-dom";

class NavBar extends Component {
  state = {};
  logout = () => {
    // vider le localstorage
    localStorage.removeItem("token");
    // rediriger vers la page de login
    //this.props.history.push("/login");
    window.location = "/login";
  };

  render() {
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
            {!localStorage.getItem("token") && (
              <li className="nav-item">
                <NavLink className="nav-link" to="/login">
                  Login
                </NavLink>
              </li>
            )}
            {localStorage.getItem("token") && (
              <>
                <li className="nav-item">
                  <button
                    className="nav-link"
                    style={{ border: "none", background: "none" }}
                    onClick={this.logout}
                  >
                    Logout
                  </button>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/admin">
                    Admin
                  </NavLink>
                </li>
              </>
            )}
          </ul>
        </div>
      </nav>
    );
  }
}

export default NavBar;
