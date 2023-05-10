import React from "react";
import { Link } from "react-router-dom";
import "./navbar.css";

const Navbar = () => {
  return (
    <div className="navbar">
      <Link to="/" smooth>
        Puremike Dev
      </Link>
      <div>
        <Link to="/counter" smooth>
          Counter App
        </Link>
        <Link to="#" smooth>
          Blog App
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
