import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAirFreshener } from "@fortawesome/free-solid-svg-icons";
import Home from "./components/home";
import Login from "./components/login";
import NotFound from "./components/not-found";
import Dashboard from "./components/admin/dashboard";
import Posts from "./components/admin/posts";
import Users from "./components/admin/users";
import { Route, Redirect, Link, Switch } from "react-router-dom";

function App() {
  return (
    <div className="container">
      <header className="row py-3" style={{ justifyContent: "center" }}>
        <Link to="/" className="">
          <FontAwesomeIcon icon={faAirFreshener} style={{ fontSize: 35 }} />
        </Link>
      </header>

      <Switch>
        <Route path="/admin/users" component={Users} />
        <Route path="/admin/posts" component={Posts} />
        <Route path="/admin" exact component={Dashboard} />
        <Route path="/login" component={Login} />
        <Route path="/not-found" component={NotFound} />
        <Route path="/" exact component={Home} />
        <Redirect to="/not-found" />
      </Switch>
    </div>
  );
}

export default App;
