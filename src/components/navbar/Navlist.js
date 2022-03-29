import "./css/Navlist.css";

import { Link } from "react-router-dom";

const Navlist = () => {
  return (
    <>
      <ul className="navlist">
        <li>
          <Link className="link" to="/">
            Home
          </Link>
        </li>
        <li>
          <Link className="link" to="/features">
            Features
          </Link>
        </li>
        <li>
          <Link className="link" to="/about-us">
            About Us
          </Link>
        </li>
      </ul>
    </>
  );
};

export { Navlist };
