import React from "react";
import { NavLink } from "react-router-dom";

export default function NavBar() {
  return (
    <div className="NavBar">
      <NavLink
        to="/"
        exact={true}
        className="NavLink"
        activeClassName="NavLinkActive"
      >
        Home
      </NavLink>
    </div>
  );
}
