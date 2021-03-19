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
      <NavLink
        to="/product"
        exact={true}
        className="NavLink"
        activeClassName="NavLinkActive"
      >
        Product Page
      </NavLink>
      <NavLink
        to="/cart"
        exact={true}
        className="NavLink"
        activeClassName="NavLinkActive"
      >
        Cart Page
      </NavLink>
    </div>
  );
}
