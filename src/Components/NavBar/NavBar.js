import React from "react";
import { Link } from "react-router-dom";
import Logo from "../../Images/Logo-AITP.png";

function NavBar() {
  return (
    <nav className="navBar">
      <Link to={"/"}>
        <img src={Logo} alt="Logo-AITP" height="100vh" width="100vw" />
      </Link>
      <Link to={"/store"}>Store</Link>
      <Link to={"/about"}>About</Link>
    </nav>
  );
}
export { NavBar };
