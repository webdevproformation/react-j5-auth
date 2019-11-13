import React from "react";
import NavBaradmin from "./navbar";

const Users = () => {
  return (
    <section className="row">
      <div className="col-md-2 offset-md-2 my-3">
        <NavBaradmin />
      </div>
      <div className="col-md-6 my-3">
        <h2>Gestion des Utilisateurs</h2>
      </div>
    </section>
  );
};

export default Users;
