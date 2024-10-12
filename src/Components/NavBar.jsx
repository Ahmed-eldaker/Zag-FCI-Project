import React from "react";
import { Link, NavLink } from "react-router-dom";

export default function NavBar() {
  return (
    <nav>
      <div className="container">
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
          <NavLink
            className={"navbar-brand"}
            style={({ isActive }) => ({
              color: isActive ? "red" : "black",
            })}
            to="/home"
          >
            Home
          </NavLink>
          <NavLink
            className="navbar-brand"
            style={({ isActive }) => ({ color: isActive ? "red" : "black" })}
            to="/about"
          >
            About
          </NavLink>
          <NavLink
            className="navbar-brand"
            style={({ isActive }) => ({
              color: isActive ? "red" : "black",
            })}
            to="/contact"
          >
            Contact
          </NavLink>
          <NavLink
            className="navbar-brand"
            style={({ isActive }) => ({
              color: isActive ? "red" : "black",
            })}
            to="/dashboard"
          >
            Dashboard
          </NavLink>
        </nav>
      </div>
    </nav>
  );
}
