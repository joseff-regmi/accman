import { LoginPassword } from "../ui/input/login/LoginPassword";
import { LoginUsername } from "../ui/input/login/LoginUsername";
import { LoginButton } from "../ui/button/login/LoginButton";


import { Link } from "react-router-dom";

import "./css/Login.css";

const Login = () => {
  return (
    <>
      <LoginUsername />
      <LoginPassword />
      <LoginButton />
      <p>
        <Link className="link-login-signup" to="/auth/forget-password">
          Forget password?
        </Link>
      </p>
      <p>
        Not a member?
        <Link className="link-login-signup" to="/auth/signup">
          {" "}
          Sign Up
        </Link>
      </p>
    </>
  );
};

export { Login };
