import React, { Component } from "react";
import NavBar from "./navbar";
import axios from "axios";

class Login extends Component {
  state = {
    credentials: { login: "", password: "" },
    errors: ""
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

    try {
      // les logins et mot de passe sont OK
      const result = await axios.post(
        "https://nameless-retreat-19640.herokuapp.com/api/connexion",
        {
          login: this.state.credentials.login, // test@yahoo.fr
          mdp: this.state.credentials.password // azerty
        }
      );

      localStorage.setItem("token", result.data.token);

      // redirection
      // lorsque l'on avait un bouton de sauvegarde
      // props vient du composant Route
      this.props.history.push("/admin");
    } catch (ex) {
      // si les login et mot de passe sont KO

      this.setState({ errors: ex.response.data.msg });
    }
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
            {this.state.errors && (
              <div className="alert alert-danger">{this.state.errors}</div>
            )}
          </div>
        </section>
      </>
    );
  }
}

export default Login;
