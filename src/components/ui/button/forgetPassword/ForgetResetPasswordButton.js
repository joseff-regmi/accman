import { Link } from "react-router-dom";
import "../css/LoginButton.css";

const ForgetResetPasswordButton = () => {
  return (
    <>
      <Link to="/logged-in-page">
        <button className="button">Submit</button>
      </Link>
    </>
  );
};

export { ForgetResetPasswordButton };
