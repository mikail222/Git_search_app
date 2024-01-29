import React from "react";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <div className="nav">
      <Link to="/">
        <i style={{ marginRight: "2rem" }}>Home</i>
      </Link>
      <Link to="Form">
        <i style={{ marginRight: "2rem" }}>Users</i>
      </Link>
    </div>
  );
};

export default Nav;
