import React from "react";
import { NavLink } from "react-router-dom";
import classes from "./Header.module.css";

// return the Header at fixed location ------------------------------------

function Header() {
  return (
    <div className={classes.Header}>
      <NavLink to="/" activeClassName={classes.ActiveLink} exact>
        Form
      </NavLink>

      <NavLink to="/submissions" activeClassName={classes.ActiveLink} exact>
        Table
      </NavLink>
    </div>
  );
}

export default Header;
