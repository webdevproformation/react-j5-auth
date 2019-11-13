import React, { Component } from "react";
import NavBar from "./navbar";
import axios from "axios";

class Login extends Component {
  state = {
    credentials: { login: "", password: "" }
  };

  connexion = async e => {
    e.preventDefault(); // eviter de recharger la page lorsque l'on clique sur le bouton Connexion

    console.log({ ...this.state.credentials });

    // https://nameless-retreat-19640.herokuapp.com/api/connexion
    // POST
    // {
    //"login" : "test@yahoo.fr" ,
    //"mdp" : "azerty"
    //}

    // axios => yarn add axios

    const result = await axios.post(
      "https://nameless-retreat-19640.herokuapp.com/api/connexion",
      {
        login: this.state.credentials.login, // test@yahoo.fr
        mdp: this.state.credentials.password // azerty
      }
    );

    console.log(result);

    // "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZGNiYjUxNWUxMWU3MDAwMTdlODVkMjYiLCJuYW1lIjoiQWxhaW4iLCJyb2xlIjoicmVkYWN0ZXVyIiwiaWF0IjoxNTczNjQzNTU4fQ.D8-BS9TwnYaQ82XhJ1tV4Q8QPodIC3_ZJ957Q6nlPI8"

    localStorage.setItem("token", result.data.token);
  };

  change = e => {
    const { name, value } = e.target; // permet de récupérer le nom du champ utilisé ainsi que la valeur saisie dans le champ du formulaire
    const newCredentials = { ...this.state.credentials }; // clone du state
    newCredentials[name] = value; // stocke les valeurs saisies dans le clone

    this.setState({ credentials: newCredentials });
  };
  render() {
    return (
      <>
        <section className="row">
          <div className="col-md-8 offset-md-2">
            <NavBar />
          </div>
        </section>
        <section className="row">
          <div className="col-md-8 offset-md-2 my-3">
            <form onSubmit={this.connexion}>
              <div className="form-group">
                <label htmlFor="login">Login</label>
                <input
                  type="text"
                  className="form-control"
                  id="login"
                  placeholder="login"
                  value={this.state.credentials.login}
                  onChange={this.change}
                  name="login"
                />
              </div>
              <div className="form-group">
                <label htmlFor="password">Password</label>
                <input
                  type="text"
                  className="form-control"
                  id="password"
                  placeholder="password"
                  value={this.state.credentials.password}
                  onChange={this.change}
                  name="password"
                />
              </div>
              <div className="form-group text-center">
                <button type="submit" className="btn btn-primary">
                  Connexion
                </button>
              </div>
            </form>
          </div>
        </section>
      </>
    );
  }
}

export default Login;
