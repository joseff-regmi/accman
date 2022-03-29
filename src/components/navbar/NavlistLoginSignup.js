import "./css/NavlistLoginSignup.css";
import { Link } from "react-router-dom";

const NavlistLoginSignup = () => {
  return (
    <>
      <ul className="navlist-login-signup">
        <li>
          <Link className="link-login-signup" to="/auth/login">
            {" "}
            Login{" "}
          </Link>
        </li>
        <li>
          <Link className="link-login-signup" to="/auth/signup">
            {" "}
            Sign Up{" "}
          </Link>
        </li>
      </ul>
    </>
  );
};

export { NavlistLoginSignup };
