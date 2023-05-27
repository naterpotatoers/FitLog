import React from "react";
import Logout from "./Logout";
import User from "./User";

function Navbar() {
  return (
    <nav className="row">
      <h1 className="title">FitLog</h1>
      <User />
      <Logout />
    </nav>
  );
}

export default Navbar;