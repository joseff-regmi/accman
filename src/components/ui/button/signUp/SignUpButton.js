import { Link } from "react-router-dom";
import "../css/LoginButton.css";

const SignUpButton = () => {
  return (
    <>
      <Link to="/logged-in-page">
        <button className="button">Sign Up</button>
      </Link>
    </>
  );
};

export { SignUpButton };
