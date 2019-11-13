import React from "react";
import NavBar from "./navbar";

const Home = () => {
  return (
    <>
      <section className="row">
        <div className="col-md-8 offset-md-2">
          <NavBar />
        </div>
      </section>
      <section className="row">
        <div className="col-md-8 offset-md-2 my-3">Page d'accueil !</div>
      </section>
    </>
  );
};

export default Home;
