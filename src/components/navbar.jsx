import React from "react";

const Navbar = ({ totalCounters }) => {
  return (
    <nav className="navbar navbar-light bg-light">
      <a className="navbar-brand" href="#">
        Navbar{" "}
        <spam className="badge badge-pill badge-secondary">
          {totalCounters}
        </spam>
      </a>
    </nav>
  );
};

export default Navbar;
