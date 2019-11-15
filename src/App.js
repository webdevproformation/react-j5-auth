import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAmbulance, faAnchor } from "@fortawesome/free-solid-svg-icons";
import Home from "./components/home";
import Login from "./components/login";
import NotFound from "./components/not-found";
import Dashboard from "./components/admin/dashboard";
import Posts from "./components/admin/posts";
import Users from "./components/admin/users";
import { Route, Redirect, Link, Switch } from "react-router-dom";

function gestionLogo() {
  if (1 === 0) {
    return <FontAwesomeIcon icon={faAmbulance} style={{ fontSize: 35 }} />;
  } else {
    return <FontAwesomeIcon icon={faAnchor} style={{ fontSize: 35 }} />;
  }
}

function App() {
  const icone = <faAmbulance />;
  return (
    <div className="container">
      <header className="row py-3" style={{ justifyContent: "center" }}>
        <Link to="/" className="">
          {gestionLogo()}
        </Link>
      </header>

      <Switch>
        <Route
          path="/admin/users"
          render={() => {
            const verif = localStorage.getItem("token");
            if (verif) {
              return <Users />;
            } else {
              return <Redirect to="/login" />;
            }
          }}
        />
        <Route
          path="/admin/posts"
          render={() => {
            const verif = localStorage.getItem("token");
            if (verif) {
              return <Posts />;
            } else {
              return <Redirect to="/login" />;
            }
          }}
        />
        <Route
          path="/admin"
          exact
          render={() => {
            const verif = localStorage.getItem("token");
            if (verif) {
              return <Dashboard />;
            } else {
              return <Redirect to="/login" />;
            }
          }}
        />
        <Route path="/login" component={Login} />
        <Route path="/not-found" component={NotFound} />
        <Route path="/" exact component={Home} />
        <Redirect to="/not-found" />
      </Switch>
    </div>
  );
}

export default App;
