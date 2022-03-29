// local components
import { Logo } from "../common/logo/Logo";
import { Navlist } from "./Navlist";
import { NavlistLoginSignup } from "./NavlistLoginSignup";

import "./css/Navbar.css";

const Navbar = () => {
  return (
    <>
      <div className="navbar">
        <div className="navbar-left-container">
          <Logo />
          <Navlist />
        </div>
        <div>
          <NavlistLoginSignup />
        </div>
      </div>
    </>
  );
};

export { Navbar };
