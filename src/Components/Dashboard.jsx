import React from "react";
import { NavLink, Outlet } from "react-router-dom";

export default function Dashboard() {
  return (
    <>
      <h2>Dashboard</h2>
      <nav className="navbar navbar-expand-lg">
        <ul>
          <li>
            <NavLink to="posts" className="nav-link">
              Posts
            </NavLink>
          </li>
          <li>
            <NavLink to="users" className="nav-link">
              users
            </NavLink>
          </li>
        </ul>
      </nav>
      <Outlet />
    </>
  );
}
