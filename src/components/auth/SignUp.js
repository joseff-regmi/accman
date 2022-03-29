
import { SignUpEmail } from "../ui/input/signUp/SignUpEmail";

import { Link } from "react-router-dom";
import { ContinueButtonEmail } from "../ui/button/signUp/ContinueButtonEmail";

const SignUp = () => {
  return (
    <>
      <SignUpEmail />
      <ContinueButtonEmail />
      <p>
        Already a member?
        <Link className="link-login-signup" to="/auth/login">
          {" "}
          Login
        </Link>
      </p>
    </>
  );
};

export { SignUp };
