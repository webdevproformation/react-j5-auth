import React from "react";
import NavBaradmin from "./navbar";

const DashBoard = () => {
  return (
    <section className="row">
      <div className="col-md-2 offset-md-2 my-3">
        <NavBaradmin />
      </div>
      <div className="col-md-6 my-3">Home backoffice DashBoard</div>
    </section>
  );
};

export default DashBoard;
